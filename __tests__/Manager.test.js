const Manager = require("../lib/Manager");
// what is it we are testing
test("Can set office number via constructor", () => {
  const testValue = "email";
  const e = new Manager("Foo", 1, "integer", testValue);
  expect(e.integer).toBe(testValue);
})