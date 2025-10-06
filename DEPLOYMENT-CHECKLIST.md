# 🚀 Deployment Checklist - Vibrics Deals

## ✅ Pre-Deployment Checklist

### 1. Code & Dependencies
- [x] All code changes committed
- [x] No linting errors (`npm run lint`)
- [x] Build successful (`npm run build`)
- [x] Dependencies updated and secure (`npm audit`)
- [x] Node.js version 18+ specified in `package.json`

### 2. Environment Variables
Set these in **Netlify Dashboard → Site Settings → Environment Variables**:

#### Firebase (Required)
```
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
FIREBASE_APP_ID=your_app_id
```

#### Monitoring (Optional - Add after server setup)
```
NEXT_PUBLIC_LOGSTASH_HOST=your-server-ip-or-domain
NEXT_PUBLIC_LOGSTASH_PORT=5000
```

### 3. Build Settings
Verify in `netlify.toml`:
- ✅ Build command: `npm run build`
- ✅ Publish directory: `out`
- ✅ Node version: `18`

---

## 📦 Step 1: Deploy to Netlify (FREE)

### Option A: Connect GitHub Repo (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy with monitoring stack"
   git push origin main
   ```

2. **In Netlify Dashboard:**
   - Click "Add new site" → "Import an existing project"
   - Select GitHub
   - Choose your repository: `be4youdeals-nextjs-app`
   - Netlify auto-detects settings from `netlify.toml`
   - Click "Deploy site"

3. **Add Environment Variables:**
   - Go to: Site Settings → Environment Variables
   - Add all Firebase variables (see above)
   - Click "Save"

4. **Trigger Redeploy:**
   - Go to: Deploys → Trigger deploy → Deploy site

5. **Verify Deployment:**
   - Visit your site: `https://your-site-name.netlify.app`
   - Test login/signup
   - Check `/api/metrics` endpoint

### Option B: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize site
netlify init

# Deploy
netlify deploy --prod
```

---

## 🖥️ Step 2: Set Up Monitoring Server (Optional)

### Recommended: DigitalOcean Droplet ($6/month)

1. **Create Droplet:**
   - Go to [DigitalOcean](https://www.digitalocean.com/)
   - Create → Droplets
   - Choose:
     - **Image**: Ubuntu 22.04 LTS
     - **Plan**: Basic - $6/month (1 GB RAM, 1 vCPU)
     - **Datacenter**: Closest to your users
     - **Add SSH Key**: Upload your public key
   - Click "Create Droplet"

2. **Note Your Server IP:**
   ```
   Server IP: xxx.xxx.xxx.xxx
   ```

3. **SSH into Server:**
   ```bash
   ssh root@xxx.xxx.xxx.xxx
   ```

4. **Install Docker:**
   ```bash
   # Update system
   apt update && apt upgrade -y
   
   # Install Docker
   curl -fsSL https://get.docker.com -o get-docker.sh
   sh get-docker.sh
   rm get-docker.sh
   
   # Verify
   docker --version
   ```

5. **Install Docker Compose:**
   ```bash
   # Download
   curl -L "https://github.com/docker/compose/releases/download/v2.23.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   
   # Make executable
   chmod +x /usr/local/bin/docker-compose
   
   # Verify
   docker-compose --version
   ```

6. **Upload Monitoring Files:**
   ```bash
   # On your local machine
   cd /path/to/be4youdeals-nextjs-app
   
   # Copy files to server
   scp -r monitoring/ root@xxx.xxx.xxx.xxx:/root/
   scp docker-compose.monitoring.yml root@xxx.xxx.xxx.xxx:/root/
   ```

7. **Update Prometheus Config:**
   ```bash
   # On the server
   nano /root/monitoring/prometheus.yml
   ```
   
   Change the `nextjs-app` target:
   ```yaml
   - job_name: 'nextjs-app'
     static_configs:
       - targets: ['your-site-name.netlify.app:443']
     scheme: https
     metrics_path: '/api/metrics'
     scrape_interval: 30s
   ```
   
   Save: `Ctrl+X`, `Y`, `Enter`

8. **Start Monitoring Stack:**
   ```bash
   cd /root
   docker-compose -f docker-compose.monitoring.yml up -d
   ```

9. **Verify Services:**
   ```bash
   # Check all containers are running
   docker-compose -f docker-compose.monitoring.yml ps
   
   # Should show all services as "Up"
   ```

10. **Configure Firewall:**
    ```bash
    # Install UFW
    apt install ufw
    
    # Allow necessary ports
    ufw allow 22/tcp      # SSH
    ufw allow 9090/tcp    # Prometheus
    ufw allow 3001/tcp    # Grafana
    ufw allow 5601/tcp    # Kibana
    ufw allow 5000/tcp    # Logstash
    
    # Enable firewall
    ufw --force enable
    
    # Verify
    ufw status
    ```

11. **Update Netlify Environment Variables:**
    - Go to: Netlify Dashboard → Site Settings → Environment Variables
    - Add:
      ```
      NEXT_PUBLIC_LOGSTASH_HOST = xxx.xxx.xxx.xxx
      NEXT_PUBLIC_LOGSTASH_PORT = 5000
      ```
    - Redeploy site

12. **Access Monitoring Dashboards:**
    - **Grafana**: `http://xxx.xxx.xxx.xxx:3001`
      - Username: `admin`
      - Password: `admin` (change immediately!)
    - **Prometheus**: `http://xxx.xxx.xxx.xxx:9090`
    - **Kibana**: `http://xxx.xxx.xxx.xxx:5601`

