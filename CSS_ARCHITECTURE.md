# StoneWick CSS Architecture

## ⚠️ CRITICAL: Single CSS System

As of February 2026, there is **ONE CSS system**:

- **Source of Truth**: `/src/css/` (edit here)
- **Build Command**: `npm run build:css`
- **Output**: 
  - `/dist/stonewick.css` (for package distribution)
  - `/css/theme.css` (for demo HTML files)

## Making CSS Changes

### ✅ CORRECT Process:
1. Edit files in `/src/css/`
2. Run `npm run build:css`
3. Build outputs to BOTH `/dist/` and `/css/`
4. Changes appear in demo HTML files (they load `css/theme.css`)

### ❌ WRONG Process (DO NOT DO):
- ~~Edit files in `/css/` directly~~ → Will be overwritten!
- ~~Edit `/css/theme.css` directly~~ → Will be overwritten!
- ~~Edit `/dist/stonewick.css` directly~~ → Will be overwritten!

## Why This Structure?

Previously there were TWO competing CSS systems which caused confusion:
1. Old: `/css/` with @import statements (manual editing)
2. New: `/src/css/` with build system → `/dist/`

This led to editing the wrong files and changes not appearing. **That problem is eliminated now.**

## Historical Context (DO NOT REPEAT)

**Problem**: Developer edited `/src/css/` files → ran build → no changes in demos
**Root Cause**: Demo HTML loaded `/css/theme.css` (old @import system), not `/dist/` (build output)
**Solution**: Build now outputs to BOTH locations. Old `/css/` files deleted.

## File Structure

```
/src/css/          ← EDIT HERE (source files)
  /core/
  /bootstrap/
  /layout/
  /modules/
    /media/
      _media-list.css
    /commerce/
    /cards/
    ...

/scripts/
  build-css.js     ← Build script (runs via npm run build:css)

/css/
  theme.css        ← GENERATED (do not edit)
  README.md        ← Warning file

/dist/
  stonewick.css    ← GENERATED (do not edit)
  stonewick.min.css
  /modules/
    ...
```

## When to Rebuild

Rebuild CSS whenever you:
- Change any file in `/src/css/`
- Add new components
- Modify variables or utilities
- Update theme colors or spacing

The build is fast (~2-3 seconds) so rebuild frequently.

## Verification

After building, verify:
1. `/css/theme.css` has recent timestamp
2. `/dist/stonewick.css` has recent timestamp
3. Demo HTML files reflect your changes (hard refresh browser)

## Summary

**Remember: `/src/css/` is source → build → `/css/theme.css` is output**

Never edit output. Always edit source.
