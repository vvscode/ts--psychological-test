// eslint-disable-next-line import/no-extraneous-dependencies
import { test, expect, Page } from "@playwright/test";

const getDriver = ({ page }: { page: Page }) => ({
    answerQuestion: async () => {
      await page.click("form label");
      await page.click("form button");
    },
    clickMenu: async (menuTitle: string) => {
      await page.click(`.qa-NavbarLink[title="${menuTitle}"]`);
    },
  });

test("Basic navigation", async ({ page }) => {
  const driver = getDriver({ page });

  await page.goto("/");
  await expect(page).toHaveTitle(/Psychological test/);

  await expect(page.locator("form")).not.toBeVisible();
  driver.clickMenu("Take the test");

  await expect(page).toHaveURL("/takeTest");
  await page.waitForSelector("form");
  await expect(page.locator("form")).toBeVisible();

  driver.clickMenu("About");
  await expect(page).toHaveURL("/");
  await expect(page.locator("form")).not.toBeVisible();
});

test("User can take the test", async ({ page }) => {
  const driver = getDriver({ page });

  await page.goto("/");
  driver.clickMenu("Take the test");

  await page.waitForSelector("form");

  await expect(page.locator('form button[type="submit"]')).toBeVisible();
  await expect(page.locator("form p")).toBeVisible();
  await expect(page.locator("progress")).toHaveAttribute("value", "0");

  await driver.answerQuestion();
  await expect(page.locator("progress")).toHaveAttribute("value", "1");

  await driver.answerQuestion();
  await expect(page.locator("progress")).toHaveAttribute("value", "2");

  await driver.answerQuestion();
  await expect(page.locator("progress")).toHaveAttribute("value", "3");

  await expect(page.locator('p[role="note"]')).not.toBeVisible();
  await driver.answerQuestion();

  await expect(page.locator("form")).not.toBeVisible();
  await expect(page.locator('p[role="note"]')).toBeVisible();
});

test("User can retake the test", async ({ page }) => {
  const driver = getDriver({ page });

  await page.goto("/");
  driver.clickMenu("Take the test");

  await driver.answerQuestion();
  await driver.answerQuestion();
  await driver.answerQuestion();
  await driver.answerQuestion();

  await page.click("text=Retake");

  await page.waitForSelector("form");
  await expect(page.locator('form button[type="submit"]')).toBeVisible();
  await expect(page.locator("form p")).toBeVisible();
  await expect(page.locator("progress")).toHaveAttribute("value", "0");
});
