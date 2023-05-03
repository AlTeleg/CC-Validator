import puppeteer from "puppeteer";

describe('input tests', () => {
    let browser;
    let page;
  
    beforeEach(async() => {
        browser = await puppeteer.launch({
            ignoreHTTPSErrors: true,
            headless: 'new',
            devtools: false,
        });

        page = await browser.newPage();
    })

    it('Should be valid CC input', async() => {
        await page.goto('http://localhost:9000', {
            waitUntil: 'networkidle0',
        });
        await page.waitForSelector('.widjet-form');

        const widjetForm = await page.$('.widjet-form');
        const input = await widjetForm.$('.cc-input');
        const submit = await widjetForm.$('.validate-btn');
        
        await input.type('5378138968878158');
        await submit.click();
        await page.waitForSelector('.widjet-form .cc-input.valid');
    })

    it('Should be invalid CC input', async() => {
        await page.goto('http://localhost:9000', {
            waitUntil: 'networkidle0',
        });
        await page.waitForSelector('.widjet-form');

        const widjetForm = await page.$('.widjet-form');
        const input = await widjetForm.$('.cc-input');
        const submit = await widjetForm.$('.validate-btn');
        
        await input.type('5378138968878159');
        await submit.click();
        await page.waitForSelector('.widjet-form .cc-input.invalid');
    })

    afterEach(async() => {
        await browser.close();
    })
    
}) 