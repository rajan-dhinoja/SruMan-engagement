const { Jimp } = require('jimp');

async function main() {
  const imgPath = './public/images/palace.png';
  const image = await Jimp.read(imgPath);
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  console.log(`Image dimensions: ${width}x${height}`);

  let minX = width;
  let maxX = 0;
  let minY = height;
  let maxY = 0;
  let count = 0;

  // Scan center region for dark pixels (brightness < 40)
  for (let y = Math.floor(height * 0.2); y < Math.floor(height * 0.85); y++) {
    for (let x = Math.floor(width * 0.25); x < Math.floor(width * 0.75); x++) {
      const idx = (width * y + x) * 4;
      const r = image.bitmap.data[idx];
      const g = image.bitmap.data[idx + 1];
      const b = image.bitmap.data[idx + 2];
      const brightness = (r + g + b) / 3;

      if (brightness < 42) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
        count++;
      }
    }
  }

  if (count > 100) {
    console.log('Found dark doorway area:');
    console.log(`minX: ${minX} (${((minX/width)*100).toFixed(2)}%)`);
    console.log(`maxX: ${maxX} (${((maxX/width)*100).toFixed(2)}%)`);
    console.log(`minY: ${minY} (${((minY/height)*100).toFixed(2)}%)`);
    console.log(`maxY: ${maxY} (${((maxY/height)*100).toFixed(2)}%)`);
    console.log(`Width: ${maxX - minX} (${(((maxX-minX)/width)*100).toFixed(2)}%)`);
    console.log(`Height: ${maxY - minY} (${(((maxY-minY)/height)*100).toFixed(2)}%)`);
  } else {
    console.log('No dark doorway found.');
  }
}

main().catch(console.error);
