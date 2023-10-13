import { capitalize, reverseString, calculator } from "./script.js";

test("Is capitalized", () => {
  expect(capitalize("test")).toBe("Test");
});
test("Value is string", () => {
  expect(capitalize(1)).toBe("1");
});

test("Is reversed", () => {
  expect(reverseString("string")).toBe("gnirts");
});
test("Works with numbers", () => {
  expect(reverseString(123)).toBe("321");
});

test("Addition", () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test("Subtraction", () => {
  expect(calculator.subtract(6, 3)).toBe(3);
});
test("Multiplication", () => {
  expect(calculator.multiply(2, 4)).toBe(8);
});
test("Division", () => {
  expect(calculator.divide(9, 3)).toBe(3);
});
