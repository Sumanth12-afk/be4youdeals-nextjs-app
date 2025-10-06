import { useState, useEffect } from 'react';
import Head from 'next/head';
import AdminLayout from '../../components/admin/AdminLayout';
import { adminApi } from '../../lib/adminApi';
import toast from 'react-hot-toast';

interface DashboardStats {
  users: {
    total: number;
    active: number;
    newToday: number;
    growth: number;
  };
  products: {
    total: number;
    usa: number;
    india: number;
    categories: number;
  };
  analytics: {
    pageViews: number;
    affiliateClicks: number;
    ctr: number;
    revenue: number;
  };
  system: {
    uptime: number;
    errors: number;
    avgResponseTime: number;
  };
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardStats();
  }, []);

  const loadDashboardStats = async () => {
    try {
      const data = await adminApi.getDashboardStats();
      setStats(data);
    } catch (error: any) {
      toast.error('Failed to load dashboard stats');
      console.error(error);
      // Set mock data for development
      setStats({
        users: {
          total: 1234,
          active: 456,
          newToday: 23,
          growth: 12.5,
        },
        products: {
          total: 5678,
          usa: 3000,
          india: 2678,
          categories: 9,
        },
        analytics: {
          pageViews: 45678,
          affiliateClicks: 3456,
          ctr: 7.57,
          revenue: 0,
        },
        system: {
          uptime: 99.9,
          errors: 12,
          avgResponseTime: 234,
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const KPICard = ({ 
    title, 
    value, 
    icon, 
    change, 
    subtitle 
  }: { 
    title: string; 
    value: string | number; 
    icon: string; 
    change?: number; 
    subtitle?: string;
  }) => (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-gray-400 text-sm font-medium">{title}</p>
          <h3 className="text-3xl font-bold text-white mt-2">{value}</h3>
          {subtitle && <p className="text-gray-500 text-sm mt-1">{subtitle}</p>}
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
      {change !== undefined && (
        <div className="mt-4 flex items-center">
          <span className={`text-sm font-medium ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
          </span>
          <span className="text-gray-500 text-sm ml-2">vs last month</span>
        </div>
      )}
    </div>
  );

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto"></div>
            <p className="mt-4 text-gray-400">Loading dashboard...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <Head>
        <title>Admin Dashboard - Vibrics Deals</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-gray-400 mt-1">Welcome back! Here's what's happening.</p>
          </div>
          <button
            onClick={loadDashboardStats}
            className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-700 transition-colors flex items-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Refresh</span>
          </button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Total Users"
            value={stats?.users.total.toLocaleString() || '0'}
            icon="👥"
            change={stats?.users.growth}
            subtitle={`${stats?.users.active} active users`}
          />
          <KPICard
            title="Total Products"
            value={stats?.products.total.toLocaleString() || '0'}
            icon="📦"
            subtitle={`${stats?.products.categories} categories`}
          />
          <KPICard
            title="Page Views (Today)"
            value={stats?.analytics.pageViews.toLocaleString() || '0'}
            icon="👁️"
            subtitle={`${stats?.analytics.affiliateClicks.toLocaleString()} affiliate clicks`}
          />
          <KPICard
            title="CTR"
            value={`${stats?.analytics.ctr}%` || '0%'}
            icon="🎯"
            subtitle="Click-through rate"
          />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Stats */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">User Overview</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Total Registered</span>
                <span className="text-white font-semibold">{stats?.users.total.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Active Users</span>
                <span className="text-green-400 font-semibold">{stats?.users.active.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">New Today</span>
                <span className="text-cyan-400 font-semibold">{stats?.users.newToday}</span>
              </div>
            </div>
          </div>

          {/* Product Stats */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">Product Distribution</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">USA Products</span>
                <span className="text-white font-semibold">{stats?.products.usa.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">India Products</span>
                <span className="text-white font-semibold">{stats?.products.india.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Categories</span>
                <span className="text-cyan-400 font-semibold">{stats?.products.categories}</span>
              </div>
            </div>
          </div>
        </div>

        {/* System Health */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-4">System Health</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-gray-400 text-sm">Uptime</p>
              <p className="text-2xl font-bold text-green-400 mt-1">{stats?.system.uptime}%</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Errors (24h)</p>
              <p className="text-2xl font-bold text-yellow-400 mt-1">{stats?.system.errors}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Avg Response Time</p>
              <p className="text-2xl font-bold text-cyan-400 mt-1">{stats?.system.avgResponseTime}ms</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="/admin/products/new"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-4 py-3 rounded-lg text-center font-medium transition-all"
            >
              ➕ Add Product
            </a>
            <a
              href="/admin/users"
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg text-center font-medium transition-all"
            >
              👥 View Users
            </a>
            <a
              href="/admin/automation"
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg text-center font-medium transition-all"
            >
              🤖 Run Scraper
            </a>
            <a
              href="/admin/analytics"
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg text-center font-medium transition-all"
            >
              📈 Analytics
            </a>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

