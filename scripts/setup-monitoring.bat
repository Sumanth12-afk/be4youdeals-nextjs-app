@echo off
REM setup-monitoring.bat - Setup Grafana + Prometheus + ELK monitoring stack for Windows

echo 🚀 Setting up monitoring stack for Be4YouDeals...

REM Create monitoring directories
if not exist "monitoring\grafana\provisioning\datasources" mkdir "monitoring\grafana\provisioning\datasources"
if not exist "monitoring\grafana\provisioning\dashboards" mkdir "monitoring\grafana\provisioning\dashboards"
if not exist "monitoring\grafana\dashboards" mkdir "monitoring\grafana\dashboards"
if not exist "monitoring\logstash\pipeline" mkdir "monitoring\logstash\pipeline"
if not exist "monitoring\logstash\config" mkdir "monitoring\logstash\config"

echo 📁 Created monitoring directories

REM Start monitoring stack
echo 🐳 Starting monitoring containers...
docker-compose -f docker-compose.monitoring.yml up -d

echo ⏳ Waiting for services to start...
timeout /t 30 /nobreak > nul

REM Check service health
echo 🔍 Checking service health...

REM Check Prometheus
curl -f http://localhost:9090/-/healthy > nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Prometheus is healthy
) else (
    echo ❌ Prometheus is not responding
)

REM Check Grafana
curl -f http://localhost:3001/api/health > nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Grafana is healthy
) else (
    echo ❌ Grafana is not responding
)

REM Check Elasticsearch
curl -f http://localhost:9200/_cluster/health > nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Elasticsearch is healthy
) else (
    echo ❌ Elasticsearch is not responding
)

REM Check Kibana
curl -f http://localhost:5601/api/status > nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Kibana is healthy
) else (
    echo ❌ Kibana is not responding
)

echo.
echo 🎉 Monitoring stack setup complete!
echo.
echo 📊 Access URLs:
echo    Grafana:     http://localhost:3001 (admin/admin123)
echo    Prometheus:  http://localhost:9090
echo    Kibana:      http://localhost:5601
echo    Elasticsearch: http://localhost:9200
echo.
echo 📈 Next steps:
echo    1. Start your Next.js app: npm run dev
echo    2. Visit http://localhost:3001 to access Grafana
echo    3. Import the Next.js dashboard
echo    4. Configure alerts in Grafana
echo.
echo 🔧 To stop monitoring: docker-compose -f docker-compose.monitoring.yml down

pause
