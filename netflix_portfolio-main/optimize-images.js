const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = 'src/images';
const outputDir = 'src/images-optimized';

async function optimizeImages() {
  try {
    console.log('Starting image optimization...\n');
    
    // Create output directory
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Get original sizes
    const originalFiles = fs.readdirSync(sourceDir);
    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;
    let optimizedCount = 0;
    
    originalFiles.forEach(file => {
      const filePath = path.join(sourceDir, file);
      const stats = fs.statSync(filePath);
      if (stats.isFile() && /\.(jpg|jpeg|png)$/i.test(file)) {
        totalOriginalSize += stats.size;
      }
    });
    
    console.log(`Total original size: ${(totalOriginalSize / 1024).toFixed(2)} KB\n`);
    
    // Optimize images
    for (const file of originalFiles) {
      const filePath = path.join(sourceDir, file);
      const stats = fs.statSync(filePath);
      
      if (!stats.isFile()) continue;
      
      const ext = path.extname(file).toLowerCase();
      const outputPath = path.join(outputDir, file);
      
      if (ext === '.jpg' || ext === '.jpeg') {
        await sharp(filePath)
          .jpeg({ quality: 80, progressive: true })
          .toFile(outputPath);
        optimizedCount++;
      } else if (ext === '.png') {
        await sharp(filePath)
          .png({ quality: 80, compressionLevel: 9 })
          .toFile(outputPath);
        optimizedCount++;
      } else if (ext === '.webp' || ext === '.svg') {
        // Copy webp and svg files as-is
        fs.copyFileSync(filePath, outputPath);
      }
    }
    
    // Calculate optimized size
    const optimizedFiles = fs.readdirSync(outputDir);
    optimizedFiles.forEach(file => {
      const filePath = path.join(outputDir, file);
      const stats = fs.statSync(filePath);
      if (stats.isFile() && /\.(jpg|jpeg|png)$/i.test(file)) {
        totalOptimizedSize += stats.size;
      }
    });
    
    console.log(`Total optimized size: ${(totalOptimizedSize / 1024).toFixed(2)} KB`);
    console.log(`Savings: ${((totalOriginalSize - totalOptimizedSize) / 1024).toFixed(2)} KB (${((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(1)}%)\n`);
    console.log(`Optimized ${optimizedCount} images!`);
    console.log(`\nOptimized images saved to: ${outputDir}`);
    
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();
