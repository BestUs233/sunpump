const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    try {
        const browser = await puppeteer.launch({
            headless: true, // 设置为 false 使用无头浏览器
            // 将可能需要的其他参数传递给 launch
        });

        const page = await browser.newPage();
        await page.goto('https://sunpump.meme/home', { waitUntil: 'networkidle0' });

        // 获取渲染后的 HTML 内容
        const htmlContent = await page.content();

        // 保存内容到文件
        fs.writeFileSync('output.html', htmlContent, 'utf8');

        console.log('Scraping completed successfully.'); // 成功消息

        await browser.close();
    } catch (error) {
        console.error('Error during scraping:', error); // 输出错误信息
        process.exit(2); // 退出代码 2 表示脚本失败
    }
})();
