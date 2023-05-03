import puppeteer from "puppeteer";
import { fork } from 'child_process';

describe('input tests', () => {
    let browser;
    let page;
  
    beforeEach(async() => {
        const server = fork(`${__dirname}/server.js`);
        await new Promise((resolve, reject) => {
            server.on('error', reject);
            server.on('message', (message) => {
            if (message === 'ok') {
                resolve();
            }
            })
        });
        browser = await puppeteer.launch();
        page = await browser.newPage();
    })

    it('Should be valid CC input', async() => {
        await page.goto('http://localhost:8080', {
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
        await page.goto('http://localhost:8080', {
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
        server.kill();
    })   

})