---

## 🔍 Step 3: Verify Everything Works

### Test Next.js App on Netlify
- [ ] Homepage loads: `https://your-site-name.netlify.app`
- [ ] Login/signup works
- [ ] Deals page displays products
- [ ] Navigation works (US/India regions)
- [ ] Images load correctly
- [ ] No console errors

### Test Metrics Endpoint
```bash
curl https://your-site-name.netlify.app/api/metrics
```
Should return Prometheus metrics format

### Test Monitoring Stack (If Set Up)

#### Prometheus
1. Go to: `http://xxx.xxx.xxx.xxx:9090`
2. Click "Status" → "Targets"
3. Verify `nextjs-app` target is **UP** (green)

#### Grafana
1. Go to: `http://xxx.xxx.xxx.xxx:3001`
2. Login: `admin` / `admin`
3. Change password
4. Go to: Home → Dashboards
5. Verify data is flowing

#### Kibana
1. Go to: `http://xxx.xxx.xxx.xxx:5601`
2. Click "Discover"
3. Create data view: `nextjs-app-*`
4. Select timestamp field: `@timestamp`
5. Save data view
6. Verify logs appear

### Test Log Shipping
```bash
# On your local machine, visit your Netlify site
# Navigate to different pages
# Click some deals

# Then check Kibana
# Go to: Discover → Search for "page_view" or "affiliate_click"
```

---

## 🔐 Step 4: Security Hardening (Production)

### Secure Grafana
```bash
# On server
nano /root/monitoring/grafana/grafana.ini
```

Add:
```ini
[security]
admin_password = YourStrongPassword123!
cookie_secure = true
cookie_samesite = strict

[auth.anonymous]
enabled = false
```

Restart:
```bash
docker-compose -f docker-compose.monitoring.yml restart grafana
```

### Enable HTTPS (Optional - Recommended)

**Option 1: Use Cloudflare (Easiest)**
1. Point domain to your server IP
2. Enable Cloudflare proxy (orange cloud)
3. Access via: `https://monitoring.yourdomain.com`

**Option 2: Use Let's Encrypt**
```bash
# Install Certbot
apt install certbot

# Get certificate
certbot certonly --standalone -d monitoring.yourdomain.com

# Update Nginx config (requires Nginx setup)
```

### Restrict Firewall (Optional)
```bash
# Only allow your IP to access monitoring
ufw delete allow 9090/tcp
ufw delete allow 3001/tcp
ufw delete allow 5601/tcp

# Allow only your IP
ufw allow from YOUR_IP_ADDRESS to any port 9090 proto tcp
ufw allow from YOUR_IP_ADDRESS to any port 3001 proto tcp
ufw allow from YOUR_IP_ADDRESS to any port 5601 proto tcp
```

---

## 📊 Step 5: Set Up Monitoring Dashboards

### Import Grafana Dashboard

1. **Go to Grafana**: `http://xxx.xxx.xxx.xxx:3001`
2. Click: **+ → Import**
3. Upload: `monitoring/grafana/dashboards/nextjs-app-dashboard.json`
4. Select data source: **Prometheus**
5. Click: **Import**

