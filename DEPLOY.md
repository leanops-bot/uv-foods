# Deploying UV Foods to Netlify

This guide will help you deploy the UV Foods website to Netlify.

## Prerequisites
- A [GitHub](https://github.com/) account.
- A [Netlify](https://www.netlify.com/) account.

## Step 1: Push Code to GitHub

1.  **Create a New Repository** on GitHub.
    - Go to [repo.new](https://repo.new).
    - Name it `uvfoods-website` (or similar).
    - Make it **Private** or **Public** as you prefer.
    - **Do not** initialize with README, .gitignore, or license (we already have these).

2.  **Push your local code** to this new repository.
    Open your terminal in this project folder and run:

    ```bash
    git remote add origin https://github.com/<YOUR_USERNAME>/uvfoods-website.git
    git branch -M main
    git push -u origin main
    ```
    *(Replace `<YOUR_USERNAME>` with your actual GitHub username)*

## Step 2: Deploy on Netlify

1.  **Log in to Netlify**.
2.  Click **"Add new site"** > **"Import from existing project"**.
3.  Select **GitHub**.
4.  Authorize Netlify to access your repositories.
5.  Search for and select `uvfoods-website`.
6.  **Build Settings** (should be auto-detected from `netlify.toml`):
    - **Build command**: `npm run build`
    - **Publish directory**: `dist`
7.  Click **"Deploy site"**.

## Step 3: Success!
Netlify will build your site and give you a live URL (e.g., `https://uvfoods-random-name.netlify.app`).
You can later connect a custom domain (like `uvfoods.in`) in the "Domain management" settings.
