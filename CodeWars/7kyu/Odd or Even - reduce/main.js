function oddOrEven(array) {
  let init = array[0]
  let sum = array.reduce((acc, currentValue) => acc + currentValue,0)
  return (sum%2 == 0) ? "even" : "odd"
}