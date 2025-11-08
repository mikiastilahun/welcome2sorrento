# Favicon Generation Guide

## Current Setup

Your site is configured to use multiple favicon formats for maximum compatibility:
- SVG favicon (modern browsers)
- PNG favicons (16x16, 32x32, 192x192, 512x512)
- Apple Touch Icon (180x180)
- MS Tile Icon (150x150)

## Quick: Generate Favicons from SVG

### Option 1: Using Online Tool (Easiest)
1. Go to https://realfavicongenerator.net/
2. Upload your `/static/favicon.svg`
3. Generate all sizes
4. Download and extract to `/static/` folder

### Option 2: Using ImageMagick (Command Line)

If you have ImageMagick installed:

```bash
cd static

# Generate PNG versions from SVG
convert favicon.svg -resize 16x16 favicon-16x16.png
convert favicon.svg -resize 32x32 favicon-32x32.png
convert favicon.svg -resize 180x180 apple-touch-icon.png
convert favicon.svg -resize 192x192 favicon-192x192.png
convert favicon.svg -resize 512x512 favicon-512x512.png
convert favicon.svg -resize 150x150 mstile-150x150.png

# Generate ICO file (optional, for older browsers)
convert favicon.svg -define icon:auto-resize=16,32,48 favicon.ico
```

### Option 3: Using Sharp (Node.js)

Install sharp:
```bash
pnpm add -D sharp
```

Create a script `scripts/generate-favicons.js`:

```javascript
import sharp from 'sharp';
import { readFileSync } from 'fs';

const svg = readFileSync('static/favicon.svg');

const sizes = [
	{ size: 16, name: 'favicon-16x16.png' },
	{ size: 32, name: 'favicon-32x32.png' },
	{ size: 180, name: 'apple-touch-icon.png' },
	{ size: 192, name: 'favicon-192x192.png' },
	{ size: 512, name: 'favicon-512x512.png' },
	{ size: 150, name: 'mstile-150x150.png' }
];

for (const { size, name } of sizes) {
	await sharp(svg)
		.resize(size, size)
		.png()
		.toFile(`static/${name}`);
	console.log(`✓ Generated ${name}`);
}
```

Run it:
```bash
node scripts/generate-favicons.js
```

## Currently Implemented Files

### Required (Generate These)
- `/static/favicon.svg` ✓ (exists)
- `/static/favicon-16x16.png` (generate)
- `/static/favicon-32x32.png` (generate)
- `/static/apple-touch-icon.png` (180x180, generate)
- `/static/favicon-192x192.png` (generate)
- `/static/favicon-512x512.png` (generate)
- `/static/mstile-150x150.png` (generate)

### Configuration Files
- `/static/site.webmanifest` ✓ (exists)
- `/static/browserconfig.xml` ✓ (exists)

## Testing Your Favicons

### Local Testing
1. Generate the favicon files
2. Run `pnpm run dev`
3. Open http://localhost:5173
4. Check browser tab for favicon
5. Add to home screen on mobile to test PWA icon

### Production Testing
After deployment:
1. Visit your live site
2. Use https://realfavicongenerator.net/favicon_checker
3. Enter your site URL
4. Check all favicon formats

## Favicon Design Tips

For best results, your SVG favicon should:
- Be simple and recognizable at small sizes
- Have good contrast
- Work in both light and dark themes
- Be centered with some padding
- Use a square viewBox (e.g., "0 0 100 100")

## SEO Impact

Good favicons improve:
- **Brand recognition** - Users recognize your site in tabs/bookmarks
- **Trust signals** - Professional appearance
- **Mobile experience** - Nice home screen icons
- **PWA capabilities** - Proper app icon when installed

## Next Steps

1. **Generate all favicon sizes** using one of the methods above
2. **Test locally** to ensure all sizes work
3. **Commit and deploy** the generated files
4. **Verify** using online tools

## Troubleshooting

### Favicon not updating?
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Try incognito/private window
- Check browser console for 404 errors

### SVG not showing?
- Ensure SVG has proper XML declaration
- Check that SVG viewBox is defined
- Some older browsers don't support SVG favicons

### Files to gitignore?
No! Commit all favicon files to your repository. They're part of your site's assets.

