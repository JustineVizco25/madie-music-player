const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('button', { name: 'Play', exact: true })).toBeVisible();
});

test('starts paused with a song title, cover, and explicit design credit', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Madie Music Player' })).toBeAttached();
    await expect(page.locator('#music-info-container')).toHaveText('Alej - Ballads at Sunset');
    await expect(page.locator('footer')).toContainText('UI design by Madie');
    expect(await page.evaluate(() => audio.paused)).toBe(true);
    await expect(page.locator('#pause-button')).toHaveAttribute('src', /s_play_button.png$/);
});

test('plays real audio, advances time, and pauses', async ({ page }) => {
    await page.getByRole('button', { name: 'Play', exact: true }).click();
    await expect(page.getByRole('button', { name: 'Pause', exact: true })).toBeVisible();
    await expect.poll(() => page.evaluate(() => audio.currentTime)).toBeGreaterThan(0);
    await expect(page.locator('#pause-button')).toHaveAttribute('src', /s_pause_button.png$/);
    await page.getByRole('button', { name: 'Pause', exact: true }).click();
    expect(await page.evaluate(() => audio.paused)).toBe(true);
    await expect(page.getByRole('button', { name: 'Play', exact: true })).toBeVisible();
});

test('wraps in both directions and preserves the paused state', async ({ page }) => {
    await page.getByRole('button', { name: 'Previous song' }).click();
    await expect(page.locator('#music-info-container')).toHaveText('Alej - Dreaming of the Stars');
    await expect(page.locator('body')).toHaveAttribute('data-season', 'winter');
    await page.getByRole('button', { name: 'Next song' }).click();
    await expect(page.locator('#music-info-container')).toHaveText('Alej - Ballads at Sunset');
    expect(await page.evaluate(() => audio.paused)).toBe(true);
});

test('changes tracks during playback without stopping the playlist', async ({ page }) => {
    await page.getByRole('button', { name: 'Play', exact: true }).click();
    await expect.poll(() => page.evaluate(() => audio.currentTime)).toBeGreaterThan(0);
    await page.getByRole('button', { name: 'Next song' }).click();
    await expect(page.locator('#music-info-container')).toHaveText('Alej - Just Give Me One More Day');
    await expect.poll(() => page.evaluate(() => !audio.paused && audio.currentTime > 0)).toBe(true);
});

test('automatically advances after a song ends, including the last song', async ({ page }) => {
    await page.getByRole('button', { name: 'Play', exact: true }).click();
    await expect.poll(() => page.evaluate(() => Number.isFinite(audio.duration))).toBe(true);
    await page.evaluate(() => { audio.currentTime = audio.duration - 0.1; });
    await expect(page.locator('#music-info-container')).toHaveText('Alej - Just Give Me One More Day');
    await page.getByRole('button', { name: 'Menu', exact: true }).click();
    await page.locator('#playlist button').last().click();
    await expect.poll(() => page.evaluate(() => Number.isFinite(audio.duration))).toBe(true);
    await page.evaluate(() => { audio.currentTime = audio.duration - 0.1; });
    await expect(page.locator('#music-info-container')).toHaveText('Alej - Ballads at Sunset');
    await expect.poll(() => page.evaluate(() => !audio.paused)).toBe(true);
});

test('supports keyboard playback, menu selection, Escape, and focus return', async ({ page }) => {
    const previous = page.getByRole('button', { name: 'Previous song' });
    await page.keyboard.press('Tab');
    await expect(previous).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.locator('body')).toHaveAttribute('data-season', 'winter');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.locator('#playlist button[aria-current="true"]')).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).not.toBeVisible();
    await expect(page.getByRole('button', { name: 'Menu', exact: true })).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByRole('button', { name: 'Play', exact: true })).toBeFocused();
    await page.keyboard.press('Space');
    await expect.poll(() => page.evaluate(() => !audio.paused)).toBe(true);
});

