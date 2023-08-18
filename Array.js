"use strict";
// function modified<T>(arr:T[],index:number,value:T):T[]{
//     if(index<0 || index>arr.length){
//         console.log("index out of range");
//         return arr
//     }
//     arr.splice(index,0,value);
//     return arr;
// }
// let modefiied_array = modified(["jiya","ahmed","arooj","98"],1,"bisma");
// console.log(modefiied_array);
// //problem 2
// let todos:string[]=["class attend","snacks","Sleep","lunch","dinner"];
// if (todos.length%2==0){
//     console.log("the length before remove is ",todos.length);
//     console.log("before remove and add",todos);
//     todos.splice(Math.round(todos.length/2),1);
//     console.log("after remove ",todos)
// }
// else if (todos.length%2!=0){
//     console.log("the length before remove is ",todos.length);
//     console.log("before remove and add",todos);
//     todos.splice(Math.round(todos.length/2),2);
//     console.log("after remove ",todos);
// }
//problem 3;
// function shopany(add:any,index:number,value:any):any{
//     if(index<0 || index>add.length){
//         console.log("index out of range");
//         return add
//     }
//     console.log("add an item");
//     let arr1=[...add];
//     arr1.splice(index,0,value);
//     console.log(arr1);
//     console.log("remove item");
//     let arr2=[...add];
//     arr2.splice(index,2);
//     console.log(arr2);
//     return add
// }
// let update=shopany([1,2,3,4,6,8],1,"jm");
// console.log(update)
// function shopany(add: any[], index: number, value: any): any[] {
//     if (index < 0 || index > add.length) {
//         console.log("index out of range");
//         return add;
//     }
//     console.log("add an item");
//     let arr1 = [...add]; // Create a copy of the array
//     arr1.splice(index, 0, value);
//     //console.log(arr1);
//     console.log("remove item");
//     let arr2 = [...add]; // Create another copy of the array
//     arr2.splice(index, 1); // Remove 1 element at the specified index
//     //console.log(arr2);
//     return [arr1,arr2]; // Returning the original array
// }
//he first 25 integers.
// let number=1;
// while(number<26){
//     console.log(number);
//     number+=1
// }
// Write a program that uses a while loop to print the first 10 even numbers.
// let number1:number=2;
// while(number1<22){
//     console.log(number1);
//     number1+=2
// }
//Create a function that takes a positive integer as parameter and
// uses a while loop to calculate and return the factorial of that number.
// let number3=6;
// let i=1;
// let factorial=1;
// while(i<=number3){
//     //console.log(factorial)
//     factorial*=i
//     i++
// }
// console.log(factorial)
//Write a program having an array of numbers
// if the number is negative it should remove the negative number from the array.
// let arr:number[]=[1,2,3,6,8,-6,8,9];
// let i=(arr.length)-1;//it will give its index now
// while(i>=0 || i<arr.length){
//     if(i<0){
//         arr.splice(i,1);
//     }
//     i--;    
// }
// console.log(arr)
function arrsum(arr) {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}
let arr = [1, 2, 3, 4, 5];
console.log(arrsum(arr));
//Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array.
//Use a while loop to perform the conversion for each temperature.
