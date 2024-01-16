import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)

Given('User verifies page title is visible', async function () {
    const element = fixture.page.locator("//h1[@class='entry-title' and text()='Home Page']");

    // Assert that the element count is greater than 0
    const elementCount = await element.count();
    expect(elementCount).toBeGreaterThan(0);
});


Given('User enter the search criteria as {string}', async function (searchValue) {
    await fixture.page.locator("input[placeholder='Enter a Location or Keyword']").type(searchValue);
});

Given('User selects the searched value {string}', async function (searchValue) {
    // Use a template literal to concatenate the searchValue into the locator
    const locatorString = `//div[@class='sidx-suggestions-matches']//span[contains(text(),'${searchValue}')]`;
    await fixture.page.locator(locatorString).click();
});