### Create Kibana Index Pattern

1. **Go to Kibana**: `http://xxx.xxx.xxx.xxx:5601`
2. Click: **☰ Menu → Stack Management → Data Views**
3. Click: **Create data view**
4. **Name**: `Next.js App Logs`
5. **Index pattern**: `nextjs-app-*`
6. **Timestamp field**: `@timestamp`
7. Click: **Save data view to Kibana**

### Create Kibana Visualizations

**Page Views by Region:**
1. Go to: **Discover**
2. Filter: `event.keyword: "page_view"`
3. Add columns: `region`, `page`, `timestamp`
4. Save search

**Affiliate Clicks:**
1. Filter: `event.keyword: "affiliate_click"`
2. Add columns: `productId`, `category`, `region`, `timestamp`
3. Save search

---

## 🚨 Troubleshooting

### Netlify Build Fails

**Error**: `Module not found`
- **Fix**: Ensure all dependencies in `package.json`
- Run locally: `npm run build`

**Error**: `Out of memory`
- **Fix**: In `netlify.toml`, add:
  ```toml
  [build.environment]
    NODE_OPTIONS = "--max_old_space_size=4096"
  ```

### Prometheus Can't Scrape Metrics

**Error**: Target DOWN in Prometheus
- Check `/api/metrics` works: `curl https://your-site.netlify.app/api/metrics`
- Verify `prometheus.yml` has correct URL
- Check firewall allows outbound connections

### Logs Not Appearing in Kibana

**Error**: No data in Kibana
1. Test Logstash: `curl -X POST http://xxx.xxx.xxx.xxx:5000 -d '{"test":"message"}'`
2. Check Elasticsearch: `curl http://localhost:9200/_cat/indices` (on server)
3. Verify `NEXT_PUBLIC_LOGSTASH_HOST` in Netlify env vars
4. Check browser console for CORS errors

### Docker Containers Keep Restarting

**Error**: Container exits immediately
```bash
# Check logs
docker logs <container_name>

# Common fixes:
# 1. Increase memory
docker-compose -f docker-compose.monitoring.yml down
# Edit docker-compose.monitoring.yml to reduce memory
docker-compose -f docker-compose.monitoring.yml up -d

# 2. Check disk space
df -h

# 3. Check ports not in use
netstat -tulpn | grep <port>
```

---

## 📝 Post-Deployment Tasks

### Update DNS (Optional)
- [ ] Point custom domain to Netlify
- [ ] Update Firebase authorized domains
- [ ] Update Google OAuth redirect URIs

### Set Up Backups (Recommended)
```bash
# On monitoring server
# Backup Elasticsearch data
docker exec elasticsearch curl -X PUT "localhost:9200/_snapshot/daily_backup" \
  -H 'Content-Type: application/json' \
  -d '{"type": "fs", "settings": {"location": "/backup"}}'

# Backup Grafana dashboards
docker exec grafana tar czf /var/lib/grafana/backup.tar.gz /var/lib/grafana/dashboards
```

### Monitor Costs
- [ ] Set up DigitalOcean billing alerts
- [ ] Monitor Netlify build minutes (300/month free)
- [ ] Check bandwidth usage

### Documentation
- [ ] Share Grafana URL with team
- [ ] Document access credentials (use password manager!)
- [ ] Create runbook for common issues

---

## ✅ Success Criteria

### Deployment Complete When:
- ✅ Next.js app live on Netlify
- ✅ All pages load correctly
- ✅ Authentication works
- ✅ No build errors
- ✅ Metrics endpoint responding
- ✅ (Optional) Monitoring server running
- ✅ (Optional) Logs flowing to ELK
- ✅ (Optional) Grafana dashboards showing data

---

## 🎉 You're Live!

**Your app is now deployed with enterprise-grade monitoring!**

### Share with Your Team:
- **Production URL**: `https://vibricsdeals.netlify.app`
- **Grafana Dashboards**: `http://xxx.xxx.xxx.xxx:3001`
- **Kibana Logs**: `http://xxx.xxx.xxx.xxx:5601`

### Next Steps:
1. Monitor performance in Grafana
2. Analyze user behavior in Kibana
3. Set up alerts for critical metrics
4. Optimize based on data

**Need help? Check `MONITORING-DEPLOYMENT.md` for detailed guides!**

