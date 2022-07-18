const Employee = require("../lib/Employee");
// what is it we are testing
test("Can name via constructor", () => {
  const testValue = "name";
  const e = new Employee("name", 1, "email@email.com");
  expect(e.name).toBe(testValue);
})

test("Can set id via constructor", () => {
    const testValue = 1;
    const e = new Employee("Foo", 1,  "email@email.com");
    expect(e.id).toBe(testValue);
  })

  
test("Can set email via constructor", () => {
    const testValue = "email@email.com";
    const e = new Employee("Foo", 1, "email@email.com");
    expect(e.email).toBe(testValue);
  })