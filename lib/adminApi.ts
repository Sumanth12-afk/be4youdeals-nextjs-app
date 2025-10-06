// Admin API client utilities
import { auth } from './firebase';

class AdminAPI {
  private async getAuthHeaders(): Promise<HeadersInit> {
    const user = auth.currentUser;
    if (!user) {
      throw new Error('Not authenticated');
    }

    const token = await user.getIdToken();
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const headers = await this.getAuthHeaders();
    
    const response = await fetch(`/api/admin${endpoint}`, {
      ...options,
      headers: {
        ...headers,
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Unknown error' }));
      throw new Error(error.error || `HTTP ${response.status}`);
    }

    return response.json();
  }

  // User Management APIs
  async getUsers(params?: { page?: number; limit?: number; search?: string }): Promise<any> {
    const query = new URLSearchParams(params as any).toString();
    return this.request(`/users?${query}`);
  }

  async getUserById(userId: string): Promise<any> {
    return this.request(`/users/${userId}`);
  }

  async suspendUser(userId: string, suspend: boolean): Promise<any> {
    return this.request(`/users/${userId}/suspend`, {
      method: 'POST',
      body: JSON.stringify({ suspend }),
    });
  }

  async deleteUser(userId: string): Promise<any> {
    return this.request(`/users/${userId}`, {
      method: 'DELETE',
    });
  }

  async getUserStats(): Promise<any> {
    return this.request('/users/stats');
  }

  // Product Management APIs
  async getProducts(params?: { 
    page?: number; 
    limit?: number; 
    category?: string; 
    region?: string;
    search?: string;
  }): Promise<any> {
    const query = new URLSearchParams(params as any).toString();
    return this.request(`/products?${query}`);
  }

  async getProductById(productId: string): Promise<any> {
    return this.request(`/products/${productId}`);
  }

  async createProduct(productData: any): Promise<any> {
    return this.request('/products', {
      method: 'POST',
      body: JSON.stringify(productData),
    });
  }

  async updateProduct(productId: string, productData: any): Promise<any> {
    return this.request(`/products/${productId}`, {
      method: 'PUT',
      body: JSON.stringify(productData),
    });
  }

  async deleteProduct(productId: string): Promise<any> {
    return this.request(`/products/${productId}`, {
      method: 'DELETE',
    });
  }

  async bulkImportProducts(products: any[], region: string): Promise<any> {
    return this.request('/products/bulk', {
      method: 'POST',
      body: JSON.stringify({ products, region }),
    });
  }

  async getProductStats(): Promise<any> {
    return this.request('/products/stats');
  }

  // Category Management APIs
  async getCategories(): Promise<any> {
    return this.request('/categories');
  }

  async createCategory(categoryData: any): Promise<any> {
    return this.request('/categories', {
      method: 'POST',
      body: JSON.stringify(categoryData),
    });
  }

  async updateCategory(categoryId: string, categoryData: any): Promise<any> {
    return this.request(`/categories/${categoryId}`, {
      method: 'PUT',
      body: JSON.stringify(categoryData),
    });
  }

  async deleteCategory(categoryId: string): Promise<any> {
    return this.request(`/categories/${categoryId}`, {
      method: 'DELETE',
    });
  }

  // Automation & Scraping APIs
  async getScrapingJobs(): Promise<any> {
    return this.request('/scraping/jobs');
  }

  async createScrapingJob(jobData: any): Promise<any> {
    return this.request('/scraping/jobs', {
      method: 'POST',
      body: JSON.stringify(jobData),
    });
  }

  async runScrapingJob(jobId: string): Promise<any> {
    return this.request(`/scraping/jobs/${jobId}/run`, {
      method: 'POST',
    });
  }

  async deleteScrapingJob(jobId: string): Promise<any> {
    return this.request(`/scraping/jobs/${jobId}`, {
      method: 'DELETE',
    });
  }

  async getScrapingLogs(jobId: string): Promise<any> {
    return this.request(`/scraping/jobs/${jobId}/logs`);
  }

  async updatePrices(category?: string): Promise<any> {
    return this.request('/scraping/update-prices', {
      method: 'POST',
      body: JSON.stringify({ category }),
    });
  }

  async checkExpiredDeals(): Promise<any> {
    return this.request('/scraping/check-expired', {
      method: 'POST',
    });
  }

  // Admin User Management APIs
  async getAdminUsers(): Promise<any> {
    return this.request('/admins');
  }

  async createAdminUser(adminData: any): Promise<any> {
    return this.request('/admins', {
      method: 'POST',
      body: JSON.stringify(adminData),
    });
  }

  async updateAdminRole(userId: string, role: string): Promise<any> {
    return this.request(`/admins/${userId}/role`, {
      method: 'PUT',
      body: JSON.stringify({ role }),
    });
  }

  async deleteAdminUser(userId: string): Promise<any> {
    return this.request(`/admins/${userId}`, {
      method: 'DELETE',
    });
  }

  async getActivityLogs(params?: { page?: number; userId?: string }): Promise<any> {
    const query = new URLSearchParams(params as any).toString();
    return this.request(`/admins/activity-logs?${query}`);
  }

  // Dashboard Analytics
  async getDashboardStats(): Promise<any> {
    return this.request('/dashboard/stats');
  }

  async getAnalytics(params?: { 
    startDate?: string; 
    endDate?: string; 
    metric?: string;
  }): Promise<any> {
    const query = new URLSearchParams(params as any).toString();
    return this.request(`/analytics?${query}`);
  }
}

export const adminApi = new AdminAPI();

