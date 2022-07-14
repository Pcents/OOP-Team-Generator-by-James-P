const Manager = require("../lib/Manager");
// what is it we are testing
test("Can name via constructor", () => {
  const testValue = "name";
  const e = new Manager("name", 1, "foo", testValue);
  expect(e.name).toBe(testValue);
})

test("Can set id via constructor", () => {
    const testValue = "integer";
    const e = new Manager("Foo", 1, "integer", testValue);
    expect(e.integer).toBe(testValue);
  })

  
test("Can set email via constructor", () => {
    const testValue = "email";
    const e = new Manager("Foo", 1, "email", testValue);
    expect(e.email).toBe(testValue);
  })