function findNextSquare(sq) {
  let currRoot = Math.sqrt(sq)
  return (Number.isInteger(currRoot)) ? (currRoot+1)**2 : -1 
}