function swapValues() {
  const args = arguments[0];
  const temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}