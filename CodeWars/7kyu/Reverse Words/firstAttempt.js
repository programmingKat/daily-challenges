function reverseWords(str) {
  // Go for it
  let arr = str.split(" ")
  
  return arr.map(word =>word.split("").reverse().join("")).join(" ")
  
}