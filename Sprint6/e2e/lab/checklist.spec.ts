import {test, expect} from '@playwright/test';

test('checklist button toggles and partent counter increments', async ({page}) => {
    await page.goto('/');
    const checkbox = await page.getByTestId('checkbox-1'); // I'm pretty sure there's no test id set for checkboxes (like the class)
    const counter = await page.locator('text = Check box: 0')

    // initial state
    await expect(checkbox).not.toBeChecked();
    await expect(counter).toBeVisible();

    // click the checkbox
    await checkbox.click();

    // expected state after click
    await expect(checkbox).toBeChecked();
    await expect(counter).toHaveText('Check box: 1');
});