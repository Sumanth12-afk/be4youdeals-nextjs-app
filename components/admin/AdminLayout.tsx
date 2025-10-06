import { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { auth } from '../../lib/firebase';
import { isAdmin, getAdminRole, AdminRole } from '../../lib/adminAuth';
import toast from 'react-hot-toast';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [adminRole, setAdminRole] = useState<AdminRole | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const currentUser = auth.currentUser;
      
      if (!currentUser) {
        router.push('/admin/login');
        return;
      }

      const adminStatus = await isAdmin();
      if (!adminStatus) {
        toast.error('Access denied. Admin privileges required.');
        router.push('/');
        return;
      }

      const role = await getAdminRole();
      setAdminRole(role);
      setUser(currentUser);
      setLoading(false);
    };

    checkAuth();

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push('/admin/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      toast.success('Logged out successfully');
      router.push('/admin/login');
    } catch (error) {
      toast.error('Failed to logout');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  const navigation = [
    {
      name: 'Dashboard',
      href: '/admin',
      icon: '📊',
      exact: true,
    },
    {
      name: 'Users',
      href: '/admin/users',
      icon: '👥',
    },
    {
      name: 'Products',
      href: '/admin/products',
      icon: '📦',
      children: [
        { name: 'All Products', href: '/admin/products' },
        { name: 'Add New', href: '/admin/products/new' },
        { name: 'Categories', href: '/admin/categories' },
        { name: 'Bulk Import', href: '/admin/products/import' },
      ],
    },
    {
      name: 'Automation',
      href: '/admin/automation',
      icon: '🤖',
    },
    {
      name: 'Admin Users',
      href: '/admin/admins',
      icon: '🔐',
      roles: ['super_admin', 'admin'],
    },
    {
      name: 'Analytics',
      href: '/admin/analytics',
      icon: '📈',
    },
    {
      name: 'Settings',
      href: '/admin/settings',
      icon: '⚙️',
      roles: ['super_admin', 'admin'],
    },
  ];

  const isActive = (href: string, exact?: boolean) => {
    if (exact) {
      return router.pathname === href;
    }
    return router.pathname.startsWith(href);
  };

  const canAccessLink = (roles?: string[]) => {
    if (!roles || !adminRole) return true;
    return roles.includes(adminRole);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-gray-800 border-r border-gray-700`}
        style={{ width: '280px' }}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-gray-700">
            <Link href="/admin" className="flex items-center space-x-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h1 className="text-xl font-bold text-cyan-400">Vibrics Admin</h1>
                <p className="text-xs text-gray-400 capitalize">{adminRole} Panel</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {navigation.map((item) => {
              if (!canAccessLink(item.roles)) return null;

              if (item.children) {
                return (
                  <div key={item.name}>
                    <div className="text-gray-400 text-sm font-semibold px-3 py-2">
                      {item.icon} {item.name}
                    </div>
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                            isActive(child.href)
                              ? 'bg-cyan-600 text-white'
                              : 'text-gray-300 hover:bg-gray-700'
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive(item.href, item.exact)
                      ? 'bg-cyan-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Info */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                  <span className="text-sm font-bold">
                    {user?.email?.[0].toUpperCase()}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{user?.email}</p>
                  <p className="text-xs text-gray-400 capitalize">{adminRole}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="text-gray-400 hover:text-red-400 transition-colors"
                title="Logout"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-[280px]' : 'ml-0'}`}>
        {/* Top Bar */}
        <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-30">
          <div className="px-6 py-4 flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="flex items-center space-x-4">
              {/* Quick Actions */}
              <Link
                href="/"
                target="_blank"
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              >
                View Site →
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

