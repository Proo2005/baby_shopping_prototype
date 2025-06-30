const fs = require("fs");
const https = require("https");
const path = require("path");

const categories = ["cloth", "acc", "food", "toy"];
const imageCount = 10; // 15 images per category = 60 total

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https
      .get(url, (res) => {
        res.pipe(file);
        file.on("finish", () => {
          file.close(resolve);
        });
      })
      .on("error", (err) => {
        fs.unlink(filepath, () => {});
        reject(err.message);
      });
  });
};

const run = async () => {
  const publicPath = path.join(__dirname, "public");

  if (!fs.existsSync(publicPath)) {
    fs.mkdirSync(publicPath);
  }

  for (const category of categories) {
    const folderPath = path.join(publicPath, category);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }

    for (let i = 1; i <= imageCount; i++) {
      const filename = `${category}_${i}.png`;
      const filePath = path.join(folderPath, filename);
     const url = `https://placehold.co/300x300.png?text=${category.toUpperCase()}+${i}`;

      await downloadImage(url, filePath);
      console.log(`✅ Saved: ${filePath}`);
    }
  }
};

run()
  .then(() => console.log("🎉 All placeholder images downloaded to /public/*"))
  .catch(console.error);
