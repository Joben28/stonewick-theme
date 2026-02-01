/**
 * Setup source directory structure for library build
 * Run once to migrate existing CSS to modular src/ structure
 */

const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../src/css');

// Directory structure to create
const directories = [
  'core',
  'bootstrap',
  'layout',
  'modules/cards',
  'modules/navigation',
  'modules/media',
  'modules/commerce',
  'modules/interactive'
];

// File mappings: source -> destination
const fileMappings = {
  // Core
  '../css/_variables.css': 'core/_variables.css',
  '../css/_base.css': 'core/_base.css',
  '../css/_typography.css': 'core/_typography.css',
  '../css/_utilities.css': 'core/_utilities.css',
  
  // Bootstrap overrides
  '../css/_bs5-overrides.css': 'bootstrap/_bs5-overrides.css',
  
  // Layout
  '../css/_layout.css': 'layout/_layout.css',
  '../css/_responsive.css': 'layout/_responsive.css',
  
  // Cards module
  '../css/components/_cards.css': 'modules/cards/_cards.css',
  '../css/components/_badges.css': 'modules/cards/_badges.css',
  '../css/components/_testimonials.css': 'modules/cards/_testimonials.css',
  
  // Navigation module
  '../css/components/_navbar.css': 'modules/navigation/_navbar.css',
  '../css/components/_tabs.css': 'modules/navigation/_tabs.css',
  '../css/components/_pagination.css': 'modules/navigation/_pagination.css',
  '../css/components/_breadcrumbs.css': 'modules/navigation/_breadcrumbs.css',
  
  // Media module
  '../css/components/_hero.css': 'modules/media/_hero.css',
  '../css/components/_gallery.css': 'modules/media/_gallery.css',
  '../css/components/_media-list.css': 'modules/media/_media-list.css',
  '../css/components/_video-theater.css': 'modules/media/_video-theater.css',
  '../css/components/_channel-header.css': 'modules/media/_channel-header.css',
  
  // Commerce module
  '../css/components/_products.css': 'modules/commerce/_products.css',
  '../css/components/_tables.css': 'modules/commerce/_tables.css',
  
  // Interactive module
  '../css/components/_modals.css': 'modules/interactive/_modals.css',
  '../css/components/_slider.css': 'modules/interactive/_slider.css',
  '../css/components/_metrics.css': 'modules/interactive/_metrics.css',
  '../css/components/_timeline.css': 'modules/interactive/_timeline.css',
  '../css/components/_section-transitions.css': 'modules/interactive/_section-transitions.css'
};

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created: ${dir}`);
  }
}

function copyFile(src, dest) {
  const srcPath = path.resolve(__dirname, src);
  const destPath = path.join(srcDir, dest);
  
  if (fs.existsSync(srcPath)) {
    ensureDir(path.dirname(destPath));
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied: ${src} -> ${dest}`);
  } else {
    console.warn(`Warning: Source not found: ${src}`);
  }
}

function setup() {
  console.log('🚀 Setting up source directory structure...\n');
  
  // Create directories
  console.log('Creating directories...');
  directories.forEach(dir => ensureDir(path.join(srcDir, dir)));
  
  // Copy files
  console.log('\nCopying files...');
  for (const [src, dest] of Object.entries(fileMappings)) {
    copyFile(src, dest);
  }
  
  console.log('\n✅ Setup complete!');
  console.log('\nNext steps:');
  console.log('1. Review migrated files in src/css/');
  console.log('2. Run `npm install` to install dependencies');
  console.log('3. Run `npm run build` to generate dist/');
}

setup();
