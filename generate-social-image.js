const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Get year from command line argument, default to current year
const year = process.argv[2] || new Date().getFullYear().toString();
const snowImagePath = path.join(__dirname, year, `snow${year}.jpg`);
const outputPath = path.join(__dirname, year, `social_${year}.jpg`);

// Social image dimensions
const WIDTH = 1024;
const HEIGHT = 474;

function generateSocialImage() {
  try {
    // Check if snow image exists
    if (!fs.existsSync(snowImagePath)) {
      console.error(`Error: ${snowImagePath} not found`);
      process.exit(1);
    }

    console.log(`Generating social image for ${year}...`);

    // Use ImageMagick to create the social image
    // 1. Resize and crop to exact dimensions
    // 2. Add text overlay with marker-style font
    // 3. Add shadow/stroke for readability
    const command = `convert "${snowImagePath}" \\
      -resize ${WIDTH}x${HEIGHT}^ \\
      -gravity center \\
      -extent ${WIDTH}x${HEIGHT} \\
      -font "Marker-Felt-Wide" \\
      -pointsize 80 \\
      -fill white \\
      -stroke black \\
      -strokewidth 4 \\
      -gravity center \\
      -annotate +0+0 "A Wintry Mix ${year}" \\
      -quality 90 \\
      "${outputPath}"`;

    execSync(command);

    console.log(`✓ Social image generated: ${outputPath}`);
  } catch (error) {
    console.error('Error generating social image:', error.message);

    // Fallback: try with a different font if Brush Script isn't available
    console.log('Retrying with alternative font...');
    try {
      const fallbackCommand = `convert "${snowImagePath}" \\
        -resize ${WIDTH}x${HEIGHT}^ \\
        -gravity center \\
        -extent ${WIDTH}x${HEIGHT} \\
        -font "Helvetica-Bold" \\
        -pointsize 90 \\
        -fill white \\
        -stroke black \\
        -strokewidth 4 \\
        -gravity center \\
        -annotate +0+0 "A Wintry Mix ${year}" \\
        -quality 90 \\
        "${outputPath}"`;

      execSync(fallbackCommand, { stdio: 'inherit' });
      console.log(`✓ Social image generated with fallback font: ${outputPath}`);
    } catch (fallbackError) {
      console.error('Fallback also failed:', fallbackError.message);
      process.exit(1);
    }
  }
}

generateSocialImage();
