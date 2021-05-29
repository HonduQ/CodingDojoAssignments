// 1)
function getNumbers(){
    var arr = [];
    for (i = 1; i < 256; i ++){
        arr.push(i);
    }
    return(arr);
}
console.log(getNumbers());

// 2)
function sumEvens(){
    var sumEvens = 0;
    for (i = 0; i < 1001; i ++){
        if (i % 2 === 0){
            sumEvens = sumEvens + i;
        }
    }
    return(sumEvens);
}
console.log(sumEvens());

// 3)
function sumOdds(){
    var sumOdds = 0;
    for (i = 1; i < 5001; i ++){
        if(i % 2 === 1){
            sumOdds = sumOdds + i;
        }
    }
    return(sumOdds);
}
console.log(sumOdds());

// 4)
function iterateArray(arr){
    let  sum = 0;
    for (let i = 0; i < arr.length; i ++){
        sum += arr[i];
    }
    return(sum);
}
console.log(iterateArray([-5,2,5,12]));

// 5)
function maxValue(arr){
    let max = 0;
    for (let i = 0; i < arr.length; i ++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return(max);
}
console.log(maxValue([-5,2,5,12,27,1,-30]));

// 6)
function returnAverage(arr){
    let avg = 0;
    for (let i = 0; i < arr.length; i ++){
        avg += arr[i];
    }
    avg = avg / arr.length;
    return(avg);
}
console.log(returnAverage([1,3,5,7,20]));

// 7)
function returnOdds(){
    let odds = [];
    for (let  i = 1; i <= 50; i ++){
        if (i % 2 === 1){
            odds.push(i);
        }
    }
    return(odds);
}
console.log(returnOdds());

// 8)
function greaterThanY(arr,y){
    let num = 0;
    for (let i = 0; i < arr.length; i ++){
        if (arr[i] > y){
            num ++;
        }
    }
    return(num);
}
console.log(greaterThanY([-1,2,-3,4,-5],3));

// 9)
function arraySquared(arr){
    for (let i = 0; i < arr.length; i ++){
        arr[i] = arr[i] * arr[i];
    }
    return(arr);
}
console.log(arraySquared([2,4,6,8,-10]));

// 10)
function noNegs(arr){
    for (let i = 0; i < arr.length; i ++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    return(arr);
}
console.log(noNegs([1,5,9,-1,-5,-9,3]));

// 11)
function maxMinAvg(arr){
    let newArr = [0,0,0];
    let sum = 0;
    for (let i = 0; i < arr.length; i ++){
        if (arr[i] > newArr[0]){
            newArr[0] = arr[i];
        }
        else if (arr[i] < newArr[1]){
            newArr[1] = arr[i];
        }
        sum += arr[i];
        newArr[2] = sum / arr.length;
    }
    return(newArr);
}
console.log(maxMinAvg([1,5,10,-2]));

// 12)
function swapValues(arr){
    let temp = arr[0];
    for (let i = 0; i < arr.length; i ++){
        if (i = arr.length-1){
            arr[0] = arr[i];
            arr[i] = temp;
        }
    }
    return(arr);
}
console.log(swapValues([1,5,10,-2]));

// 13)
function numToString(arr){
    let str = "Dojo";
    for (let i = 0; i < arr.length; i ++){
        if (arr[i] < 0){
            arr[i] = str;
        }
    }
    return(arr);
}
console.log(numToString([-1,-3,2]));