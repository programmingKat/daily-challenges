function digitalRoot(n) {
  let num = n
  let arr = []
  while(num >= 10){
    num = Array.from(num.toString())
    num = num.reduce((acc, currentValue)=> acc+ Number(currentValue), 0)
  }
  return num
}