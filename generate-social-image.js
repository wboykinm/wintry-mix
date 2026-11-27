const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Get year from command line argument, default to current year
const year = process.argv[2] || new Date().getFullYear().toString();
const snowImagePath = path.join(__dirname, year, `snow${year}.jpg`);
const outputPath = path.join(__dirname, year, `social_${year}.jpg`);
const fontPath = path.join(__dirname, 'fonts', 'Knewave-Regular.ttf');

// Social image dimensions
const WIDTH = 1024;
const HEIGHT = 474;

function generateSocialImage() {
  if (!fs.existsSync(snowImagePath)) {
    console.error(`Error: ${snowImagePath} not found`);
    process.exit(1);
  }

  console.log(`Generating social image for ${year}...`);

  // Resize/crop to exact dimensions, then overlay stroked text for readability.
  try {
    execFileSync('magick', [
      snowImagePath,
      '-resize', `${WIDTH}x${HEIGHT}^`,
      '-gravity', 'center',
      '-extent', `${WIDTH}x${HEIGHT}`,
      '-font', fontPath,
      '-pointsize', '84',
      '-fill', 'white',
      '-stroke', 'black',
      '-strokewidth', '4',
      '-annotate', '+0+0', `A Wintry Mix ${year}`,
      '-quality', '90',
      outputPath,
    ], { stdio: 'inherit' });
  } catch (error) {
    console.error('Error generating social image (is ImageMagick 7 installed? `brew install imagemagick`):', error.message);
    process.exit(1);
  }

  console.log(`✓ Social image generated: ${outputPath}`);
}

generateSocialImage();
