// eslint-disable-next-line import/no-extraneous-dependencies
import { test, expect } from "@playwright/test";

test("Basic navigation", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Psychological test/);
});
