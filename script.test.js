import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./script.js";

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
  expect(calculator.add(1, 32)).toBe(33);
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

test("Caesar", () => {
  expect(caesarCipher("Testz.", 1)).toBe("Uftua/");
});

const object = analyzeArray([1, 8, 3, 4, 2, 6]);
test("Analized array returns an object", () => {
  expect(typeof object).toBe("object");
});
test("Analized array returns valid data", () => {
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
