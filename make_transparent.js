const { Jimp } = require('jimp');

async function main() {
  const imgPath = './public/logos/sruman-logo.png';
  const image = await Jimp.read(imgPath);
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  
  // Sample pixels at x: 150, y from 150 to 160
  console.log('Sample pixels at x:150:');
  for (let y = 150; y < 160; y++) {
    const idx = (width * y + 150) * 4;
    const r = image.bitmap.data[idx];
    const g = image.bitmap.data[idx + 1];
    const b = image.bitmap.data[idx + 2];
    const a = image.bitmap.data[idx + 3];
    console.log(`y:${y} -> R:${r}, G:${g}, B:${b}, A:${a}`);
  }
}

main().catch(console.error);
