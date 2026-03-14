const { chromium } = require('playwright');

(async () => {
    // Launch a fresh browser context
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();

    const page = await context.newPage();

    // Open Teams channel
    await page.goto(
        'https://teams.microsoft.com/l/channel/19%3A6ZlZtN2z7EFjFQEYUz0Ry4rEWOq7q70RWX9uvJiQI_k1%40thread.tacv2/General?groupId=60d4c650-0dde-4b4d-82b6-1bd156c3e609&tenantId=75df096c-8b72-48e4-9b91-cbf79d87ee3a',
        { waitUntil: 'networkidle' }
    );

    console.log('Login to Teams manually if needed...');

    // Wait for the Teams main UI to appear (after manual login)
    await page.waitForSelector('div[role="navigation"]', { timeout: 0 });

    console.log('Login detected. Saving session...');
    await context.storageState({ path: 'teamsSession.json' });
    console.log('Session saved to teamsSession.json');

    // Wait 1 minute after login
    await page.waitForTimeout(60 * 1000);

    // Stay in meeting for 80 minutes
    console.log('Staying in meeting for 80 minutes...');
    await page.waitForTimeout(80 * 60 * 1000);

    console.log('Meeting time done. Closing browser...');
    await browser.close();
})();
