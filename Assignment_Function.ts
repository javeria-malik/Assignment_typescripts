//Question 1
// function addition(){
//     var a:number=1;
//     var b:number=3;
//     var result:number=a+b;
//     console.log(result);
//     return result;
        
// }
// addition()
//Question 2
//Write ts program that’s calculate sum of two numbers 20,30 using function? (Hint: by using parameters)
// function add(a:number,b:number){
//     let result:number=a+b;
//     console.log(result);
//     return result;
        
// }
// add(6,7)
//Write ts program that’s calculate sum of two numbers 20,30 using function? 
//And add 5 number in result after calculation?
// function addition3(a:number,b:number){
//     let result:number=a+b;
//     console.log(result);
//     let updated_result=result+5;
//     console.log(updated_result);
//     return(updated_result)

// }
// addition3(20,30)
function addition(a:number,b:number):number{
    var result:number=a+b;
    console.log(result);
    return result;
}
addition(10,30)
// error 
var additions:number=addition(20,30);
additions+= 5;
console.log(additions);

// function addition(a: number, b: number): number {
//     var result: number = a + b;
//     console.log(result);
//     return result;
// }

// addition(10, 30);

// Issue 1: You are trying to assign the function to the variable "additions"
// which is not correct since the function returns a number.
// You should just call the function and assign its result to the variable.
//var additions: number = addition(20, 30);

// Issue 2: You are assigning the new value to "additions" instead of adding to it.
// Use the "+=" operator to add the value to the existing variable value.
// additions += 5;

// console.log(additions);
//arrow function 
//=> arrow function
//s(90,0);
//c_to_f conversion
// function c_to_f(){
//     var celcius_temp:number=30;
//     var ctof:number=(celcius_temp*9/5)+32;
//     console.log(ctof);
// }
// c_to_f()
//function percentage
//write a program by using function to calculate percentage
function percentage(num:number){
    var total_marks:number=100;
    var percent:number=(num/total_marks)*100;
    console.log(percent.toFixed(3))
}
percentage(49)