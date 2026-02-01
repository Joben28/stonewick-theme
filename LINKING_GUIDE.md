# Linking StoneWick to Another Project

This guide explains how to use StoneWick from GitHub in your projects.

**Repository**: https://github.com/Joben28/stonewick-theme

---

## Method 1: Install Directly from GitHub (Recommended)

### Install the latest version

```bash
# In your project
npm install github:Joben28/stonewick-theme
```

### Or specify in package.json

```json
{
  "dependencies": {
    "@stonewick/theme": "github:Joben28/stonewick-theme"
  }
}
```

### Install specific release/tag

```bash
npm install github:Joben28/stonewick-theme#v1.0.0
```

### Usage

```css
/* your-project/src/styles/main.css */

/* 1. Override variables first */
:root {
  --bs-primary: #your-brand-color;
}

/* 2. Import Bootstrap */
@import 'bootstrap/dist/css/bootstrap.min.css';

/* 3. Import StoneWick (full or selective) */
@import '@stonewick/theme/dist/stonewick.css';

/* 4. Your project styles */
.my-component { }
```

```javascript
// your-project/src/main.js
import { initAll, Modal, ComparisonSlider } from '@stonewick/theme';

document.addEventListener('DOMContentLoaded', () => {
  initAll();
});
```

---

## Method 2: NPM Link (For Active Development)

Use this when actively developing StoneWick alongside another project.

### Step 1: Link StoneWick globally

```bash
# In StoneWick directory
cd C:\Users\mrpee\Desktop\StoneWickSite
npm link
```

### Step 2: Link in your project

```bash
# In your consumer project
cd /path/to/my-project
npm link @stonewick/theme
```

### Step 3: Use normally

```javascript
import { Modal } from '@stonewick/theme';
```

### Unlink when done

```bash
# In consumer project
npm unlink @stonewick/theme

# Optionally unlink global
cd C:\Users\mrpee\Desktop\StoneWickSite
npm unlink --global
```

---

## Method 3: Git Submodule

For projects that need direct access to source files.

### Add as submodule

```bash
# In your project root
git submodule add https://github.com/Joben28/stonewick-theme.git lib/stonewick
git submodule update --init --recursive
```

### Install and build

```bash
cd lib/stonewick
npm install
npm run build
cd ../..
```

### Import in your CSS

```css
@import './lib/stonewick/dist/stonewick.css';
```

### Update to latest

```bash
cd lib/stonewick
git pull origin main
npm run build
cd ../..
git add lib/stonewick
git commit -m "Update stonewick"
```

---

## Creating Releases

When you update StoneWick and want to version it:

```bash
# In StoneWick directory
cd C:\Users\mrpee\Desktop\StoneWickSite

# Build first
npm run build

# Commit changes
git add .
git commit -m "Release v1.0.0"

# Tag the release
git tag v1.0.0
git push origin main
git push origin v1.0.0
```

Now others can install that specific version:

```bash
npm install github:Joben28/stonewick-theme#v1.0.0
```

---

## Recommended Workflow

### For Active Development

1. Use **npm link** while developing StoneWick alongside another project
2. Changes immediately available in consumer project  
3. Run `npm run build` after CSS/JS changes

### For Production Deployment

1. Create **git tags** for releases (v1.0.0, v1.1.0, etc.)
2. Consumer projects install from GitHub with version tag
3. Update version in consumer's package.json when ready to upgrade

---

## Version Pinning Strategies

```json
{
  "dependencies": {
    // Latest from main branch (updates on npm install)
    "@stonewick/theme": "github:Joben28/stonewick-theme",
    
    // Specific release/tag (locked version)
    "@stonewick/theme": "github:Joben28/stonewick-theme#v1.0.0",
    
    // Specific commit (maximum control)
    "@stonewick/theme": "github:Joben28/stonewick-theme#abc1234"
  }
}
```

---

## Troubleshooting

### CSS not loading

- Ensure Bootstrap is imported **before** StoneWick
- Check import paths are correct
- Verify `dist/` folder exists (run `npm run build` in StoneWick)

### JS components not working

- Ensure DOM is ready before initializing
- Check browser console for errors
- Verify Bootstrap JS is loaded (some components extend BS5)

### Variable overrides not applying

- Override variables **before** importing StoneWick
- Use `:root` for global overrides
- Check CSS specificity

### npm link not reflecting changes

- Run `npm run build` in StoneWick after changes
- Clear your bundler's cache
- Restart your dev server

### GitHub install fails

- Ensure the repo is accessible (public or you have access)
- Check you're using correct URL: `github:Joben28/stonewick-theme`
- Try clearing npm cache: `npm cache clean --force`
