import { useState, useEffect } from 'react';
import Head from 'next/head';
import AdminLayout from '../../components/admin/AdminLayout';
import { adminApi } from '../../lib/adminApi';
import { AdminRole, ROLE_PERMISSIONS } from '../../lib/adminAuth';
import toast from 'react-hot-toast';

interface AdminUser {
  uid: string;
  email: string;
  role: AdminRole;
  displayName?: string;
  createdAt: string;
  lastLogin?: string;
}

export default function AdminUsersManagement() {
  const [admins, setAdmins] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState<AdminUser | null>(null);
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [newAdminRole, setNewAdminRole] = useState<AdminRole>('viewer');

  useEffect(() => {
    loadAdmins();
  }, []);

  const loadAdmins = async () => {
    try {
      setLoading(true);
      const data = await adminApi.getAdminUsers();
      setAdmins(data.admins);
    } catch (error: any) {
      console.error(error);
      // Mock data
      setAdmins([
        {
          uid: '1',
          email: 'super@vibrics.com',
          role: 'super_admin',
          displayName: 'Super Admin',
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString(),
        },
        {
          uid: '2',
          email: 'admin@vibrics.com',
          role: 'admin',
          displayName: 'Admin User',
          createdAt: new Date().toISOString(),
          lastLogin: new Date(Date.now() - 86400000).toISOString(),
        },
        {
          uid: '3',
          email: 'editor@vibrics.com',
          role: 'editor',
          displayName: 'Content Editor',
          createdAt: new Date().toISOString(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAdmin = async () => {
    if (!newAdminEmail) {
      toast.error('Email is required');
      return;
    }

    try {
      await adminApi.createAdminUser({
        email: newAdminEmail,
        role: newAdminRole,
      });
      toast.success('Admin user created successfully');
      setNewAdminEmail('');
      setNewAdminRole('viewer');
      setShowModal(false);
      loadAdmins();
    } catch (error: any) {
      toast.error('Failed to create admin user');
    }
  };

  const handleUpdateRole = async (userId: string, newRole: AdminRole) => {
    try {
      await adminApi.updateAdminRole(userId, newRole);
      toast.success('Admin role updated successfully');
      loadAdmins();
    } catch (error: any) {
      toast.error('Failed to update role');
    }
  };

  const handleDeleteAdmin = async (userId: string) => {
    if (!confirm('Are you sure you want to remove this admin user?')) {
      return;
    }

    try {
      await adminApi.deleteAdminUser(userId);
      toast.success('Admin user removed successfully');
      loadAdmins();
    } catch (error: any) {
      toast.error('Failed to remove admin user');
    }
  };

  const getRoleBadgeColor = (role: AdminRole) => {
    switch (role) {
      case 'super_admin':
        return 'bg-purple-900 text-purple-300';
      case 'admin':
        return 'bg-blue-900 text-blue-300';
      case 'editor':
        return 'bg-green-900 text-green-300';
      case 'viewer':
        return 'bg-gray-700 text-gray-300';
      default:
        return 'bg-gray-700 text-gray-300';
    }
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
        <title>Admin Users Management - Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Users</h1>
            <p className="text-gray-400 mt-1">Manage admin access and permissions</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg transition-all flex items-center space-x-2"
          >
            <span>➕</span>
            <span>Add Admin</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <p className="text-gray-400 text-sm">Total Admins</p>
            <p className="text-2xl font-bold text-white mt-1">{admins.length}</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <p className="text-gray-400 text-sm">Super Admins</p>
            <p className="text-2xl font-bold text-purple-400 mt-1">
              {admins.filter(a => a.role === 'super_admin').length}
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <p className="text-gray-400 text-sm">Admins</p>
            <p className="text-2xl font-bold text-blue-400 mt-1">
              {admins.filter(a => a.role === 'admin').length}
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <p className="text-gray-400 text-sm">Editors</p>
            <p className="text-2xl font-bold text-green-400 mt-1">
              {admins.filter(a => a.role === 'editor').length}
            </p>
          </div>
        </div>

        {/* Admins Table */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-750 border-b border-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Admin</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Role</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Created</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Last Login</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                      <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
                      </div>
                    </td>
                  </tr>
                ) : admins.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                      No admin users found
                    </td>
                  </tr>
                ) : (
                  admins.map((admin) => (
                    <tr key={admin.uid} className="hover:bg-gray-750 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-white font-medium">{admin.displayName || 'N/A'}</p>
                          <p className="text-gray-400 text-sm">{admin.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={admin.role}
                          onChange={(e) => handleUpdateRole(admin.uid, e.target.value as AdminRole)}
                          className={`px-2 py-1 rounded text-xs font-medium capitalize ${getRoleBadgeColor(admin.role)} bg-opacity-20 border-none outline-none cursor-pointer`}
                        >
                          <option value="super_admin">Super Admin</option>
                          <option value="admin">Admin</option>
                          <option value="editor">Editor</option>
                          <option value="viewer">Viewer</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 text-gray-300 text-sm">
                        {formatDate(admin.createdAt)}
                      </td>
                      <td className="px-6 py-4 text-gray-300 text-sm">
                        {admin.lastLogin ? formatDate(admin.lastLogin) : 'Never'}
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <button
                          onClick={() => {
                            setSelectedAdmin(admin);
                            setShowModal(true);
                          }}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleDeleteAdmin(admin.uid)}
                          className="text-red-400 hover:text-red-300 transition-colors"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Role Permissions Reference */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Role Permissions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(ROLE_PERMISSIONS).map(([role, permissions]) => (
              <div key={role} className="bg-gray-750 rounded-lg p-4">
                <h3 className={`font-semibold capitalize mb-2 ${getRoleBadgeColor(role as AdminRole)}`}>
                  {role.replace('_', ' ')}
                </h3>
                <ul className="space-y-1 text-sm text-gray-400">
                  {Object.entries(permissions).map(([module, actions]: [string, any]) => (
                    <li key={module}>
                      <span className="capitalize">{module}:</span>{' '}
                      {Object.entries(actions).filter(([_, allowed]) => allowed).map(([action]) => action).join(', ')}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Admin Modal */}
      {showModal && !selectedAdmin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg max-w-md w-full p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">Add Admin User</h2>
              <button
                onClick={() => {
                  setShowModal(false);
                  setNewAdminEmail('');
                  setNewAdminRole('viewer');
                }}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={newAdminEmail}
                  onChange={(e) => setNewAdminEmail(e.target.value)}
                  placeholder="admin@example.com"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Role</label>
                <select
                  value={newAdminRole}
                  onChange={(e) => setNewAdminRole(e.target.value as AdminRole)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="viewer">Viewer</option>
                  <option value="editor">Editor</option>
                  <option value="admin">Admin</option>
                  <option value="super_admin">Super Admin</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-2">
              <button
                onClick={() => {
                  setShowModal(false);
                  setNewAdminEmail('');
                  setNewAdminRole('viewer');
                }}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateAdmin}
                className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-lg transition-all"
              >
                Create Admin
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

