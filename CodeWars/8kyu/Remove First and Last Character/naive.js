function removeChar(str){
  if(str.length<=2){
    return ''
  }else{
    let chopped = str.substring(1,str.length-1)
    return chopped
  }
};
