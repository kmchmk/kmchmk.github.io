# Vercel Deployment Guide

## Quick Deployment to Vercel

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/in with your GitHub account
   - Click "New Project"
   - Import your portfolio repository
   - Click "Deploy"

## Environment Variables (if needed later)

For future enhancements that require environment variables:

```env
# .env.local (for local development)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Add any future API keys here:
# NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
# CONTACT_FORM_API_KEY=your_form_api_key
```

## Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Performance Optimizations

Your site is already optimized with:
- ✅ Static site generation
- ✅ Image optimization (Next.js Image component)
- ✅ Automatic code splitting
- ✅ CSS optimization
- ✅ Font optimization

## Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch triggers a new deployment
- Pull requests get preview deployments
- Vercel provides unique URLs for each deployment

## Monitoring

Access your deployment analytics in the Vercel dashboard:
- Page load speeds
- Core Web Vitals
- Visitor analytics
- Error tracking
