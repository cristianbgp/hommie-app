describe("Home Screen", () => {
  beforeEach(async () => {
    await device.launchApp({ newInstance: true });
  });

  it("should see main screen", async () => {
    await expect(element(by.text("Hommie"))).toBeVisible();
    await expect(element(by.id("hommie-icon"))).toBeVisible();
    await expect(element(by.id("plus-icon"))).toBeVisible();
    await expect(element(by.id("theme-icon"))).toBeVisible();
  });
});
