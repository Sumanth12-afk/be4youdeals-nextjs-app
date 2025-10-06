import { useState, useEffect } from 'react';
import Head from 'next/head';
import AdminLayout from '../../components/admin/AdminLayout';
import { adminApi } from '../../lib/adminApi';
import toast from 'react-hot-toast';

interface ScrapingJob {
  id: string;
  name: string;
  type: 'price_update' | 'new_products' | 'check_availability';
  category?: string;
  region: 'US' | 'IN' | 'all';
  schedule?: string;
  lastRun?: string;
  nextRun?: string;
  status: 'idle' | 'running' | 'success' | 'error';
  productsProcessed?: number;
}

export default function AutomationManagement() {
  const [jobs, setJobs] = useState<ScrapingJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [runningJob, setRunningJob] = useState<string | null>(null);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      setLoading(true);
      const data = await adminApi.getScrapingJobs();
      setJobs(data.jobs);
    } catch (error: any) {
      console.error(error);
      // Mock data
      setJobs([
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
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleRunJob = async (jobId: string) => {
    if (runningJob) {
      toast.error('A job is already running. Please wait...');
      return;
    }

    try {
      setRunningJob(jobId);
      toast.success('Job started! This may take a few minutes...');
      await adminApi.runScrapingJob(jobId);
      toast.success('Job completed successfully!');
      loadJobs();
    } catch (error: any) {
      toast.error('Job failed: ' + error.message);
    } finally {
      setRunningJob(null);
    }
  };

  const handleUpdatePrices = async () => {
    try {
      toast.loading('Updating prices...');
      await adminApi.updatePrices();
      toast.dismiss();
      toast.success('Prices updated successfully!');
      loadJobs();
    } catch (error: any) {
      toast.dismiss();
      toast.error('Failed to update prices');
    }
  };

  const handleCheckExpired = async () => {
    try {
      toast.loading('Checking expired deals...');
      const result = await adminApi.checkExpiredDeals();
      toast.dismiss();
      toast.success(`Found ${result.expiredCount || 0} expired deals`);
    } catch (error: any) {
      toast.dismiss();
      toast.error('Failed to check expired deals');
    }
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running':
        return 'bg-blue-900 text-blue-300';
      case 'success':
        return 'bg-green-900 text-green-300';
      case 'error':
        return 'bg-red-900 text-red-300';
      default:
        return 'bg-gray-700 text-gray-300';
    }
  };

  return (
    <AdminLayout>
      <Head>
        <title>Automation & Scraping - Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Automation & Scraping</h1>
            <p className="text-gray-400 mt-1">Manage automated tasks and data scraping</p>
          </div>
          <button
            onClick={loadJobs}
            className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-700 transition-colors"
          >
            🔄 Refresh
          </button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={handleUpdatePrices}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white p-6 rounded-lg transition-all text-left"
          >
            <div className="text-3xl mb-2">💰</div>
            <h3 className="text-lg font-semibold">Update All Prices</h3>
            <p className="text-sm opacity-90 mt-1">Fetch latest prices from Amazon</p>
          </button>

          <button
            onClick={handleCheckExpired}
            className="bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg border border-gray-700 transition-all text-left"
          >
            <div className="text-3xl mb-2">⏰</div>
            <h3 className="text-lg font-semibold">Check Expired Deals</h3>
            <p className="text-sm text-gray-400 mt-1">Find and remove expired products</p>
          </button>

          <button
            className="bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg border border-gray-700 transition-all text-left"
          >
            <div className="text-3xl mb-2">🤖</div>
            <h3 className="text-lg font-semibold">Create New Job</h3>
            <p className="text-sm text-gray-400 mt-1">Schedule automated task</p>
          </button>
        </div>

        {/* Scheduled Jobs */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">Scheduled Jobs</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-750 border-b border-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Job Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Region</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Schedule</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Last Run</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {loading ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-gray-400">
                      <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
                      </div>
                    </td>
                  </tr>
                ) : jobs.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-gray-400">
                      No jobs configured
                    </td>
                  </tr>
                ) : (
                  jobs.map((job) => (
                    <tr key={job.id} className="hover:bg-gray-750 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-white font-medium">{job.name}</p>
                          {job.category && (
                            <p className="text-gray-400 text-sm capitalize">Category: {job.category}</p>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-300 capitalize">{job.type.replace('_', ' ')}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-300 uppercase">{job.region}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-gray-300 text-sm font-mono">{job.schedule}</p>
                          {job.nextRun && (
                            <p className="text-gray-500 text-xs">Next: {formatDateTime(job.nextRun)}</p>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          {job.lastRun && (
                            <>
                              <p className="text-gray-300 text-sm">{formatDateTime(job.lastRun)}</p>
                              {job.productsProcessed && (
                                <p className="text-gray-500 text-xs">{job.productsProcessed} products</p>
                              )}
                            </>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium capitalize ${getStatusColor(job.status)}`}>
                          {runningJob === job.id ? 'Running...' : job.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <button
                          onClick={() => handleRunJob(job.id)}
                          disabled={runningJob !== null}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          ▶️ Run Now
                        </button>
                        <button
                          className="text-gray-400 hover:text-gray-300 transition-colors"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Job Logs */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
          <div className="space-y-2 font-mono text-sm">
            <div className="text-green-400">[SUCCESS] Daily price update completed - 1,234 products updated</div>
            <div className="text-cyan-400">[INFO] Scraping job started for laptops category</div>
            <div className="text-green-400">[SUCCESS] Found 45 new laptop deals in US region</div>
            <div className="text-yellow-400">[WARNING] 3 products have expired availability</div>
            <div className="text-gray-400">[INFO] Next scheduled job in 2 hours</div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

