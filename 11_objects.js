// object  ko create krne ke 2 tarekke hote hai
//  1 hai literal ki trh or 1 hai constructor ki trh 
//  jab hum literal ki trhh diclare krte hai to singleton use nahi krte 



// 1)  OBJECT LITTERALS
const mysym = Symbol("key1")

const jsUSer = {
    [mysym]:"key1",
    name :"aman sah",
    "full name":"aman kumar sah",
    age : 20,
    location: "dwarka"
    
    
}
//  ye 2 tarekke hai ek object literal ko access krne ke liye
console.log(jsUSer.age)
// string avalue hai to wo access bhi string me hoga
console.log(jsUSer["name"])
// dot wale se hum string ko acces nahi kr skte 
console.log(jsUSer["full name"])
// how to declare symbol in js
console.log(jsUSer[mysym])

/* object ki value o change kess kr skte hai */
jsUSer.age=34
console.log(jsUSer.age)
/*  agr hum chahte koi changes na kr paye to hum freeze option ka use krte hai 
 */
// Object.freeze(jsUSer)
// ye value print nahi hogi kyunki humne jsuser object ko pehle hi freeze kr dia
jsUSer["full name"]="sexaa"
console.log(jsUSer["full name"])


/* how to use greeting  */
jsUSer.greeting = function(){
    console.log("helllo aman sah")
}
console.log(jsUSer.greeting())
/* agr mujhe object ke ander ki property property access krni hogi */
jsUSer.greetingtwo=function(){
    console.log('hello my name is , '+this.name)
}
console.log(jsUSer.greetingtwo())
// ----------------------------------------------------------------
// 2) OBJECT CONSTRUCTOR
// isme bhi 2 tareeke se object constructor bna skte hai
//  ek object singleton aur ek non singleton 
// const tinederUser = new Object()
// console.log(tinederUser) //ye object singleton hai 

const  tinederUser = {}  // ye object non singleton hai 
/* tinederUser.name=("aman sah")
tinederUser.id= 1234
tinederUser.loggein = false */

const regularuser = {
    email : "aman@gamil.com",
    name:{
        fullname :"aman kumar sah",
        nickname :"raman "
    }
}

console.log(regularuser.email) 
console.log(regularuser.name.fullname);

/* combination of two object */
const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"d",5:"e",6:"f"}
// use asssign to combine two object
console.log(Object.assign(obj1,obj2));
//  use spread operator to combine two object
// jyada tar log spread operator ka use krte hai kyunki ye code ko clean krta hai
console.log({...obj1,...obj2});


/* DATA BASE se value kesse atti hai */
// to arary of object atta hai

const useeer = [
    {id:1,name:"aman sah",age:20},
    {id:2,name:"santosh sah",age:21},
    {id:3,name:"neeraj sah",age:22},
    {id:4,name:"akash sah",age:23},
] 


console.log(useeer[0].age);

/* kissi bhi objecet ke keys aur values acces krne ka tarika like an array */
console.log(Object.keys(jsUSer));
console.log(Object.values(jsUSer));
console.log(Object.entries(jsUSer));


const person = {
    company : "google",
    email : "aman@gmail.com",
    salary :"566000"
    
}
const {salary: insturctor} =person
console.log(insturctor)

//  api kya use value kese lete hai
{
    "name" = "soli",
    "age" = "25",
    "husband"= "amansah"

}







