function isIsogram(str){
  str =str.toLowerCase()
  let current = ' '
  //two letters are the same
  for( let i = 0; i<str.length; i++){
    if(!current.includes(str.at(i))){
      current += str.at(i)
    }
    else{
      return false
    }
  }
  return true
}