const Manager = require("../lib/Manager");
// what is it we are testing
test("Can set office number via constructor", () => {
  const testValue = 1;
  const e = new Manager("Foo", 1, "email@email.com", testValue);
  expect(e.officeNumber).toBe(testValue);
})