# 🚀 Guide: Upload to GitHub & Deploy to Vercel

## 📋 Prerequisites
- ✅ Git installed (already installed)
- ✅ GitHub account
- ✅ Vercel account (free)

---

## Part 1: Upload to GitHub

### Step 1: Initialize Git Repository
```bash
# Navigate to your project folder (if not already there)
cd C:\Users\Owner\Desktop\projects\oliver

# Initialize git repository
git init

# Add all files to staging
git add .

# Create your first commit
git commit -m "Initial commit: Portfolio website"
```

### Step 2: Create GitHub Repository

1. **Go to GitHub:**
   - Visit [github.com](https://github.com)
   - Sign in to your account (or create one if you don't have)

2. **Create New Repository:**
   - Click the **"+"** icon (top right) → **"New repository"**
   - Repository name: `oliver-portfolio` (or any name you like)
   - Description: "My portfolio website"
   - Choose **Public** or **Private**
   - **DON'T** check "Initialize with README" (we already have files)
   - Click **"Create repository"**

3. **Copy the repository URL** (you'll see it after creation)
   - Example: `https://github.com/yourusername/oliver-portfolio.git`

### Step 3: Connect & Push to GitHub

```bash
# Add GitHub repository as remote (replace with your URL)
git remote add origin https://github.com/yourusername/oliver-portfolio.git

# Rename default branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Note:** You'll be asked to enter your GitHub username and password/token.

---

## Part 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended for Beginners)

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account (recommended) or create account

2. **Import Project:**
   - Click **"Add New..."** → **"Project"**
   - You'll see your GitHub repositories
   - Click **"Import"** next to your `oliver-portfolio` repository

3. **Configure Project:**
   - Vercel will auto-detect it's a Vite project
   - Verify these settings:
     - **Framework Preset:** Vite
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`
     - **Install Command:** `npm install`
   - Click **"Deploy"**

4. **Wait for Deployment:**
   - Vercel will build and deploy your site
   - Takes 1-2 minutes
   - You'll get a URL like: `your-project.vercel.app`

5. **Done!** 🎉
   - Your site is now live!
   - Every time you push to GitHub, Vercel will auto-deploy

---

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from your project folder)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - Project name? oliver-portfolio
# - Directory? ./
# - Override settings? No

# For production deployment
vercel --prod
```

---

## 🔄 Updating Your Site

After making changes to your code:

```bash
# 1. Stage your changes
git add .

# 2. Commit changes
git commit -m "Description of your changes"

# 3. Push to GitHub
git push

# Vercel will automatically deploy the new version!
```

---

## 📝 Important Notes

### Git Configuration (First Time Only)
If this is your first time using Git, configure your identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### GitHub Authentication
If you get authentication errors:
- Use **Personal Access Token** instead of password
- Generate token: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
- Use token as password when pushing

### Environment Variables
If you need environment variables in Vercel:
- Go to your project in Vercel dashboard
- Settings → Environment Variables
- Add your variables there

---

## 🎯 Quick Checklist

- [ ] Git initialized (`git init`)
- [ ] Files committed (`git commit`)
- [ ] GitHub repository created
- [ ] Code pushed to GitHub (`git push`)
- [ ] Vercel account created
- [ ] Project imported in Vercel
- [ ] Site deployed and live!

---

## 🆘 Troubleshooting

### "Permission denied" error
- Check your GitHub credentials
- Use Personal Access Token instead of password

### Build fails in Vercel
- Check build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Verify build command is correct

### Site not updating
- Check if you pushed to GitHub
- Check Vercel deployment logs
- Clear browser cache

---

## 📚 Useful Commands

```bash
# Check git status
git status

# See commit history
git log

# Pull latest changes from GitHub
git pull

# See remote repositories
git remote -v
```

---

**Good luck with your deployment! 🚀**

