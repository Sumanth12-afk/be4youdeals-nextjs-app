import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AdminLayout from '../../../components/admin/AdminLayout';
import { adminApi } from '../../../lib/adminApi';
import toast from 'react-hot-toast';

interface Product {
  id: string;
  title: string;
  price: string;
  rating: string;
  count?: string;
  image?: string;
  link: string;
  category: string;
  region: 'US' | 'IN';
  asin?: string;
  availability?: string;
  createdAt: string;
}

export default function ProductsManagement() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [region, setRegion] = useState('all');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const categories = [
    'all',
    'fashion',
    'gadgets',
    'headphones',
    'home-essentials',
    'laptops',
    'mobiles',
    'self-care',
    'stationery',
  ];

  useEffect(() => {
    loadProducts();
  }, [page, category, region, search]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const params: any = { page, limit: 20 };
      if (category !== 'all') params.category = category;
      if (region !== 'all') params.region = region;
      if (search) params.search = search;

      const data = await adminApi.getProducts(params);
      setProducts(data.products);
      setTotalPages(data.totalPages);
    } catch (error: any) {
      toast.error('Failed to load products');
      console.error(error);
      // Mock data
      setProducts([
        {
          id: '1',
          title: 'Sample Product 1',
          price: '$99.99',
          rating: '4.5',
          count: '1,234',
          category: 'laptops',
          region: 'US',
          link: 'https://amazon.com',
          createdAt: new Date().toISOString(),
        },
        {
          id: '2',
          title: 'Sample Product 2',
          price: '₹7,999',
          rating: '4.2',
          count: '567',
          category: 'mobiles',
          region: 'IN',
          link: 'https://amazon.in',
          createdAt: new Date().toISOString(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    if (!confirm('Are you sure you want to delete this product?')) {
      return;
    }

    try {
      await adminApi.deleteProduct(productId);
      toast.success('Product deleted successfully');
      loadProducts();
    } catch (error: any) {
      toast.error('Failed to delete product');
    }
  };

  return (
    <AdminLayout>
      <Head>
        <title>Products Management - Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Products Management</h1>
            <p className="text-gray-400 mt-1">Manage your product catalog</p>
          </div>
          <div className="flex space-x-2">
            <Link
              href="/admin/products/new"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg transition-all flex items-center space-x-2"
            >
              <span>➕</span>
              <span>Add Product</span>
            </Link>
            <Link
              href="/admin/products/import"
              className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-700 transition-colors"
            >
              📤 Bulk Import
            </Link>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Region</label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="all">All Regions</option>
                <option value="US">USA</option>
                <option value="IN">India</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <p className="text-gray-400 text-sm">Total Products</p>
            <p className="text-2xl font-bold text-white mt-1">{products.length}</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <p className="text-gray-400 text-sm">USA Products</p>
            <p className="text-2xl font-bold text-cyan-400 mt-1">
              {products.filter(p => p.region === 'US').length}
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <p className="text-gray-400 text-sm">India Products</p>
            <p className="text-2xl font-bold text-cyan-400 mt-1">
              {products.filter(p => p.region === 'IN').length}
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <p className="text-gray-400 text-sm">Categories</p>
            <p className="text-2xl font-bold text-white mt-1">9</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-750 border-b border-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Product</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Rating</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Region</th>
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
                ) : products.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                      No products found
                    </td>
                  </tr>
                ) : (
                  products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-750 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          {product.image && (
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-12 h-12 object-cover rounded"
                            />
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-medium truncate">{product.title}</p>
                            {product.asin && (
                              <p className="text-gray-400 text-sm">ASIN: {product.asin}</p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-700 text-gray-300 capitalize">
                          {product.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-white font-semibold">
                        {product.price}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="text-yellow-400">⭐</span>
                          <span className="text-white ml-1">{product.rating}</span>
                          {product.count && (
                            <span className="text-gray-400 text-sm ml-1">({product.count})</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                          product.region === 'US' ? 'bg-blue-900 text-blue-300' : 'bg-orange-900 text-orange-300'
                        }`}>
                          {product.region}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <Link
                          href={`/admin/products/${product.id}/edit`}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
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
    </AdminLayout>
  );
}

