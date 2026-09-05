import { chromium } from "playwright";
import path from "path";

const out = "/Users/mac/Documents/portfolio/public/work";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  page.setDefaultTimeout(45000);

  await page.goto("https://www.shopddynamic.com/education/engagement-ring-guide", {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: path.join(out, "02-education.png"),
    type: "png",
  });
  console.log("education ok");

  await page.goto("https://www.shopddynamic.com/best-sellers", {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(2000);
  const productLink = page.locator('a[href^="/products/"]').first();
  await productLink.click();
  await page.waitForURL("**/products/**");
  await page.waitForTimeout(2000);

  const sizeSelect = page.locator("select").first();
  if (await sizeSelect.count()) {
    const value = await sizeSelect.locator("option:not([disabled])").nth(1).getAttribute("value");
    if (value) {
      await sizeSelect.selectOption(value);
      await page.waitForTimeout(400);
    }
  }
  await page.screenshot({
    path: path.join(out, "03-product-size.png"),
    type: "png",
  });
  console.log("product ok", page.url());

  const addBtn = page.getByRole("button", { name: /Add .* to cart/i });
  if (await addBtn.count()) {
    await addBtn.click();
    await page.waitForTimeout(600);
  }

  await page.getByRole("button", { name: "Cart", exact: true }).click();
  await page.waitForTimeout(400);
  await page.getByRole("button", { name: "Checkout" }).click();
  await page.waitForURL("**/checkout");
  await page.waitForTimeout(1500);
  await page.screenshot({
    path: path.join(out, "04-checkout.png"),
    type: "png",
  });
  console.log("checkout ok");

  await browser.close();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
