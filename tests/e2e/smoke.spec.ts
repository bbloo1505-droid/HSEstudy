import { expect, test } from "@playwright/test";

test("dashboard and curriculum load", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "HSE Launchpad" })).toBeVisible();
  await expect(page.getByText("Topic confidence")).toBeVisible();

  await page.goto("/curriculum");
  await expect(page.getByText("Week 1 lessons")).toBeVisible();
});

test("daily lesson shows quiz section", async ({ page }) => {
  await page.goto("/lesson?id=w1-mon");
  await expect(page.getByText("Ten-question quiz")).toBeVisible();
  await expect(page.getByText("Learning objectives")).toBeVisible();
});

test("scenarios are marked fictional", async ({ page }) => {
  await page.goto("/scenarios");
  await expect(page.getByText(/fictional/i).first()).toBeVisible();
});

test("ask page exposes source and study modes", async ({ page }) => {
  await page.goto("/ask");
  await expect(page.getByRole("button", { name: "Source mode" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Study mode" })).toBeVisible();
});
