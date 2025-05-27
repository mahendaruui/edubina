// This script will update a single school page file to match the bright theme

const fs = require('fs');
const path = require('path');

// Get the file to update
const args = process.argv.slice(2);
if (args.length !== 1) {
  console.log('Usage: node updateSchoolPage.js <filename>');
  process.exit(1);
}

const fileName = args[0];
const filePath = path.join(__dirname, fileName);

// Read the file content
let content = fs.readFileSync(filePath, 'utf8');

// Replace dark backgrounds with light ones
content = content.replace(/bg-slate-800\/70/g, 'bg-white');
content = content.replace(/glassmorphism-card/g, 'border border-indigo-100');
content = content.replace(/shadow-xl/g, 'shadow-md');
content = content.replace(/shadow-2xl/g, 'shadow-md');
content = content.replace(/hover:shadow-pink-500\/20/g, 'hover:shadow-md');
content = content.replace(/hover:shadow-indigo-500\/30/g, 'hover:shadow-md');

// Replace text colors
content = content.replace(/text-gray-300/g, 'text-gray-700');
content = content.replace(/text-gray-400/g, 'text-gray-600');
content = content.replace(/text-gray-100/g, 'text-gray-800');
content = content.replace(/text-indigo-300/g, 'text-indigo-600');
content = content.replace(/text-indigo-400/g, 'text-indigo-600');
content = content.replace(/text-pink-400/g, 'text-pink-600');

// Update button hover states
content = content.replace(/hover:bg-indigo-500 hover:text-slate-900/g, 'hover:bg-indigo-50 hover:text-indigo-800');
content = content.replace(/border-indigo-400/g, 'border-indigo-500');
content = content.replace(/text-indigo-400 border-indigo-500/g, 'text-indigo-600 border-indigo-500');

// Write the updated content back to the file
fs.writeFileSync(filePath, content);
console.log(`Updated ${fileName} to use bright theme`);
