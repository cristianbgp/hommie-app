describe("Show tasks", () => {
  beforeEach(async () => {
    await device.launchApp({ newInstance: true });
  });

  it("update the description of a task", async () => {
    await element(by.text("Without description")).tap();
    await expect(element(by.text("Edit a task"))).toBeVisible();
    await expect(element(by.label("title"))).toBeVisible();
    await expect(element(by.label("description"))).toBeVisible();
    await expect(element(by.text("Edit"))).toBeVisible();
    await element(by.text("Edit")).tap();
    await expect(element(by.label("title"))).toBeVisible();
    await expect(element(by.label("description"))).toBeVisible();
    await element(by.id("input-description")).typeText(
      "Now, it has a description"
    );
    await element(by.text("Edit")).tap();
    await expect(element(by.text("Without description"))).toBeVisible();
    await expect(element(by.text("Now, it has a description"))).toBeVisible();
  });
});