test('selects a song from Menu and marks only that song as current', async ({ page }) => {
    await page.getByRole('button', { name: 'Menu', exact: true }).click();
    await expect(page.locator('#playlist button')).toHaveCount(14);
    await page.locator('#playlist button').nth(3).click();
    await expect(page.getByRole('dialog')).not.toBeVisible();
    await expect(page.locator('body')).toHaveAttribute('data-season', 'autumn');
    await expect(page.locator('#music-info-container')).toHaveText('Nowt - Day Dream');
    await expect(page.locator('#playlist [aria-current="true"]')).toHaveCount(1);
    expect(await page.evaluate(() => audio.paused)).toBe(true);
});

test('offers recovery when the browser blocks playback', async ({ page }) => {
    await page.evaluate(() => {
        audio.play = () => Promise.reject(new DOMException('Blocked', 'NotAllowedError'));
    });
    await page.getByRole('button', { name: 'Play', exact: true }).click();
    await expect(page.locator('#playback-status')).toContainText('blocked by your browser');
    await expect(page.getByRole('button', { name: 'Play', exact: true })).toBeVisible();
    await page.evaluate(() => { delete audio.play; });
    await page.getByRole('button', { name: 'Play', exact: true }).click();
    await expect.poll(() => page.evaluate(() => audio.currentTime)).toBeGreaterThan(0);
    await expect(page.locator('#playback-status')).toBeEmpty();
});

test('explains a missing audio file and recovers on the next track', async ({ page }) => {
    await page.route('**/songs/*Golden*', route => route.fulfill({ status: 404, body: '' }));
    await page.getByRole('button', { name: 'Next song' }).click();
    await page.getByRole('button', { name: 'Next song' }).click();
    await expect(page.locator('#playback-status')).toContainText('could not be loaded');
    await expect(page.getByRole('button', { name: 'Play', exact: true })).toBeVisible();
    await page.getByRole('button', { name: 'Next song' }).click();
    await expect(page.locator('#playback-status')).toBeEmpty();
    await page.getByRole('button', { name: 'Play', exact: true }).click();
    await expect.poll(() => page.evaluate(() => audio.currentTime)).toBeGreaterThan(0);
});

test('retries the same track after a temporary missing-file error', async ({ page }) => {
    await page.route('**/songs/*Golden*', route => route.fulfill({ status: 404, body: '' }));
    await page.getByRole('button', { name: 'Next song' }).click();
    await page.getByRole('button', { name: 'Next song' }).click();
    await expect(page.locator('#playback-status')).toContainText('could not be loaded');
    await page.unroute('**/songs/*Golden*');
    await page.getByRole('button', { name: 'Play', exact: true }).click();
    await expect.poll(() => page.evaluate(() => audio.currentTime)).toBeGreaterThan(0);
    await expect(page.locator('#music-info-container')).toHaveText('Jvke - Golden Hour');
    await expect(page.locator('#playback-status')).toBeEmpty();
});

test('ignores a rejected play request from a previous track', async ({ page }) => {
    await page.evaluate(() => {
        window.firstRequest = true;
        audio.play = function () {
            if (window.firstRequest) {
                window.firstRequest = false;
                return new Promise((resolve, reject) => { window.rejectOldPlay = reject; });
            }
            return HTMLMediaElement.prototype.play.call(this);
        };
    });
    await page.getByRole('button', { name: 'Play', exact: true }).click();
    await page.getByRole('button', { name: 'Next song' }).click();
    await expect.poll(() => page.evaluate(() => audio.currentTime)).toBeGreaterThan(0);
    await page.evaluate(() => window.rejectOldPlay(new DOMException('Interrupted', 'AbortError')));
    await expect(page.getByRole('button', { name: 'Pause', exact: true })).toBeVisible();
    await expect(page.locator('#playback-status')).toBeEmpty();
});

test('cancels a pending play request without showing an obsolete error', async ({ page }) => {
    await page.evaluate(() => {
        audio.play = () => new Promise((resolve, reject) => { window.rejectPendingPlay = reject; });
    });
    await page.getByRole('button', { name: 'Play', exact: true }).click();
    await page.getByRole('button', { name: 'Pause', exact: true }).click();
    await page.evaluate(() => window.rejectPendingPlay(new DOMException('Interrupted', 'AbortError')));
    await expect(page.getByRole('button', { name: 'Play', exact: true })).toBeVisible();
    await expect(page.locator('#playback-status')).toBeEmpty();
});

