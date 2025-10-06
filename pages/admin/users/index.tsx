import { useState, useEffect } from 'react';
import Head from 'next/head';
import AdminLayout from '../../../components/admin/AdminLayout';
import { adminApi } from '../../../lib/adminApi';
import toast from 'react-hot-toast';

interface User {
  uid: string;
  email: string;
  displayName?: string;
  createdAt: string;
  lastLogin?: string;
  disabled?: boolean;
  region?: string;
  authProvider?: string;
}

export default function UsersManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadUsers();
  }, [page, search]);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await adminApi.getUsers({ page, limit: 20, search });
      setUsers(data.users);
      setTotalPages(data.totalPages);
    } catch (error: any) {
      toast.error('Failed to load users');
      console.error(error);
      // Mock data for development
      setUsers([
        {
          uid: '1',
          email: 'user1@example.com',
          displayName: 'John Doe',
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString(),
          region: 'US',
          authProvider: 'email',
        },
        {
          uid: '2',
          email: 'user2@example.com',
          displayName: 'Jane Smith',
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString(),
          region: 'IN',
          authProvider: 'google',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSuspendUser = async (userId: string, suspend: boolean) => {
    try {
      await adminApi.suspendUser(userId, suspend);
      toast.success(`User ${suspend ? 'suspended' : 'activated'} successfully`);
      loadUsers();
    } catch (error: any) {
      toast.error(`Failed to ${suspend ? 'suspend' : 'activate'} user`);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      return;
    }

    try {
      await adminApi.deleteUser(userId);
      toast.success('User deleted successfully');
      loadUsers();
      setShowModal(false);
    } catch (error: any) {
      toast.error('Failed to delete user');
    }
  };

  const viewUserDetails = (user: User) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <AdminLayout>
      <Head>
        <title>User Management - Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">User Management</h1>
            <p className="text-gray-400 mt-1">Manage and monitor all registered users</p>
          </div>
          <button
            onClick={loadUsers}
            className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-700 transition-colors"
          >
            🔄 Refresh
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <p className="text-gray-400 text-sm">Total Users</p>
            <p className="text-2xl font-bold text-white mt-1">{users.length}</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <p className="text-gray-400 text-sm">Active Users</p>
            <p className="text-2xl font-bold text-green-400 mt-1">
              {users.filter(u => !u.disabled).length}
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <p className="text-gray-400 text-sm">Suspended</p>
            <p className="text-2xl font-bold text-red-400 mt-1">
              {users.filter(u => u.disabled).length}
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <p className="text-gray-400 text-sm">New Today</p>
            <p className="text-2xl font-bold text-cyan-400 mt-1">0</p>
          </div>
        </div>

        {/* Search */}
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <input
            type="text"
            placeholder="Search by email or name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* Users Table */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-750 border-b border-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">User</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Region</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Provider</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Joined</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                      <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
                      </div>
                    </td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                      No users found
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr key={user.uid} className="hover:bg-gray-750 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-white font-medium">{user.displayName || 'N/A'}</p>
                          <p className="text-gray-400 text-sm">{user.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-300">{user.region || 'N/A'}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-700 text-gray-300">
                          {user.authProvider || 'email'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300 text-sm">
                        {formatDate(user.createdAt)}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                            user.disabled
                              ? 'bg-red-900 text-red-300'
                              : 'bg-green-900 text-green-300'
                          }`}
                        >
                          {user.disabled ? 'Suspended' : 'Active'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <button
                          onClick={() => viewUserDetails(user)}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleSuspendUser(user.uid, !user.disabled)}
                          className="text-yellow-400 hover:text-yellow-300 transition-colors"
                        >
                          {user.disabled ? 'Activate' : 'Suspend'}
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.uid)}
                          className="text-red-400 hover:text-red-300 transition-colors"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="px-6 py-4 border-t border-gray-700 flex items-center justify-between">
              <button
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <span className="text-gray-400">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => setPage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>

      {/* User Details Modal */}
      {showModal && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg max-w-2xl w-full p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">User Details</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white">{selectedUser.email}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Display Name</p>
                <p className="text-white">{selectedUser.displayName || 'N/A'}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">User ID</p>
                <p className="text-white font-mono text-sm">{selectedUser.uid}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Created At</p>
                <p className="text-white">{formatDate(selectedUser.createdAt)}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Last Login</p>
                <p className="text-white">{selectedUser.lastLogin ? formatDate(selectedUser.lastLogin) : 'Never'}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Status</p>
                <span
                  className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                    selectedUser.disabled
                      ? 'bg-red-900 text-red-300'
                      : 'bg-green-900 text-green-300'
                  }`}
                >
                  {selectedUser.disabled ? 'Suspended' : 'Active'}
                </span>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

