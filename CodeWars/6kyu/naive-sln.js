function spinWords(string){
  //convert string to array of strings
   const stringArr = string.split(" ")
  
  for (i = 0; i < stringArr.length; i++){
    if (stringArr[i].length >= 5){
      stringArr[i] = stringArr[i].split("").reverse().join("")
    }
  }
  console.log(stringArr, stringArr.join(" "))
 return stringArr.join(" ")
}