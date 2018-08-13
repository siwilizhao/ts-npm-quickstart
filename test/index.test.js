const Utils = require("../index");
describe("lib/index.js", () => {
  it("wait", async () => {
    const utils = new Utils();
    await utils.wait(2000);
    console.log(1);
  });
});
