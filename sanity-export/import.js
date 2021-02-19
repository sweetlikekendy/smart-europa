const path = require('path');
const fs = require('fs');
const sanityClient = require('@sanity/client');
const sanityImport = require('@sanity/import');

const client = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    token: process.env.SANITY_TOKEN,
    useCdn: false
});

const input = fs.createReadStream(path.join(__dirname, 'export.json'));

sanityImport(input, {
    client: client,
    operation: 'createOrReplace' // `create`, `createOrReplace` or `createIfNotExists`
}).then(({ numDocs, warnings }) => {
    console.log('imported %d documents', numDocs);
    console.log('warnings:', warnings);
    // Note: There might be warnings! Check `warnings`
}).catch(err => {
    console.error('Import failed: %s', err.message);
});
