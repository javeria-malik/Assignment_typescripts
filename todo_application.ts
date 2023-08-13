//sunday class 13 august 2023
//splice is use to dd remove at same time 
let todos:string[]=["class attend","snacks","Sleep","lunch","dinner"];
// todos.splice(1,2,"breakfast");
// console.log(todos);
// todos.splice(1,0,"breakfast");
// console.log(todos);
// todos.splice(1,1,"breakfast");
//  console.log(todos);
// method use to round of to lower side is Math.floor
// if (todos.length%2==0){
//     console.log("the length before remove is ",todos.length);
//     console.log("before remove and add",todos);
//     todos.splice(Math.floor(todos.length/2),1 ,"break");
//     console.log("after remove ",todos)
// }
// else if (todos.length%2!=0){
//     console.log("the length before remove is ",todos.length);
//     console.log("before remove and add",todos);
//     todos.splice(Math.floor(todos.length/2),2,"break");
//     console.log("after remove ",todos);
// }
//only removing method Math.round use to round off the value
if (todos.length%2==0){
    console.log("the length before remove is ",todos.length);
    console.log("before remove and add",todos);
    todos.splice(Math.round(todos.length/2),1);
    console.log("after remove ",todos)
}
else if (todos.length%2!=0){
    console.log("the length before remove is ",todos.length);
    console.log("before remove and add",todos);
    todos.splice(Math.round(todos.length/2),2);
    console.log("after remove ",todos);
}