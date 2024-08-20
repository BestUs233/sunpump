const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  // 启动 Puppeteer
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // 打开目标网页
  await page.goto('https://sunpump.meme/home', { waitUntil: 'networkidle2' });

  // 获取完整的页面内容
  const html = await page.content();

  // 保存 HTML 内容到文件
  fs.writeFileSync('output.html', html);

  // 关闭浏览器
  await browser.close();
})();
