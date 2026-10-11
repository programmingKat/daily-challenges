function createPhoneNumber(numbers){
  let firstThree = numbers.slice(0,3)
  let midThree = numbers.slice(3,6)
  let lastFour = numbers.slice(6,10)

  let phoneNumber = `(${firstThree.join("")}) ${midThree.join("")}-${lastFour.join("")}`
  console.log(phoneNumber)
  return phoneNumber
}