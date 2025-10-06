# 📊 Monitoring Stack Deployment Guide

## 🏗️ Architecture Overview

### Development (Local)
```
┌────────────────────────────────────────┐
│  Your Computer                         │
│  ├─ Next.js App (localhost:3000)      │
│  ├─ Prometheus (localhost:9090)       │
│  ├─ Grafana (localhost:3001)          │
│  ├─ Elasticsearch (localhost:9200)    │
│  ├─ Logstash (localhost:5000)         │
│  └─ Kibana (localhost:5601)           │
└────────────────────────────────────────┘
```

### Production (Recommended)
```
┌─────────────────────────────────────────────┐
│  Netlify (Serverless - Free Tier)          │
│  ├─ Next.js App (Static + Edge Functions)  │
│  ├─ /api/metrics (exposes metrics)         │
│  └─ /api/logs (sends logs to Logstash)     │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│  Cloud Server (Required for Monitoring)     │
│  Options:                                   │
│  • DigitalOcean Droplet ($6/month)         │
│  • AWS EC2 (t3.small - ~$15/month)         │
│  • Google Cloud VM (e2-medium - ~$15/mo)   │
│  • Hetzner VPS (€4/month)                  │
│                                             │
│  Running via Docker Compose:                │
│  ├─ Prometheus (scrapes metrics)           │
│  ├─ Grafana (dashboards)                   │
│  ├─ Elasticsearch (stores logs)            │
│  ├─ Logstash (ingests logs)                │
│  └─ Kibana (log visualization)             │
└─────────────────────────────────────────────┘
```

## 🚨 Why You Need a Separate Server

### Netlify Limitations:
1. **Serverless Architecture**: No persistent containers
2. **No Docker Support**: Can't run Docker containers
3. **No Long-Running Processes**: Functions timeout after 10-26 seconds
4. **No Data Persistence**: No file system storage
5. **Stateless**: Each request is isolated

### What Works on Netlify:
✅ **Metrics Endpoint** (`/api/metrics`): Exposes current metrics  
✅ **Client-Side Logging**: Send logs to external Logstash  
✅ **Lightweight Monitoring**: Basic health checks

### What Requires a Server:
❌ **Prometheus**: Needs to run 24/7 to scrape metrics  
❌ **Grafana**: Persistent dashboard server  
❌ **Elasticsearch**: Database for log storage  
❌ **Logstash**: Log ingestion pipeline  
❌ **Kibana**: Log visualization interface

---

## 📋 Deployment Options

### Option 1: Netlify + Cloud Server (Recommended)

#### **Costs:**
- **Netlify**: FREE (300 build minutes/month)
- **Cloud Server**: $6-15/month
- **Total**: ~$10/month for full monitoring

#### **Steps:**

### 1️⃣ Deploy Next.js to Netlify

```bash
# Push to GitHub
git add .
git commit -m "Add monitoring stack"
git push origin main
```

**In Netlify Dashboard:**
1. Connect your GitHub repo
2. Set build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `out`
3. Add Environment Variables:
   ```
   FIREBASE_API_KEY=your_key
   FIREBASE_AUTH_DOMAIN=your_domain
   FIREBASE_PROJECT_ID=your_project_id
   FIREBASE_STORAGE_BUCKET=your_bucket
   FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_LOGSTASH_HOST=your-server-ip
   NEXT_PUBLIC_LOGSTASH_PORT=5000
   ```
4. Deploy

### 2️⃣ Set Up Cloud Server

#### **Option A: DigitalOcean (Easiest)**

1. **Create Droplet:**
   - Image: Ubuntu 22.04 LTS
   - Plan: Basic - $6/month (1 GB RAM, 1 CPU)
   - Add SSH key

2. **SSH into Server:**
   ```bash
   ssh root@your-server-ip
   ```

3. **Install Docker & Docker Compose:**
   ```bash
   # Update system
   apt update && apt upgrade -y
   
   # Install Docker
   curl -fsSL https://get.docker.com -o get-docker.sh
   sh get-docker.sh
   
   # Install Docker Compose
   curl -L "https://github.com/docker/compose/releases/download/v2.23.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   chmod +x /usr/local/bin/docker-compose
   ```

4. **Upload Monitoring Stack:**
   ```bash
   # On your local machine
   scp -r monitoring/ root@your-server-ip:/root/
   scp docker-compose.monitoring.yml root@your-server-ip:/root/
   ```

5. **Start Monitoring Stack:**
   ```bash
   # On the server
   cd /root
   docker-compose -f docker-compose.monitoring.yml up -d
   ```

