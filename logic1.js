//Find largest & smallest word in string

let str = 'Hi my name is karthik'
let arr = str.split(' ')
let wordAndLength = []
for (let x of arr) {
    wordAndLength.push({ word: x, length: x.length })
}

let sorted = wordAndLength.sort((a,b) => a.length - b.length)
const longestWord = sorted[sorted.length-1].word;
const smallestWord = sorted[0].word
console.log(longestWord,smallestWord);