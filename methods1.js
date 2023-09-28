// indexOf() method
// ఒక string లో ఉన్నటువంటి element position value ను  తెలుసుకోవడానికి Indexof() ను ఉపయోగిస్తాం.
// let text=" Ap govt implemented GPS instead of cps for all govt employes"
// let index = text.indexOf("GPS")
// console.log(index)

// ఒక string లో ఉన్నటువంటి లాస్ట్ element position value ను  తెలుసుకోవడానికి lastIndexof() ను ఉపయోగిస్తాం.
// let text=" Ap govt implemented GPS instead of cps for all govt employes"
// let index = text.lastIndexOf("govt")
// console.log(index)


// let name="narasimha"
// console.log(name[2])

// let allNames=["himansh","harsha","hythesh","hawie"]
// console.log(allNames[0][2]) here 0 is the first name 2 is the character in first element.
// console.log(allNames[2])
// if we want to change an element in string then follow this method. 
// allNames[2]="humayun"
// console.log(allNames)
// ఒక array లో element ను last లో  add చేయడానికి push ను ఉపయోగిస్తాం.
// allNames.push("sudeep")
// console.log(allNames)
// allNames.push("raja",'ramani')
// console.log(allNames)

// ఒక array లో last లో ఉన్న element ను delete చేయడానికి pop ను ఉపయోగిస్తాం.
// let allNames=["himansh","harsha","hythesh","hawie"]
// allNames.pop()
// console.log(allNames)
// allNames.pop()
// console.log(allNames)
// allNames=[]
// console.log(allNames)

// let allNames=[]
// allNames.push("ramesh",'suresh','ramani','rukku')
// console.log(allNames)

// ఒక array లో element ను first లో  add చేయడానికి unshift ను ఉపయోగిస్తాం.
// let allNames=["raja","rajini","rukku","sonu"]
// allNames.unshift("simham")
// console.log(allNames)

// ఒక array లో first element ను delete చేయడానికి shift ను ఉపయోగిస్తాం.
// let allNames=["himansh","harsha","hythesh","hawie"]
// allNames.shift()
// console.log(allNames)

// " Ap govt implemented GPS instead of cps for all govt employes" this called string.
// ["himansh","harsha","hythesh","hawie"] this is called array.

// ఒక array length తెలియనపుడు అందులో చివరన ఉన్న element ను తెలుసుకోవడానికి క్రింది method ను ఉపయోగిస్తాం.

// let allNames=["himansh","harsha","hythesh","hawie","raja","rajini","rukku","sonu"]
// console.log(allNames[allNames.length-3])

// let x=7
// x=x+2
// console.log(x)


// let x=7
// x+=2
// console.log(x)

// let x=6
// let y=8

// console.log(x==y)

// compare చేసినపుడు == ను వాడుతాం.

// let x=6
// let y="6"

// console.log(x==y)
// console.log(x===y)
// ==(double ఈక్వల్స్ to) కేవలం data ను check చేస్తుంది. 
// === (triple ఈక్వల్స్ to ) data type ను కూడా ckeck చేస్తుంది.
// !=  (not equals to)

// console.log(7>=7)
// console.log(8<9)

// let time= 21
// if(time<12){
//     console.log("good morning")
// }
// else if(time<17){
//     console.log("good afternoon")
// }else if(time<20){
//     console.log("good evening")
// }else{
//     console.log("good night")
// }

// var name0 = "nani"
// date=29
// if(date>27){
//     name0='narsimha'
//     console.log("1.var",name0)
// }
// console.log("2.var",name0)

// let name1='sujatha'
// year="2022"
// if(year<2023){
//     name1='suchithra'
//     console.log("3.let",name1)
// }console.log("4.let",name1)

// const fruits= 'mango'
// trees="37"
// if(trees>32){
//     fruits='banana'
//     console.log("5.const",fruits)
// }console.log("6.const",fruits)




// 



var name0 = "nani"
if(true){
    var name0='narsimha'
    console.log("1.var",name0)
}
console.log("2.var",name0)

let name1='sujatha'
if(true){
   let name1='suchithra'
    console.log("3.let",name1)
}console.log("4.let",name1)

const fruits= 'mango'
if(true){
   const fruits='banana'
    console.log("5.const",fruits)
}console.log("6.const",fruits)



// let email="luckynarasimha64@gamil.com"
// let length_of_email=email.length
// let f_5_ltrs=email.slice(0,5)
// let stars=f_5_ltrs.padStart(15,'*').concat(f_5_ltrs)
// console.log(stars)
