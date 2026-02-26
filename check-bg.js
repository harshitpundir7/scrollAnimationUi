const sharp = require('sharp');

async function getCorners() {
    const meta = await sharp('redbull new assets/ezgif-frame-001.jpg').metadata();
    console.log(`Dimensions: ${meta.width}x${meta.height}`);

    const w = meta.width;
    const h = meta.height;

    // Extract a 1x1 pixel from a few corners
    const tasks = [
        { left: 0, top: 0, width: 1, height: 1 },
        { left: w - 1, top: 0, width: 1, height: 1 },
        { left: 0, top: h - 1, width: 1, height: 1 },
        { left: w - 1, top: h - 1, width: 1, height: 1 }
    ];

    for (let i = 0; i < tasks.length; i++) {
        const raw = await sharp('redbull new assets/ezgif-frame-001.jpg')
            .extract(tasks[i])
            .raw()
            .toBuffer();
        console.log(`Corner ${i} RGB: ${raw[0]}, ${raw[1]}, ${raw[2]}`);
    }
}

getCorners().catch(console.error);
