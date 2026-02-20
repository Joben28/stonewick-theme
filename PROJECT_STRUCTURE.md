# StoneWick Theme - Project Structure

## 📁 Folder Organization

```
StoneWickSite/
├── src/              ← SOURCE FILES (edit these)
│   └── css/          Theme source organized by module
│       ├── core/
│       ├── bootstrap/
│       ├── layout/
│       └── modules/
│
├── dist/             ← BUILD OUTPUT (auto-generated, do not edit)
│   ├── stonewick.css         Full bundle
│   ├── stonewick.min.css     Full bundle (minified)
│   ├── core.css/.min.css     Core module
│   ├── bootstrap.css/.min.css Bootstrap overrides
│   ├── layout.css/.min.css   Layout & responsive
│   └── modules/              Individual component modules
│       ├── cards.css/.min.css
│       ├── navigation.css/.min.css
│       ├── media.css/.min.css
│       ├── commerce.css/.min.css
│       └── interactive.css/.min.css
│
├── css/              ← DEMO OUTPUT
│   └── theme.css     Copy of full bundle for local demos
│
├── _mocks/           ← DEMO HTML FILES
│   ├── Handyman/
│   ├── MediaMinistry/
│   ├── Ministry/
│   ├── SellLand/
│   └── StonewickSites/
│
├── doc/              Documentation for components
├── scripts/          Build scripts
└── *.html            Kitchen sink demo pages
```

## 🔧 Build Workflow

1. **Edit source:** Modify files in `src/css/`
2. **Build:** Run `npm run build:css` or `node scripts/build-css.js`
3. **Output:** Generated files appear in `dist/` and `css/theme.css`

## 📝 File Purposes

### Source (`src/css/`)
- **Edit these files** when making theme changes
- Organized by module for maintainability
- Use CSS variables for theming
- Include comments explaining complex logic

### Distribution (`dist/`)
- **Auto-generated** - never edit directly
- Production-ready CSS (minified versions available)
- Used by projects importing StoneWick as a library
- Ignored by git (see `.gitignore`)

### Demo (`css/theme.css`)
- Copy of `dist/stonewick.css` for local demos
- Used by kitchen sink and mock HTML files
- Allows testing without server setup
- Also ignored by git

## 🎯 Usage Scenarios

### For Developers (Working on StoneWick Theme)
1. Edit files in `src/css/`
2. Run `npm run build:css`
3. Test with kitchen sink pages (they use `css/theme.css`)
4. Commit source changes in `src/css/`

### For Consumers (Using StoneWick in Projects)
1. Import from `dist/stonewick.min.css` (full bundle)
2. Or import individual modules from `dist/modules/`
3. Never edit dist files - treat as read-only library

## 🗑️ Cleaned Up (Previously Existed)
- `public/css/` - removed (duplicate)
- `public/dist/` - removed (duplicate)
- `dist/dist/` - removed (nested duplicate)
- `dist/css/` - removed (old structure)

These folders were build artifacts from old configurations and have been removed to simplify the project structure.

## 📚 Documentation

- `CSS_ARCHITECTURE.md` - CSS organization and patterns
- `COMPONENT_ROADMAP.md` - Component inventory
- `doc/` - Individual component documentation
- `dist/README.md` - Distribution folder guide
