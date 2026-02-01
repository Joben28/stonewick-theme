# Linking StoneWick to Another Project

This guide explains how to use StoneWick as a dependency in a separate project.

---

## Method 1: NPM Package (Recommended for Production)

### Publishing to NPM

```bash
# In StoneWick directory
cd /path/to/stonewick

# Login to NPM (first time only)
npm login

# Build the library
npm run build

# Publish (updates version automatically)
npm publish --access public
```

### Installing in Consumer Project

```bash
# In your other project
npm install @stonewick/theme@^1.0.0
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

## Method 2: NPM Link (Best for Development)

Use this when actively developing StoneWick alongside another project.

### Step 1: Link StoneWick globally

```bash
# In StoneWick directory
cd /path/to/stonewick
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
cd /path/to/stonewick
npm unlink --global
```

---

## Method 3: Git Submodule (For Private Repos)

### Add as submodule

```bash
# In your project root
git submodule add https://github.com/yourname/stonewick.git lib/stonewick
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

## Method 4: GitHub Package Registry (For Organizations)

### Configure package.json

```json
{
  "name": "@yourorg/stonewick",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

### Publish

```bash
npm publish
```

### Install (requires auth)

Create `.npmrc` in consumer project:

```
@yourorg:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Then install:

```bash
npm install @yourorg/stonewick
```

---

## Method 5: Direct File Copy (Simplest, No Versioning)

### Copy dist folder

```bash
# Copy to your project
cp -r /path/to/stonewick/dist /path/to/my-project/vendor/stonewick
```

### Import

```html
<link rel="stylesheet" href="vendor/stonewick/stonewick.min.css">
<script src="vendor/stonewick/stonewick.min.js"></script>
```

---

## Recommended Workflow

### For Active Development

1. Use **npm link** while developing both projects
2. Changes to StoneWick immediately reflect in consumer
3. Run `npm run build:watch` in StoneWick for auto-rebuilds

### For Production Deployment

1. Publish to **NPM** with semantic versioning
2. Pin to minor version: `@stonewick/theme@^1.0.0`
3. Consumer gets bug fixes automatically
4. Major updates require explicit upgrade

### For Teams/Organizations

1. Use **GitHub Package Registry** for private packages
2. Set up CI/CD to publish on tag
3. Use Renovate/Dependabot for automatic updates

---

## Version Pinning Strategies

```json
{
  "dependencies": {
    // Exact version (most stable, no auto-updates)
    "@stonewick/theme": "1.2.3",
    
    // Patch updates only (bug fixes)
    "@stonewick/theme": "~1.2.0",
    
    // Minor updates (new features, backwards compatible)
    "@stonewick/theme": "^1.0.0",
    
    // Latest (not recommended for production)
    "@stonewick/theme": "latest"
  }
}
```

---

## Troubleshooting

### CSS not loading

- Ensure Bootstrap is imported **before** StoneWick
- Check import paths are correct
- Verify `dist/` folder exists (run `npm run build`)

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
