function solution(str){
  let strArray = str.split("")
  let reversed = strArray.reverse()
  let joinReversed = reversed.join("")
  return joinReversed
}