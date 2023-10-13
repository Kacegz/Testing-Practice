function capitalize(string) {
  string = string.toString();
  return string[0].toUpperCase() + string.slice(1);
}
function reverseString(string) {
  string = string.toString();
  return string.split("").reverse().join("");
}

class calculator {
  static add(x, y) {
    return x + y;
  }
  static subtract(x, y) {
    return x - y;
  }
  static multiply(x, y) {
    return x * y;
  }
  static divide(x, y) {
    return x / y;
  }
}

export { capitalize, reverseString, calculator };
