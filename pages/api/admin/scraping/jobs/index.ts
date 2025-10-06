import { NextApiRequest, NextApiResponse } from 'next';

// API route to get scraping jobs
// TODO: Add authentication middleware
// TODO: Connect to database to fetch actual jobs

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // TODO: Verify admin authentication
    // TODO: Fetch jobs from database

    // Mock jobs data
    const jobs = [
      {
        id: '1',
        name: 'Daily Price Update',
        type: 'price_update',
        region: 'all',
        schedule: '0 0 * * *',
        lastRun: new Date(Date.now() - 86400000).toISOString(),
        nextRun: new Date(Date.now() + 86400000).toISOString(),
        status: 'success',
        productsProcessed: 1234,
      },
      {
        id: '2',
        name: 'Scrape New Laptops - US',
        type: 'new_products',
        category: 'laptops',
        region: 'US',
        schedule: '0 */6 * * *',
        lastRun: new Date(Date.now() - 21600000).toISOString(),
        nextRun: new Date(Date.now() + 21600000).toISOString(),
        status: 'idle',
        productsProcessed: 45,
      },
      {
        id: '3',
        name: 'Check Product Availability',
        type: 'check_availability',
        region: 'all',
        schedule: '0 */12 * * *',
        lastRun: new Date(Date.now() - 43200000).toISOString(),
        nextRun: new Date(Date.now() + 43200000).toISOString(),
        status: 'success',
        productsProcessed: 5678,
      },
    ];

    return res.status(200).json({ jobs });
  } catch (error: any) {
    console.error('Get scraping jobs error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

