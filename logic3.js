// Palindrom or not

let str = 'madam'
let reverse = str.split('').reverse().join('')
const isPalindrome = str === reverse ? true : false
console.log(isPalindrome);