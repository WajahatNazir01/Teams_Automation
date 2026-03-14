const { chromium } = require('playwright');

(async () => {

    const browser = await chromium.launch({ 
        headless: false, 
        slowMo: 100,
        args: [
            '--use-fake-ui-for-media-stream',
            '--use-fake-device-for-media-stream',
        ]
    });

    const context = await browser.newContext({
        storageState: 'teamsSession.json',
        permissions: ['camera', 'microphone'],
    });

    const page = await context.newPage();

    await page.goto(
        "https://teams.microsoft.com/l/channel/19%3A6ZlZtN2z7EFjFQEYUz0Ry4rEWOq7q70RWX9uvJiQI_k1%40thread.tacv2/General?groupId=60d4c650-0dde-4b4d-82b6-1bd156c3e609&tenantId=75df096c-8b72-48e4-9b91-cbf79d87ee3a",
        { waitUntil: 'domcontentloaded' }
    );

    console.log("Page loaded, waiting for Teams to initialise...");
    await page.waitForTimeout(8000);

    // dissmissing continue on browser popup but cant due because that is an os action
    try {
        const continueBtn = page.locator(
            'button:has-text("Continue on this browser"), button:has-text("Use the web app instead")'
        );
        if (await continueBtn.count() > 0) {
            await continueBtn.first().click();
            console.log("Dismissed 'Continue on browser' prompt");
            await page.waitForTimeout(3000);
        }
    } catch (e) {}

    console.log("Waiting for Join button...");

    try {

        const joinBtn = await page.waitForSelector(
            [
                'button:has-text("Join")',
                '[data-tid="prejoin-join-button"]',
                '[aria-label*="Join"]',
                'button[class*="join"]',
            ].join(', '),
            { timeout: 600000 }
        );

        await joinBtn.scrollIntoViewIfNeeded();
        await page.waitForTimeout(1000);
        await joinBtn.click();
        console.log("Join clicked");

        //handling audio vidoe logic
        try {
            const noAvBtn = await page.waitForSelector(
                [
                    'button:has-text("Continue without audio or video")',
                    'button:has-text("Continue without audio")',
                    'button:has-text("Continue without")',
                ].join(', '),
                { timeout: 5000 }  
                       );
            await noAvBtn.click();
            console.log("Dismissed audio/video permission dialog");
            await page.waitForTimeout(3000);
        } catch (e) {
            console.log("No audio/video dialog appeared — continuing normally");
        }
        //staying in lobby for 2 seconds
        await page.waitForTimeout(4000);

        //camera mute
        const tryToggle = async (labels) => {
            for (const label of labels) {
                try {
                    const el = page.locator(`[aria-label="${label}"]`).first();
                    if (await el.count() > 0) {
                        await el.click();
                        console.log(`Toggled: ${label}`);
                        return true;
                    }
                } catch (e) {}
            }
            return false;
        };

        await tryToggle(['Camera', 'Turn camera off', 'Stop video', 'Video']);
        await page.waitForTimeout(500);
        await tryToggle(['Microphone', 'Mute microphone', 'Mute', 'Audio']);
        await page.waitForTimeout(500);

        // join now 
        const joinNow = await page.waitForSelector(
            [
                'button:has-text("Join now")',
                '[data-tid="prejoin-join-button"]',
                'button:has-text("Join meeting")',
            ].join(', '),
            { timeout: 30000 }
        );

        await joinNow.click();
        console.log("Successfully joined meeting!");

        //rejoin
        const rejoinInterval = setInterval(async () => {
            try {
                // Also handle the audio/video dialog if it reappears on rejoin
                const noAv = page.locator('button:has-text("Continue without audio or video")');
                if (await noAv.count() > 0) {
                    await noAv.first().click();
                    console.log("Dismissed audio/video dialog during rejoin");
                    await page.waitForTimeout(2000);
                }

                const rejoin = page.locator(
                    'button:has-text("Rejoin"), button:has-text("Retry")'
                );
                if (await rejoin.count() > 0) {
                    console.log("Rejoining meeting...");
                    await rejoin.first().click();
                    await page.waitForTimeout(3000);

                    //handles rejoin if some participant kicks you out
                    try {
                        const noAvAgain = await page.waitForSelector(
                            'button:has-text("Continue without audio or video")',
                            { timeout: 5000 }
                        );
                        await noAvAgain.click();
                        await page.waitForTimeout(2000);
                    } catch (e) {}

                    const joinAgain = await page.waitForSelector(
                        'button:has-text("Join now"), [data-tid="prejoin-join-button"]',
                        { timeout: 15000 }
                    );
                    await joinAgain.click();
                    console.log("Rejoined successfully");
                }
            } catch (e) {}
        }, 30000);

        await page.waitForTimeout(80 * 60 * 1000);
        clearInterval(rejoinInterval);

    } catch (err) {
        console.log("Error:", err.message);
        await page.screenshot({ path: 'debug-screenshot.png', fullPage: true });
        console.log("Screenshot saved to debug-screenshot.png");
    }

    console.log("Meeting completed. Closing browser...");
    await browser.close();

})();