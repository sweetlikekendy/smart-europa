const path = require('path');
const sanityClient = require('@sanity/client');
const exportDataset = require('@sanity/export');

const client = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    token: process.env.SANITY_TOKEN,
    useCdn: false
});

let currentStep = null;
const options = {
    client: client,
    dataset: 'production',
    outputPath: path.join(__dirname, 'export.json'),

    compress: false,
    drafts: true,
    assets: true,
    raw: false,
    assetConcurrency: 5,
    // types: '',

    onProgress: ({ step, current, total, update }) => {
        if (currentStep !== step) {
            if (currentStep) {
                return;
            }
            currentStep = step;
            console.log(step);
        }
    }
};

console.log('Start Sanity export');
exportDataset(options).then(() => {
    console.log('Start export finished');
});
