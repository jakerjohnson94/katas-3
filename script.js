function makeDiv(content){
    const div = document.createElement('div');
    div.textContent = content;
    document.body.appendChild(div);
}


function printNums(n){
    const arr = Array(n).join().split(',').map(()=>' '+i++, i=1);
    makeDiv(arr);
}

function printEvenNums(n){
    let arr = Array(n).join().split(',').map(()=>' '+i++, i=1).filter( a => a%2 ===0 );
    makeDiv(arr)
}

function printOddNums(n){
    let arr = Array(n).join().split(',').map(()=>' '+i++, i=1).filter( a => a%2 !==0 );
    makeDiv(arr)
}

function printMultsOfFive(n){
    let arr = Array(n).join().split(',').map(()=>' '+i++, i=1).filter( a => a%5 ===0 );
    makeDiv(arr)
}

function printSqr(n){
    const arr = Array(n/10).join().split(',').map(()=>' '+ i*i++, i=1);
    makeDiv(arr);
}


function printNumsReverse(n){
    const arr = Array(n).join().split(',').map(()=>' '+i--, i=n);
    makeDiv(arr);
    
}

function printEvenNumsReverse(n){
    let arr = Array(n).join().split(',').map(()=>' '+i--, i=n).filter( a => a%2 ===0 );
    makeDiv(arr)
}

function printOddNumsReverse(n){
    let arr = Array(n).join().split(',').map(()=>' '+i--, i=n).filter( a => a%2 !==0 );
    makeDiv(arr)
}

function printMultsOfFiveReverse(n){
    let arr = Array(n).join().split(',').map(()=>' '+i--, i=n).filter( a => a%5 ===0 );
    makeDiv(arr)
}

function printSqrReverse(n){
    const arr = Array(n/10).join().split(',').map(()=>' '+ i*i--, i=(n/10));
    makeDiv(arr);
}

function printSum(n){
    const arr = Array(n).join().split(',').map(()=> i++, i=1);
    const sum =  arr.reduce((accumulator, currentValue) => accumulator + currentValue);
    makeDiv(sum);

}

function printArray(arr){
   const result= arr.map(()=> ' '+ arr[i++])
    makeDiv(result);
}

function printArrayEven(arr){
    const result = arr.filter(a => a%2 ===0);
     makeDiv(result);
 }
 function printArrayOdd(arr){
    const result = arr.filter(a => a%2!==0);
     makeDiv(result);
 }
function printArraySqr(arr){
    const result = arr.map((n)=>' '+ Math.pow(arr[i++],2), i=0)
    makeDiv(result);
}
function printSumArray(arr){
    const cont = sampleArray.reduce((a, b) => a + b);
    makeDiv(cont);
}
function arraySmallest(arr){
    const min = Math.min(...arr);
    makeDiv(min);
}
function arrayLargest(arr){
    const max = Math.max(...arr);
    makeDiv(max);
}