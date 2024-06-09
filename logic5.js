//count max number of consecutive 1s

let str = '11a111'
let count = 0;
let arr = []
for(let x of str){
    if(x==1){
        count = count +1
    }else if(x!==1){
        count = 0
    }
}

console.log(count);
