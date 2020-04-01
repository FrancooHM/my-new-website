# Run
npm run dev

# Build
npm run build

# Versioning
Update the sw.js constant FRESH_CACHE_NAME to let the service worker invalidate old cache

# Deploy
Deploy S3 bucket and invalidate Cloudfront path /*

# Restart server
pm2 restart server