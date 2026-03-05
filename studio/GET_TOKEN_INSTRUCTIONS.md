# Get Your Sanity API Token

## Quick Steps:

### 1. Go to Sanity Manage
Visit: https://www.sanity.io/manage/personal/project/9g154xlz/api

Or:
1. Go to https://www.sanity.io/manage
2. Find and click on your "Welcome2Sorrento" project (ID: 9g154xlz)
3. Click on **API** in the left sidebar

### 2. Create a New Token
1. Click **Add API token**
2. Give it a name: `Seed Data Import Token`
3. **Permissions**: Select **Editor** (NOT viewer!)
4. Click **Add token**
5. **COPY THE TOKEN** - You won't be able to see it again!

### 3. Add Token to .env File

Open `studio/.env` and add this line:
```bash
SANITY_API_WRITE_TOKEN="paste_your_token_here"
```

Your complete `.env` file should look like:
```bash
SANITY_STUDIO_PROJECT_ID="9g154xlz"
SANITY_STUDIO_DATASET="production"
SANITY_STUDIO_PREVIEW_URL="http://localhost:5173"
SANITY_API_WRITE_TOKEN="skXXXXXXXXXXXXXXXXXXXXXXXXXX"
```

### 4. Run the Seed Script Again
```bash
pnpm seed
```

## Important Notes:
- ⚠️ The token must have **Editor** permissions (NOT just Viewer)
- ⚠️ Copy the token immediately - Sanity won't show it again
- ⚠️ Keep your token secure - don't commit it to git
- ✅ The `.env` file is already in `.gitignore` so it's safe

## Need Help?
If you can't access the project:
1. Make sure you're logged into the correct Sanity account
2. You need to be an administrator or editor of the project
3. Contact the project owner if you don't have access

