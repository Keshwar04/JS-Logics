//Find largest & smallest number in array

let arr = [4,62,,8,33,63,9]
let largestNum = arr[0];
let smallestNum = arr[0]
for(let x of arr){
    if(x > largestNum){
        largestNum = x
    }

    if(x < smallestNum){
        smallestNum = x
    }
} 
console.log(largestNum,smallestNum);