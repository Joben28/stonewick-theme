# CSS Output Folder

**⚠️ DO NOT MANUALLY EDIT FILES IN THIS FOLDER**

This folder contains **GENERATED OUTPUT** from the build system.

## How It Works

- **Source**: All CSS source files are in `/src/css/`
- **Build**: Run `npm run build:css` to compile
- **Output**: Compiled CSS is written to `css/theme.css`

## To Make CSS Changes

1. Edit files in `/src/css/` (NOT here)
2. Run `npm run build:css`
3. The build will regenerate `css/theme.css`

## Why This Folder Exists

All demo HTML files (kitchen-sink, etc.) reference `css/theme.css`. This allows them to use the compiled theme without needing to know about the build system structure.

## Single Source of Truth

**Source**: `/src/css/` → **Build** → **Output**: `/css/theme.css`

There is only ONE CSS system now. Any manual edits in this folder will be **overwritten** on the next build.
