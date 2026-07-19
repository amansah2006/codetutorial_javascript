const user = {
    username : "santosh sah",
    price : 120000,
    welcomemessage : function(){  //idhr humne welcoem ko ek function bana diya hai
        // jo apna username hai wo agge jake change bhi ho skta hai is wgh se hum "this" ka use krenge
        console.log(`${this.username} , welcome to webpage`);
        // basically this keyword jis object me humne liye h ai uss object ko refer karta hai 
        
        // ab agr mai sirf this print krwaunga to kya print hoga 
        console.log(this)  //is keyword ko print krwane se sara print ho jaega 


    }


}
// console.log(user.welcomemessage());
// user.username = "aman sah";
// user.price = 1500000;
// user.welcomemessage();
// console.log(user);

// agr hum this ko function ke ander return krwa ke dekhe to kya ho sakta hai 
/* function myfunction(){
    const username = "aman sah jiiiii"
    console.log(this);  //thsi keyword sirf object ke ander kaam karta hai agr hum isse function ker ander return kare to ye global object ko reffer karega 
    console.log(this.username);
}
myfunction();  */

// ab hum arrow fufnction le andre this keyword ka use krege aur dekhnge kya hoga 
/* const user1 = () => {
    let username = "santosh sah"
    console.log(this);  //ye bhi global object ko refer karega

}
user1() */
// lets deep dive into arrow function 
/* const add = (nums1 , nums2)=>{
    return nums1 + nums2 ;
    
}  ye to ho gaya basic arrow function or explicit arrow function hua jisme humiye {} braces lagna pada aur isse hum return ka use krenege */

// ab dekhte hai implicit return of arrow function or implicit me hum return aur {} braces ka use nahi kregne 
const add = (nums1 , nums2)=>  (nums1 + nums2) 
console.log(add(10,20));
