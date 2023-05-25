// function operation(a,b){
//     let c=a+b;
//     return c
// }
// console.log(operation(10,30))


// function operation1(a,b)
// {
//     let c=a/b;
//     return c
// }
// console.log(operation1(50,2))

// above method is function declaration

/*function operation(a,b,demo){
    let c=demo(a,b);
    return c
}
let result=operation(10,20,function(a,b)
{
    return a*b
})
console.log(result)
let result1=operation(20,30,function(a,b)
{
    return a+b
})
console.log(result1)
let result2=operation(90,200,function(a,b)
{
    return a-b
})
console.log(result2)*/


var a=Number(prompt("enter a value"))
var b=Number(prompt("enetr b value"))
function operation(a,b,task){
    let c= task(a,b);
    return c
}
let res=operation(a,b,function(a,b)
{
    return a+b
})
console.log(res)
let res1=operation(a,b,function(a,b)
{
    return a*b
})
console.log(res1)
