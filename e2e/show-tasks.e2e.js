describe("Show tasks", () => {
  beforeEach(async () => {
    await device.launchApp({ newInstance: true });
  });

  it("should show see the list of tasks", async () => {
    await expect(element(by.text("First Title"))).toBeVisible();
    await expect(element(by.text("First description"))).toBeVisible();
    await expect(element(by.text("Another title"))).toBeVisible();
    await expect(element(by.text("Second description"))).toBeVisible();
    await expect(element(by.text("Without description"))).toBeVisible();
    await expect(element(by.text("Yet, another one"))).toBeVisible();
    await expect(
      element(
        by.text(
          "Really long description with a lot of characters and more words than any other task"
        )
      )
    ).toBeVisible();
  });

  it("should marked as completed after tap", async () => {
    await expect(element(by.id("check-icon-task-1"))).not.toBeVisible();
    await element(by.id("circle-icon-task-1")).tap();
    await expect(element(by.id("check-icon-task-1"))).toBeVisible();
  });
});
