const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    try {
        const browser = await puppeteer.launch({
            headless: true, // 设置为 true 表示无头浏览器
            args: ['--no-sandbox', '--disable-setuid-sandbox'] // 添加这两行参数以避免环境问题
        });

        const page = await browser.newPage();
        await page.goto('https://sunpump.meme/home', { waitUntil: 'networkidle0' });

        // 获取渲染后的 HTML 内容
        const htmlContent = await page.content();

        // 保存内容到文件
        fs.writeFileSync('output.html', htmlContent, 'utf8');

        console.log('Scraping completed successfully.');
        await browser.close();
    } catch (error) {
        console.error('Error during scraping:', error.message); // 打印错误信息
        console.error(error.stack); // 打印错误栈以辅助调试
        process.exit(2); // 退出代码 2 表示脚本失败
    }
})();
