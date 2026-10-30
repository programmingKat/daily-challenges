function countBits(n) {
    n = n.toString(2) 
    let arr = Array.from(n).map(Number).reduce((acc, currVal)=> acc + currVal, 0)
 return arr;
}