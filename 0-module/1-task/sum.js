function sum(a, b) {
  if (!(typeof a === "number" && typeof b === "number")) {
    throw new TypeError("Не верный тип данных")
  }
  return a + b
}

module.exports = sum;
