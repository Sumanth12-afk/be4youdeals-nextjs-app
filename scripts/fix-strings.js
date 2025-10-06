const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, '..', 'all-laptops-data.js');
let src = fs.readFileSync(target, 'utf8');

const lines = src.split(/\r?\n/);
const keys = ['title', 'price', 'rating', 'count', 'image', 'link'];
const keyPattern = new RegExp(`^(\\s*)(${keys.join('|')}):\\s*\"(.*)\",\\s*$`);

const fixed = lines.map((line) => {
  const m = line.match(keyPattern);
  if (m) {
    const [, indent, key, value] = m;
    return `${indent}${key}: \`${value}\`,`;
  }
  return line;
}).join('\n');

fs.writeFileSync(target, fixed, 'utf8');
console.log('Sanitized string fields in all-laptops-data.js');
