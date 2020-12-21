const fg = require('fast-glob');
const fs = require('fs');


const entries = fg.sync(['project/**/*.json']);

const list = entries.map(entry => {
    let rawdata = fs.readFileSync(entry);
    return JSON.parse(rawdata);
})

fs.writeFileSync('build/editor-world.json', JSON.stringify(list, null, 4));
