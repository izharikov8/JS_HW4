function getPasswordChecker(password) {
  return function(guess) {
    if (guess === password) {
      return true
    }
    else {return false}
  }
}

const checkPass = getPasswordChecker('1q2w3e4r')
const checkPass2 = getPasswordChecker(12345)

//For true
console.log(checkPass('1q2w3e4r'))
console.log(checkPass2(12345))

//For false
console.log(checkPass('1q2w3e'))
console.log(checkPass2(12345656))