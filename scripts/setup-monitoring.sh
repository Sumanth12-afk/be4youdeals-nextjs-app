#!/bin/bash

# setup-monitoring.sh - Setup Grafana + Prometheus + ELK monitoring stack

echo "🚀 Setting up monitoring stack for Be4YouDeals..."

# Create monitoring directories
mkdir -p monitoring/grafana/provisioning/datasources
mkdir -p monitoring/grafana/provisioning/dashboards
mkdir -p monitoring/grafana/dashboards
mkdir -p monitoring/logstash/pipeline
mkdir -p monitoring/logstash/config

echo "📁 Created monitoring directories"

# Set permissions for Grafana
sudo chown -R 472:472 monitoring/grafana/

echo "🔧 Set Grafana permissions"

# Start monitoring stack
echo "🐳 Starting monitoring containers..."
docker-compose -f docker-compose.monitoring.yml up -d

echo "⏳ Waiting for services to start..."
sleep 30

# Check service health
echo "🔍 Checking service health..."

# Check Prometheus
if curl -f http://localhost:9090/-/healthy > /dev/null 2>&1; then
    echo "✅ Prometheus is healthy"
else
    echo "❌ Prometheus is not responding"
fi

# Check Grafana
if curl -f http://localhost:3001/api/health > /dev/null 2>&1; then
    echo "✅ Grafana is healthy"
else
    echo "❌ Grafana is not responding"
fi

# Check Elasticsearch
if curl -f http://localhost:9200/_cluster/health > /dev/null 2>&1; then
    echo "✅ Elasticsearch is healthy"
else
    echo "❌ Elasticsearch is not responding"
fi

# Check Kibana
if curl -f http://localhost:5601/api/status > /dev/null 2>&1; then
    echo "✅ Kibana is healthy"
else
    echo "❌ Kibana is not responding"
fi

echo ""
echo "🎉 Monitoring stack setup complete!"
echo ""
echo "📊 Access URLs:"
echo "   Grafana:     http://localhost:3001 (admin/admin123)"
echo "   Prometheus:  http://localhost:9090"
echo "   Kibana:      http://localhost:5601"
echo "   Elasticsearch: http://localhost:9200"
echo ""
echo "📈 Next steps:"
echo "   1. Start your Next.js app: npm run dev"
echo "   2. Visit http://localhost:3001 to access Grafana"
echo "   3. Import the Next.js dashboard"
echo "   4. Configure alerts in Grafana"
echo ""
echo "🔧 To stop monitoring: docker-compose -f docker-compose.monitoring.yml down"
