import {expect, test} from "@playwright/test";

test.describe("Group Testing",() => {
    test.beforeEach(async ({page}) => {
    await page.goto("https://www.demoblaze.com/index.html");


    });
    test("Verify title and url",async ({page}) => {
    await expect(page.locator("//a[@id='nava']")).toBeVisible();
    await expect(page.locator("#login2")).toBeVisible();
    await expect(page.locator("#login2")).toBeEnabled();
    await page.locator("#login2").click();
    await page.waitForTimeout(2000);
})


test('Login', async ({page}) => {
    await page.locator("#login2").click();
    await page.fill("#loginusername", "madhu");
    await page.fill("#loginpassword","madhu@123");
    await page.click("//button[text()='Log in']");
    await page.waitForTimeout(5000);
})

   

    
    
    



})

// async > makes the function to return a promise
// await >  wait for the promise