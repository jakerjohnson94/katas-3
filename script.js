const n1 = 20;
const n2=100;
const sampleArr = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
console.log(`sample array is ${sampleArr}`)


function makeDiv(content){
    const div = document.createElement('div');
    div.textContent = content;
   document.body.appendChild(div);
}
function makeH1(content){
    const h1 = document.createElement('h1');
    h1.textContent = content;
   document.body.appendChild(h1);
}


function printNums(n){
    makeH1(`print numbers 1-${n1}`)
    const arr = Array(n).join().split(',').map(()=>' '+i++, i=1);
    makeDiv(arr);
}

function printEvenNums(n){
    makeH1(`print even numbers 1-${n1}`)
    let arr = Array(n).join().split(',').map(()=>' '+i++, i=1).filter( a => a%2 ===0 );
    makeDiv(arr);
}

function printOddNums(n){
    makeH1(`print odd numbers 1-${n1}`)
    let arr = Array(n).join().split(',').map(()=>' '+i++, i=1).filter( a => a%2 !==0 );
    makeDiv(arr);
}

function printMultsOfFive(n){
    makeH1(`print multiples of five 1-${n1}`)
    let arr = Array(n).join().split(',').map(()=>' '+i++, i=1).filter( a => a%5 ===0 );
    makeDiv(arr);
}

function printSqr(n){
    makeH1(`print square numbers 1-${n2}`)
    const arr = Array(n/10).join().split(',').map(()=>' '+ i*i++, i=1);
    makeDiv(arr);
}


function printNumsReverse(n){
    makeH1(`print numbers 1-${n1} in reverse`)
    const arr = Array(n).join().split(',').map(()=>' '+i--, i=n);
    makeDiv(arr);
    
}

function printEvenNumsReverse(n){
    makeH1(`print even numbers 1-${n1} in reverse`)
    let arr = Array(n).join().split(',').map(()=>' '+i--, i=n).filter( a => a%2 ===0 );
    makeDiv(arr);
}

function printOddNumsReverse(n){
    makeH1(`print odd numbers 1-${n1} in reverse`)
    let arr = Array(n).join().split(',').map(()=>' '+i--, i=n).filter( a => a%2 !==0 );
    makeDiv(arr);
}

function printMultsOfFiveReverse(n){
    makeH1(`print multiples of five 1-${n1} in reverse`)
    let arr = Array(n).join().split(',').map(()=>' '+i--, i=n).filter( a => a%5 ===0 );
    makeDiv(arr);
}

function printSqrReverse(n){
    makeH1(`print square numbers 1-${n2} in reverse`);
    const arr = Array(n/10).join().split(',').map(()=>' '+ i*i--, i=(n/10));
    makeDiv(arr);
}

function printSum(n){
    makeH1(`print sum of the numbers 1-${n1} `);
    const arr = Array(n).join().split(',').map(()=> i++, i=1);
    const sum =  arr.reduce((accumulator, currentValue) => accumulator + currentValue);
    makeDiv(sum);

}

function printArray(arr){
    makeH1(`print numbers of the given array`);
   const result= arr.map(()=> ' '+ arr[i++]);
    makeDiv(result);
}

function printArrayEven(arr){
    makeH1(`print even numbers of the given array`);
    const result = arr.filter(a => a%2 ===0);
     makeDiv(result);
 }
 function printArrayOdd(arr){
    makeH1(`print odd numbers of the given array`);
    const result = arr.filter(a => a%2!==0);
     makeDiv(result);
 }
function printArraySqr(arr){
    makeH1(`print square numbers of the given array`);
    const result = arr.map((n)=>' '+ Math.pow(arr[i++],2), i=0)
    makeDiv(result);
}
function printSumArray(arr){
    makeH1(`print the sum of the given array`);
    const cont = arr.reduce((a, b) => a + b);
  
    makeDiv(cont);
}
function printArraySmallest(arr){
    makeH1(`print the smallest number of the given array`)
    const min = Math.min(...arr);
    makeDiv(min);
}
function printArrayLargest(arr){
    makeH1(`print the largest number of the given array`)
    const max = Math.max(...arr);
    makeDiv(max);
}

function runKatas(){
 
    printNums(n1);
    printEvenNums(n1);
    printOddNums(n1);
    printMultsOfFive(n1)
    printSqr(n2)
    printNumsReverse(n1);
    printEvenNumsReverse(n1);
    printOddNumsReverse(n1);
    printMultsOfFiveReverse(n1);
    printSqrReverse(n2);
    printArray(sampleArr);
    printArrayEven(sampleArr);
    printArrayOdd(sampleArr);
    printArraySqr(sampleArr);
    printSum(n1);
    printSumArray(sampleArr);
    printArraySmallest(sampleArr);
    printArrayLargest(sampleArr);


}