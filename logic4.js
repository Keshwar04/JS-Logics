//reversen a string without usin built-in method

const str = 'Chennai'
console.log(str.length);

let reverse = ''
for (let i = str.length-1; i >= 0; i--) {
    reverse = reverse + str[i]
}

console.log(reverse);