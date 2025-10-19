#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get the directory where the package is installed
const packageDir = path.join(__dirname, '..');

// Get the current working directory (user's project root)
const projectRoot = process.cwd();

// Source and destination paths
const sourceFile = path.join(packageDir, '.cursorrules');
const destFile = path.join(projectRoot, '.cursorrules');

console.log('\nCursor Rules Awesome - Installation\n');
console.log('==========================================\n');

// Check if .cursorrules already exists
if (fs.existsSync(destFile)) {
    console.log('WARNING: .cursorrules already exists in your project.');
    console.log('Location:', destFile);
    console.log('\nTo update, please:');
    console.log('   1. Backup your current .cursorrules file');
    console.log('   2. Delete or rename it');
    console.log('   3. Run: npx cursor-standards install\n');

    console.log('Or manually copy from:');
    console.log('   ' + sourceFile + '\n');
    process.exit(0);
}

// Copy .cursorrules to project root
try {
    fs.copyFileSync(sourceFile, destFile);

    console.log('SUCCESS: .cursorrules installed to your project!\n');
    console.log('Location:', destFile);
    console.log('Size: 4,800+ lines, 72 sections\n');

    console.log('What\'s Next?\n');
    console.log('   1. Open your project in Cursor AI');
    console.log('   2. Start coding - standards are automatically applied');
    console.log('   3. See the difference in code quality\n');

    console.log('Documentation:');
    console.log('   - Quick Start: https://github.com/tonynguyennvt/cursor-rules-awesome');
    console.log('   - Full Guide: See README.md in package\n');

    console.log('Features:');
    console.log('   - OWASP Top 10 security');
    console.log('   - SRE practices (SLI/SLO/SLA)');
    console.log('   - 15+ programming languages');
    console.log('   - 9 compliance frameworks');
    console.log('   - Production-ready operations');
    console.log('   - Perfect 10/10 rating\n');

    console.log('Tip: Review .cursorrules to see all 72 sections!\n');
    console.log('Happy coding with enterprise-grade standards!\n');
    console.log('==========================================\n');

} catch (error) {
    console.error('ERROR: Failed to install .cursorrules:', error.message);
    console.error('\nManual installation:');
    console.error('   Copy from: ' + sourceFile);
    console.error('   To: ' + destFile + '\n');
    process.exit(1);
}