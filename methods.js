// for loop / loop for
// ex 

// const numbers = [73,43,89,41,35,22]
// for(let i=0; i<numbers.length;i++){
//     console.log(numbers[i])
// }

// my function for each

// const numbers = [73,43,89,41,35,22]
// numbers.forEach(myfunction)
// function myfunction(value,index,array){
//     console.log("forEach",value,index,array)
// }

// sum function
// const sum=(a,b,c,d)=>{
//     console.log(b+c)
//     console.log(a+d)
// }
// sum(7,4,5,3)

// const numbers=[7,4,3,2,5]
// let total=0
// numbers.forEach((value)=>{
//     total+=value
//     console.log('foreachAnonymous fnc',value,total)
// })
// console.log('finaloutput', total)

// const numbers=[7,4,3,2,5]
// let total=0
// numbers.map((value)=>{
//     total+=value
//     console.log('formapAnonymous fnc',value,total)
// })
// console.log('finaloutput', total)

// const numbers=[6,12,15,17,19,21,23,27];
// const over19= numbers.filter(myfunction);
// function myfunction(value){
//     return value>19
// }
// console.log(over19)

// new way writing of above code and remaining codes
// const numbers=[6,12,15,17,19,21,23,27];
// const over19= numbers.filter((value)=>{
//     return value>19;
// })
// console.log(over19)