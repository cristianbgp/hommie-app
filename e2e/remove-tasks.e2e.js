describe("Show tasks", () => {
  beforeEach(async () => {
    await device.launchApp({ newInstance: true });

    // Add a new task that will be removed
    await element(by.id("plus-icon")).tap();
    await element(by.id("input-title")).typeText("Remove this task later");
    await element(by.id("input-description")).typeText("and also this description");
    await element(by.id("submit-button")).tap();
  });

  it("should delete a task", async () => {
    await element(by.text("Remove this task later")).tap();
    await expect(element(by.text("Edit a task"))).toBeVisible();
    await expect(element(by.label("title"))).toBeVisible();
    await expect(element(by.label("description"))).toBeVisible();
    await expect(element(by.text("Delete"))).toBeVisible();
    await element(by.text("Delete")).tap();
    await expect(element(by.text("Remove this task later"))).not.toBeVisible();
  });
});