6. **Configure Firewall:**
   ```bash
   # Allow necessary ports
   ufw allow 22    # SSH
   ufw allow 9090  # Prometheus
   ufw allow 3001  # Grafana
   ufw allow 5601  # Kibana
   ufw allow 5000  # Logstash
   ufw enable
   ```

#### **Option B: AWS EC2**

1. **Launch Instance:**
   - AMI: Ubuntu Server 22.04 LTS
   - Instance Type: t3.small
   - Security Group: Open ports 22, 9090, 3001, 5601, 5000

2. **Follow same Docker setup as DigitalOcean**

#### **Option C: Google Cloud VM**

1. **Create VM:**
   - Machine type: e2-medium
   - Boot disk: Ubuntu 22.04 LTS
   - Firewall: Allow HTTP/HTTPS traffic

2. **Configure Firewall Rules:**
   - Add rules for ports 9090, 3001, 5601, 5000

3. **Follow same Docker setup**

### 3️⃣ Update Monitoring Configuration

**On the server, edit monitoring files:**

```bash
# Edit Prometheus config
nano monitoring/prometheus.yml
```

Change the `nextjs-app` scrape target:
```yaml
  - job_name: 'nextjs-app'
    static_configs:
      - targets: ['your-netlify-app.netlify.app:443']
    scheme: https
    metrics_path: '/api/metrics'
```

**Restart services:**
```bash
docker-compose -f docker-compose.monitoring.yml restart prometheus
```

### 4️⃣ Access Your Monitoring

- **Grafana**: `http://your-server-ip:3001`
  - Username: `admin`
  - Password: `admin` (change immediately!)

- **Prometheus**: `http://your-server-ip:9090`

- **Kibana**: `http://your-server-ip:5601`

---

## 🔐 Production Security Checklist

### 1. **Secure Grafana:**
```bash
# On server, edit Grafana config
docker-compose -f docker-compose.monitoring.yml down
nano monitoring/grafana/grafana.ini
```

Add:
```ini
[security]
admin_password = YourStrongPassword123!
cookie_secure = true
cookie_samesite = strict
```

### 2. **Add Authentication to Prometheus:**
Use Nginx reverse proxy with basic auth

### 3. **Enable HTTPS:**
```bash
# Install Certbot
apt install certbot
certbot certonly --standalone -d monitoring.yourdomain.com
```

### 4. **Use Environment Variables:**
Never commit sensitive data to Git

### 5. **Set Up Backups:**
```bash
# Backup Elasticsearch data
docker exec elasticsearch \
  curl -X PUT "localhost:9200/_snapshot/my_backup" \
  -H 'Content-Type: application/json' \
  -d '{"type": "fs", "settings": {"location": "/backup"}}'
```

---

## 📊 What Gets Deployed Where

### **Netlify (Your Next.js App)**
✅ All your Next.js pages and components  
✅ `/api/metrics` endpoint (exposes current metrics)  
✅ Client-side code that sends logs to Logstash  
✅ Static assets and images  

### **Cloud Server (Monitoring Stack)**
✅ **Prometheus**: Scrapes `/api/metrics` from Netlify every 15s  
✅ **Grafana**: Creates dashboards from Prometheus data  
✅ **Elasticsearch**: Stores all logs sent from Netlify  
✅ **Logstash**: Receives logs from Netlify app  
✅ **Kibana**: Visualizes logs from Elasticsearch  

---

## 🔄 How It Works in Production

### **Metrics Flow:**
```
1. User visits https://vibricsdeals.netlify.app
2. Next.js app tracks metrics (page views, clicks)
3. Metrics stored in memory on Netlify function
4. Prometheus on your server scrapes https://vibricsdeals.netlify.app/api/metrics
5. Grafana queries Prometheus and displays dashboards
6. You view dashboards at http://your-server-ip:3001
```

### **Logging Flow:**
```
1. User action triggers log event in Next.js
2. lib/logger.ts sends log to http://your-server-ip:5000 (Logstash)
3. Logstash processes and sends to Elasticsearch
4. Elasticsearch indexes the log
5. You search logs in Kibana at http://your-server-ip:5601
```

---

## 💰 Cost Comparison

### **Full Stack Options:**

| Service | Netlify | Server | Total/Month |
|---------|---------|--------|-------------|
| **DigitalOcean** | Free | $6 | **$6** |
| **Hetzner VPS** | Free | €4 ($4.50) | **$4.50** |
| **AWS EC2 t3.small** | Free | $15 | **$15** |
| **Google Cloud e2-medium** | Free | $15 | **$15** |

