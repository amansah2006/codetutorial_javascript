// global scope - isko hum har jagah ascess kar skte hai 
// local scop - isko humai sirf ussi function ke ander acess karna padega jisme wo declare hua tha ya initialise hua tha 

// declare of global scope
/* const globalcar ="farari";
console.log(globalcar); */

// declaration of local scope ye function mai declare hota hai 

/* function mycar(){
    const localcar = "toyota";
    console.log(localcar);
    console.log(globalcar); //hum global scope ko function ke ander bhi access kar skte hai
}
mycar(); */
// console.log(localcar);

// nasted cunation in local acope
// example 1
/* function car(){
    const localcar_Quality = "top tier";
    function car_version(){
        const localcar_version = "2029";
        console.log(localcar_Quality); 
        console.log(localcar_version);
    } 
    // car_version();
}
// car();
car_version(car_version); // ye error dega kyuki ye function car ke ander hai aur hum isko bahar se access karne ki kosis kar rahe hai
 */ 
// example 2

   /*  function car_details(){
        if(true){
    const ownername = "Aman sah";
    const puchaseslip_number = "9971419630";
    if(puchaseslip_number === "9971419630"){
        console.log(ownername);
        const ownersurname = "sah";
        const carname = "farari";
        const numberplate = "DL 73 2006";
        console.log(carname);
        console.log(numberplate);
        
    }
}
    } car_details();
// console.log(owwnername); */





