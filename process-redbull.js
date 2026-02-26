const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'redbull new assets');
const outputBase = path.join(__dirname, 'public/images/redbull');

async function processImages() {
    const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.jpg')).sort();

    // We need all 200 frames now because the scroll experience is single and epic
    fs.mkdirSync(outputBase, { recursive: true });

    console.log(`Processing ${files.length} frames for Redbull...`);
    const promises = [];

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputBase, `${i + 1}.webp`);

        // We can run them in parallel for speed
        promises.push(sharp(inputPath).webp({ quality: 80 }).toFile(outputPath));
    }

    await Promise.all(promises);
    console.log(`Finished processing all ${files.length} frames to webp.`);
}

processImages().catch(console.error);