### **Free Alternative (Limited):**
- **Netlify Only**: Use built-in analytics + `/api/metrics` endpoint
- **Cost**: $0
- **Limitations**: No historical data, no dashboards, no log search

---

## 🚀 Quick Deploy Commands

### **On Your Local Machine:**
```bash
# 1. Push to GitHub
git add .
git commit -m "Add monitoring stack"
git push origin main

# 2. Copy files to server
scp -r monitoring/ docker-compose.monitoring.yml root@YOUR_SERVER_IP:/root/
```

### **On Your Cloud Server:**
```bash
# 1. Install Docker
curl -fsSL https://get.docker.com | sh

# 2. Install Docker Compose
curl -L "https://github.com/docker/compose/releases/download/v2.23.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# 3. Start monitoring stack
docker-compose -f docker-compose.monitoring.yml up -d

# 4. Check status
docker-compose -f docker-compose.monitoring.yml ps
```

---

## 📝 Environment Variables for Netlify

Add these in Netlify Dashboard → Site Settings → Environment Variables:

```bash
# Firebase (existing)
FIREBASE_API_KEY=your_key
FIREBASE_AUTH_DOMAIN=your_domain
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_bucket
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id

# Monitoring (new)
NEXT_PUBLIC_LOGSTASH_HOST=your-server-ip
NEXT_PUBLIC_LOGSTASH_PORT=5000
```

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Next.js app loads on Netlify URL
- [ ] `/api/metrics` endpoint returns metrics: `https://your-app.netlify.app/api/metrics`
- [ ] Prometheus shows `nextjs-app` target as UP
- [ ] Grafana dashboards display data
- [ ] Logs appear in Kibana
- [ ] All Docker containers running: `docker ps`

---

## 🆘 Common Issues

### **Issue 1: Prometheus Can't Scrape Netlify**
**Error**: `context deadline exceeded`

**Fix**:
```yaml
# monitoring/prometheus.yml
- job_name: 'nextjs-app'
  static_configs:
    - targets: ['your-app.netlify.app:443']
  scheme: https
  metrics_path: '/api/metrics'
  scrape_interval: 30s
  scrape_timeout: 20s
```

### **Issue 2: Logs Not Appearing in Kibana**
**Error**: No data in Kibana

**Fix**:
1. Check Logstash is receiving: `curl -X POST http://your-server-ip:5000 -d '{"test":"message"}'`
2. Check Elasticsearch has data: `curl http://your-server-ip:9200/_cat/indices`
3. Create index pattern in Kibana: `nextjs-app-*`

### **Issue 3: Out of Memory**
**Error**: Elasticsearch crashes

**Fix**:
```bash
# Increase server RAM to at least 2GB
# Or reduce Elasticsearch heap size
docker-compose -f docker-compose.monitoring.yml down
nano docker-compose.monitoring.yml
```

Change:
```yaml
elasticsearch:
  environment:
    - "ES_JAVA_OPTS=-Xms512m -Xmx512m"  # Reduce from 1GB to 512MB
```

---

## 📊 What You Get

### **Grafana Dashboards:**
- Real-time request rates
- Response times
- Error rates
- Page view analytics
- Affiliate click tracking
- Memory and CPU usage

### **Kibana Log Search:**
- Search all application logs
- Filter by user, region, page
- Track user journeys
- Debug production issues
- Business intelligence (clicks, conversions)

### **Prometheus Alerts (Optional):**
- High error rates
- Slow response times
- Service downtime

---

## 🎯 Summary

### **What You Need:**
1. ✅ **Netlify** (Free): Hosts your Next.js app
2. ✅ **Cloud Server** ($5-15/month): Runs monitoring stack
3. ✅ **30 minutes**: Setup time

### **What You Get:**
- 📊 Professional monitoring and observability
- 🔍 Full log search and analytics
- 📈 Real-time dashboards
- 🚨 Error tracking
- 💼 Business metrics (clicks, views)

### **Recommended Path:**
1. Deploy to Netlify (FREE, 10 minutes)
2. Start with $6 DigitalOcean droplet
3. Scale up if needed

**You'll have enterprise-grade monitoring for less than the cost of a coffee per month!** ☕

---

## 📚 Next Steps

1. **Deploy to Netlify** (follow steps above)
2. **Set up DigitalOcean droplet** (or preferred cloud)
3. **Copy monitoring files to server**
4. **Start Docker Compose**
5. **Verify everything works**
6. **Show your boss the dashboards** 🎉

Need help with any step? Let me know!

