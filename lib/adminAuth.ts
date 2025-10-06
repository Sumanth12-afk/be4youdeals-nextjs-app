// Admin authentication and authorization utilities
import { auth } from './firebase';

export type AdminRole = 'super_admin' | 'admin' | 'editor' | 'viewer';

export interface AdminUser {
  uid: string;
  email: string;
  role: AdminRole;
  displayName?: string;
  createdAt: Date;
  lastLogin?: Date;
}

// Check if current user is an admin
export const isAdmin = async (): Promise<boolean> => {
  const user = auth.currentUser;
  if (!user) return false;

  try {
    const idTokenResult = await user.getIdTokenResult();
    return idTokenResult.claims.admin === true;
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
};

// Check if user has specific role
export const hasRole = async (requiredRole: AdminRole): Promise<boolean> => {
  const user = auth.currentUser;
  if (!user) return false;

  try {
    const idTokenResult = await user.getIdTokenResult();
    const userRole = idTokenResult.claims.role as AdminRole;
    
    // Role hierarchy: super_admin > admin > editor > viewer
    const roleHierarchy: AdminRole[] = ['super_admin', 'admin', 'editor', 'viewer'];
    const userRoleIndex = roleHierarchy.indexOf(userRole);
    const requiredRoleIndex = roleHierarchy.indexOf(requiredRole);
    
    return userRoleIndex !== -1 && userRoleIndex <= requiredRoleIndex;
  } catch (error) {
    console.error('Error checking role:', error);
    return false;
  }
};

// Get current admin user's role
export const getAdminRole = async (): Promise<AdminRole | null> => {
  const user = auth.currentUser;
  if (!user) return null;

  try {
    const idTokenResult = await user.getIdTokenResult();
    return (idTokenResult.claims.role as AdminRole) || null;
  } catch (error) {
    console.error('Error getting admin role:', error);
    return null;
  }
};

// Admin role permissions
export const ROLE_PERMISSIONS = {
  super_admin: {
    users: { view: true, edit: true, delete: true, suspend: true },
    products: { view: true, create: true, edit: true, delete: true },
    categories: { view: true, create: true, edit: true, delete: true },
    analytics: { view: true },
    settings: { view: true, edit: true },
    admins: { view: true, create: true, edit: true, delete: true },
    scraping: { view: true, run: true, schedule: true },
  },
  admin: {
    users: { view: true, edit: true, delete: false, suspend: true },
    products: { view: true, create: true, edit: true, delete: true },
    categories: { view: true, create: true, edit: true, delete: false },
    analytics: { view: true },
    settings: { view: true, edit: false },
    admins: { view: true, create: false, edit: false, delete: false },
    scraping: { view: true, run: true, schedule: false },
  },
  editor: {
    users: { view: true, edit: false, delete: false, suspend: false },
    products: { view: true, create: true, edit: true, delete: false },
    categories: { view: true, create: false, edit: false, delete: false },
    analytics: { view: true },
    settings: { view: false, edit: false },
    admins: { view: false, create: false, edit: false, delete: false },
    scraping: { view: true, run: false, schedule: false },
  },
  viewer: {
    users: { view: true, edit: false, delete: false, suspend: false },
    products: { view: true, create: false, edit: false, delete: false },
    categories: { view: true, create: false, edit: false, delete: false },
    analytics: { view: true },
    settings: { view: false, edit: false },
    admins: { view: false, create: false, edit: false, delete: false },
    scraping: { view: false, run: false, schedule: false },
  },
};

// Check permission for specific action
export const hasPermission = async (
  module: keyof typeof ROLE_PERMISSIONS.super_admin,
  action: string
): Promise<boolean> => {
  const role = await getAdminRole();
  if (!role) return false;

  const permissions = ROLE_PERMISSIONS[role];
  const modulePermissions = permissions[module] as any;
  
  return modulePermissions?.[action] === true;
};

// Predefined admin emails (initial setup - should be moved to database)
export const INITIAL_ADMIN_EMAILS = [
  'admin@vibrics.com',
  'sumanth@vibrics.com',
  // Add your email here
];

