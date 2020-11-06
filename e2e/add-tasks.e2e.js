describe("Show tasks", () => {
  beforeEach(async () => {
    await device.launchApp({ newInstance: true });
  });

  it("should open new task modal", async () => {
    await element(by.id("plus-icon")).tap();
    await expect(element(by.text("Add a new task"))).toBeVisible();
    await expect(element(by.label("title"))).toBeVisible();
    await expect(element(by.label("description"))).toBeVisible();
  });

  it("should add a new task modal by plus icon button", async () => {
    await element(by.id("plus-icon")).tap();
    await element(by.id("input-title")).typeText("Do a Tech Talk presentation");
    await element(by.id("input-description")).typeText("demo + slides");
    await element(by.id("submit-button")).tap();
    await expect(element(by.text("Do a Tech Talk presentation"))).toBeVisible();
    await expect(element(by.text("demo + slides"))).toBeVisible();
  });

  it("should add a new task modal by swiping modal", async () => {
    await element(by.text("Add a new task")).swipe("up", "slow");
    await element(by.id("input-title")).typeText("Swipe works! 🎉");
    await element(by.id("input-description")).typeText("nice");
    await element(by.id("submit-button")).tap();
    await expect(element(by.text("Swipe works! 🎉"))).toBeVisible();
    await expect(element(by.text("nice"))).toBeVisible();
  });
});
