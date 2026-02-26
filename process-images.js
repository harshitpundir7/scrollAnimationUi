const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'redbull assets');
const outputBase = path.join(__dirname, 'public/images');
const flavors = ['mango', 'chocolate', 'pomegranate'];

async function processImages() {
  const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.jpg')).sort();
  // We need 120 frames. Start from index 39 (frame 40)
  const selectedFiles = files.slice(39, 159);
  
  if (selectedFiles.length < 120) {
    console.error("Not enough frames found!");
    return;
  }
  
  for (const flavor of flavors) {
    const outputDir = path.join(outputBase, flavor);
    fs.mkdirSync(outputDir, { recursive: true });
    
    console.log(`Processing for ${flavor}...`);
    for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, `${i + 1}.webp`);
      await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
    }
  }
  console.log("Finished processing 120 frames for all flavors.");
}

processImages().catch(console.error);