test('every track decodes and loads its matching artwork and seasonal controls', async ({ page, request }) => {
    test.setTimeout(60000);
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const assetPaths = await page.evaluate(() => [...new Set(songs.flatMap(song =>
        Object.values(song).filter(value => typeof value === 'string' && value.startsWith('./'))
    ))]);
    for (const assetPath of assetPaths) {
        const response = await request.head(assetPath);
        expect(response.ok(), assetPath).toBe(true);
    }
    for (let index = 0; index < 14; index++) {
        await expect.poll(() => page.evaluate(() => Number.isFinite(audio.duration) && audio.duration > 0)).toBe(true);
        const art = await page.evaluate(async () => {
            const images = [...document.querySelectorAll('#music-player img')];
            await Promise.all(images.map(image => image.decode()));
            return images.every(image => image.naturalWidth > 0);
        });
        expect(art).toBe(true);
        const expectedSeason = await page.evaluate(() => songs[currentSongIndex].season);
        await expect(page.locator('body')).toHaveAttribute('data-season', expectedSeason);
        await page.getByRole('button', { name: 'Next song' }).click();
    }
    expect(errors).toEqual([]);
});

const viewports = [
    { width: 280, height: 653 },
    { width: 320, height: 568 },
    { width: 375, height: 667 },
    { width: 480, height: 320 },
    { width: 568, height: 320 },
    { width: 667, height: 375 },
    { width: 844, height: 390 },
    { width: 768, height: 1024 },
    { width: 1024, height: 768 },
    { width: 1280, height: 720 },
    { width: 1440, height: 900 },
];

for (const viewport of viewports) {
    for (const blockFont of [false, true]) {
        const fontDescription = blockFont ? 'fallback fonts' : 'the design font';
        test(`keeps every song usable at ${viewport.width}x${viewport.height} with ${fontDescription}`, async ({ page }) => {
            if (blockFont) {
                await page.route('https://fonts.googleapis.com/**', route => route.abort());
                await page.reload();
            }
            await page.setViewportSize(viewport);
            await page.evaluate(() => document.fonts.ready);
            for (let index = 0; index < 14; index++) {
                const bounds = await page.evaluate(() => {
                    const rect = selector => document.querySelector(selector).getBoundingClientRect();
                    const title = rect('#music-info-container');
                    const cover = rect('#music-cover-container');
                    const controls = rect('#controls-container');
                    const intersects = (a, b) => a.left < b.right - 0.5 && a.right > b.left + 0.5
                        && a.top < b.bottom - 0.5 && a.bottom > b.top + 0.5;
                    const targets = ['#music-player', '#music-info-container', '#music-cover-container', '#controls-container', '#previous-control-top', '#next-control-top', '#play-pause-control', '#menu-control-bottom'];
                    return {
                        overflow: document.documentElement.scrollWidth > innerWidth,
                        verticalOverflow: document.documentElement.scrollHeight > innerHeight,
                        overlaps: intersects(title, cover) || intersects(title, controls) || intersects(cover, controls),
                        fits: targets.every(selector => {
                            const target = rect(selector);
                            return target.left >= -0.5 && target.right <= innerWidth + 0.5
                                && target.top >= -0.5 && target.bottom <= innerHeight + 0.5;
                        }),
                        touchTargets: [...document.querySelectorAll('#controls-container button')].every(button => {
                            const target = button.getBoundingClientRect();
                            return target.width >= 44 && target.height >= 44;
                        }),
                    };
                });
                expect(bounds, `Song ${index + 1}`).toEqual({ overflow: false, verticalOverflow: false, overlaps: false, fits: true, touchTargets: true });
                await page.getByRole('button', { name: 'Next song' }).click();
            }
            await page.getByRole('button', { name: 'Menu', exact: true }).click();
            await expect(page.getByRole('dialog')).toBeInViewport();
            await page.getByRole('button', { name: 'Close song menu' }).click();
        });
    }
}
