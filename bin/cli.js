#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get the directory where cursor-rules-awesome is installed
// This could be in node_modules/cursor-rules-awesome or global
let packageDir;
try {
    packageDir = path.dirname(require.resolve('../package.json'));
} catch (e) {
    // Fallback to relative path
    packageDir = path.join(__dirname, '..');
}

// Get the current working directory (user's project root)
const projectRoot = process.cwd();

// Source and destination paths
const sourceFile = path.join(packageDir, '.cursorrules');
const destFile = path.join(projectRoot, '.cursorrules');

console.log('\n==========================================');
console.log('Cursor Rules Awesome - Installation');
console.log('==========================================\n');

// Check if source file exists
if (!fs.existsSync(sourceFile)) {
    console.error('ERROR: Cannot find .cursorrules file in package.');
    console.error('Expected location:', sourceFile);
    console.error('\nPlease reinstall the package:');
    console.error('   npm install cursor-rules-awesome\n');
    process.exit(1);
}

// Check if .cursorrules already exists in project
if (fs.existsSync(destFile)) {
    console.log('NOTICE: .cursorrules already exists in your project.');
    console.log('Location:', destFile);
    console.log('\nOptions:');
    console.log('   1. Keep existing file (no action needed)');
    console.log('   2. Backup and replace with new version:');
    console.log('      mv .cursorrules .cursorrules.backup');
    console.log('      npx cursor-rules-init');
    console.log('   3. Manually compare and merge changes\n');

    // Ask for confirmation to overwrite
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Overwrite existing .cursorrules? (yes/no): ', (answer) => {
        rl.close();

        if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
            // Backup existing file
            const backupFile = destFile + '.backup';
            try {
                fs.copyFileSync(destFile, backupFile);
                console.log('\nBackup created:', backupFile);
            } catch (e) {
                console.warn('Warning: Could not create backup');
            }

            // Copy new file
            try {
                fs.copyFileSync(sourceFile, destFile);
                console.log('SUCCESS: .cursorrules updated!\n');
                printSuccessMessage(destFile);
            } catch (error) {
                console.error('ERROR: Failed to copy file:', error.message);
                process.exit(1);
            }
        } else {
            console.log('\nInstallation cancelled. Existing .cursorrules kept.\n');
            process.exit(0);
        }
    });

} else {
    // Copy .cursorrules to project root
    try {
        fs.copyFileSync(sourceFile, destFile);

        console.log('SUCCESS: .cursorrules installed to your project!\n');
        printSuccessMessage(destFile);

    } catch (error) {
        console.error('ERROR: Failed to install .cursorrules:', error.message);
        console.error('\nManual installation:');
        console.error('   Copy from:', sourceFile);
        console.error('   To:', destFile);
        console.error('\nOr try:');
        console.error('   cp node_modules/cursor-rules-awesome/.cursorrules .\n');
        process.exit(1);
    }
}

function printSuccessMessage(location) {
    console.log('Location:', location);
    console.log('Size: 4,800+ lines, 72 sections\n');

    console.log('What\'s Next?');
    console.log('   1. Open your project in Cursor AI');
    console.log('   2. Start coding - rules are automatically applied');
    console.log('   3. See the difference in code quality\n');

    console.log('Documentation:');
    console.log('   - GitHub: https://github.com/tonynguyennvt/cursor-rules-awesome');
    console.log('   - npm: https://www.npmjs.com/package/cursor-rules-awesome\n');

    console.log('Features Included:');
    console.log('   - OWASP Top 10 security best practices');
    console.log('   - SRE practices (SLI/SLO/SLA, Error Budgets)');
    console.log('   - 15+ programming languages');
    console.log('   - 9 compliance frameworks (SOC 2, ISO 27001, HIPAA, PCI-DSS, GDPR)');
    console.log('   - Production operations & maintenance guide');
    console.log('   - CI/CD pipeline best practices');
    console.log('   - Event-Driven Architecture & Event Sourcing');
    console.log('   - Perfect 10/10 rating\n');

    console.log('Tip: Review .cursorrules file to explore all 72 sections!\n');
    console.log('Happy coding with enterprise-grade standards!\n');
    console.log('==========================================\n');
}