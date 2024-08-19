// scrape.js
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://sunpump.meme/home', { waitUntil: 'networkidle0' });

    // 获取页面内容
    const htmlContent = await page.content();

    // 保存内容到文件
    fs.writeFileSync('output.html', htmlContent, 'utf8');

    await browser.close();
})();
