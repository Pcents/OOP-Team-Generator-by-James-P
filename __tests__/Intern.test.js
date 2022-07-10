const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "school";
  const e = new Intern("Foo", 1, "school", testValue);
  expect(e.school).toBe(testValue);
})