const fs = require('fs');

// We need to evaluate packer.js. Since it's a browser script, let's load it using eval or similar.
const packerCode = fs.readFileSync('e:/Antigravity/js/packer.js', 'utf8');

// We need a dummy window or similar? No, packer.js returns an IIFE assigned to Packer.
let Packer;
eval(packerCode.replace('const Packer =', 'Packer ='));

try {
    const items = [
        { name: 'LPA', w: 1150, d: 1150, h: 1000, weight: 600.1, qty: 3, rotatable: true, stackable: true },
        { name: 'Glass cloth', w: 1300, d: 1150, h: 1800, weight: 700, qty: 2, rotatable: true, stackable: false },
        { name: 'VUP-6737S', w: 1150, d: 1150, h: 1000, weight: 835, qty: 20, rotatable: true, stackable: true }
    ];
    
    const results = Packer.pack('40HC', items);
    console.log('Success! Results length:', results.length);
    console.log(results.map(r => r.container));
} catch (e) {
    console.error('ERROR OCCURRED:');
    console.error(e.message);
    console.error(e.stack);
}
