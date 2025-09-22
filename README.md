# Be4YouDeals - Next.js Affiliate Site

A modern, responsive affiliate deals website built with Next.js, featuring infinite scroll, advanced filters, product comparison, and optimized performance.

## 🌐 Live Demo

**Production Site**: [https://vibricsdeals.netlify.app/](https://vibricsdeals.netlify.app/)

## ✨ Features

- **🔄 Infinite Scroll**: Seamless product loading with pagination
- **🔍 Advanced Filters**: Smart filtering by price, brand, specifications
- **📊 Product Comparison**: Compare up to 4 products side-by-side
- **🖼️ Image Gallery**: Interactive product image galleries with zoom
- **⚡ Optimized Images**: Lazy loading and WebP optimization
- **📱 Fully Responsive**: Mobile-first design with touch gestures
- **🔥 Firebase Auth**: Secure user authentication
- **🎯 Progress Indicators**: Visual loading feedback
- **🚀 Performance Optimized**: Fast loading with Next.js optimization

## 🛠️ Tech Stack

- **Framework**: Next.js 13.4.19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **Animations**: Framer Motion
- **Image Handling**: Next.js Image Optimization
- **Notifications**: React Hot Toast
- **Deployment**: Netlify (Static), Docker (Container)

## 🏃‍♂️ Quick Start

### Development

```bash
# Clone the repository
git clone https://github.com/Sumanth12-afk/be4youdeals-nextjs-app.git
cd be4youdeals-nextjs-app

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Docker Development

```bash
# Build and run with Docker Compose
npm run docker:compose:dev

# Or build and run manually
npm run docker:build
npm run docker:run
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🐳 Docker Deployment

### Quick Docker Run

```bash
# Build the image
docker build -t be4youdeals .

# Run the container
docker run -p 3000:3000 be4youdeals
```

### Docker Compose

```bash
# Production deployment
docker-compose up -d

# Development with hot reload
docker-compose -f docker-compose.dev.yml up -d
```

### Container Registry

The application is automatically built and pushed to GitHub Container Registry:

```bash
# Pull the latest image
docker pull ghcr.io/sumanth12-afk/be4youdeals-nextjs-app:latest

# Run the pulled image
docker run -p 3000:3000 ghcr.io/sumanth12-afk/be4youdeals-nextjs-app:latest
```

## 🚀 CI/CD Pipeline

### GitHub Actions Workflows

1. **Main CI/CD Pipeline** (`.github/workflows/ci-cd.yml`)
   - Runs tests on Node.js 18.x and 20.x
   - Builds and pushes Docker image to GitHub Container Registry
   - Deploys to production environment

2. **Netlify Deployment** (`.github/workflows/netlify-deploy.yml`)
   - Builds static export for Netlify
   - Automatically deploys to https://vibricsdeals.netlify.app/

3. **Docker Build Test** (`.github/workflows/docker-build-test.yml`)
   - Tests Docker builds on pull requests
   - Validates container functionality

### Deployment Targets

- **🌐 Netlify**: Static site deployment (current production)
- **🐳 Docker**: Container deployment ready for:
  - AWS ECS/Fargate
  - Google Cloud Run
  - DigitalOcean App Platform
  - Azure Container Instances
  - Self-hosted servers

## 📁 Project Structure

```
├── components/           # Reusable UI components
│   ├── InfiniteScrollProducts.tsx
│   ├── ProductComparison.tsx
│   ├── AdvancedFilters.tsx
│   ├── ProductImageGallery.tsx
│   ├── OptimizedImage.tsx
│   ├── ProgressIndicator.tsx
│   └── Layout.tsx
├── pages/               # Next.js pages
│   ├── laptops/page/    # Laptop category pages
│   ├── headphones/page/ # Headphone category pages
│   └── deals.tsx        # Main deals page
├── lib/                 # Utility libraries
│   └── comparisonUtils.ts
├── data/               # Product data
│   ├── all-laptops-data.js
│   └── all-headphones-data.js
├── .github/workflows/  # CI/CD pipelines
├── docker-compose.yml  # Production Docker setup
├── Dockerfile         # Production container
└── README.md
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
# ... other Firebase config
```

### Next.js Configuration

The app uses different configurations for different deployment targets:

- **Docker**: `output: 'standalone'` with image optimization
- **Netlify**: `output: 'export'` with unoptimized images

## 📊 Performance Features

- **Image Optimization**: WebP conversion and lazy loading
- **Code Splitting**: Automatic route-based splitting
- **Bundle Optimization**: SWC minification and compression
- **Caching**: Aggressive caching for static assets
- **SEO**: Optimized meta tags and structured data

## 🔒 Security Features

- **Content Security Policy**: Configured in Nginx
- **Rate Limiting**: API route protection
- **Security Headers**: XSS, CSRF, and clickjacking protection
- **Firebase Auth**: Secure user authentication

## 📱 Mobile Features

- **Touch Gestures**: Swipe navigation for image galleries
- **Responsive Design**: Mobile-first approach
- **PWA Ready**: Service worker and manifest configured
- **Fast Loading**: Optimized for mobile networks

## 🛠️ Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking

# Docker scripts
npm run docker:build         # Build Docker image
npm run docker:run          # Run Docker container
npm run docker:compose      # Run with docker-compose
npm run docker:compose:dev  # Run development compose
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🚀 Deployment Options

### 1. Netlify (Current)
- **URL**: https://vibricsdeals.netlify.app/
- **Type**: Static site deployment
- **Auto-deploy**: On push to main branch

### 2. Docker Container
Ready for deployment on:
- **AWS ECS/Fargate**: `aws ecs update-service`
- **Google Cloud Run**: `gcloud run deploy`
- **DigitalOcean**: App Platform
- **Azure**: Container Instances
- **Self-hosted**: Any Docker-compatible server

### 3. Traditional Hosting
```bash
npm run build
# Upload 'out' folder to any static hosting
```

## 📞 Support

For support, email [your-email] or create an issue in the GitHub repository.

---

**⭐ Star this repository if you find it helpful!**