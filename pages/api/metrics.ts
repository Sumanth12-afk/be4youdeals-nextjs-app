// pages/api/metrics.ts - Simple metrics endpoint (temporarily disabled Prometheus)
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Simple metrics response for now
    const metrics = `# HELP app_health Application health status
# TYPE app_health gauge
app_health 1

# HELP app_uptime Application uptime in seconds
# TYPE app_uptime gauge
app_uptime ${Math.floor(process.uptime())}

# HELP app_memory_usage Memory usage in bytes
# TYPE app_memory_usage gauge
app_memory_usage ${process.memoryUsage().heapUsed}`;
    
    res.setHeader('Content-Type', 'text/plain; version=0.0.4; charset=utf-8');
    res.status(200).send(metrics);
  } catch (error) {
    console.error('Error getting metrics:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
