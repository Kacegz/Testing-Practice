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

function analyzeArray(array) {
  let sum = 0;
  let min = Number.MAX_VALUE;
  let max = 0;
  let length = array.length;
  array.forEach((element) => {
    sum = sum + element;
    if (min > element) {
      min = element;
    }
    if (max < element) {
      max = element;
    }
  });
  let average = sum / length;
  return { average, min, max, length };
}

export { capitalize, reverseString, calculator, analyzeArray };
