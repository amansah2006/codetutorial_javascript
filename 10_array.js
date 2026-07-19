// let family = ["aman" , "akash" , "neeraj" , "santosh"]
// let dost =["aryan","sumit" , "dhruv" , "divyansh"]
// family.push(dost)
// console.log(family)

// const newfamily =family.concat(dost)
// console.log(newfamily)

// iss dot dot ka use krke hum array ko individualy print jkkr skte hai
// concatination ka use kr skte hai but is mathoda ka use krke hum further 
//     aur elemnt add kr skte hai 
// const new_family =[...family , ...dost]
// console.log(new_family)              


/*  > agr hume array me array ka situation diya hai 
         to isko hum solve kr skte hai by using flat function 
            aur hum kitni depth tak jana hai  wo bhi dekh skte hai 
               like example */
// const array1= [1.2,3,[4,5,6],[7,8,9,[10,11,12,13]]]
// const arr2 = array1.flat(Infinity)
// console.log(arr2)


/* new method to conver anything into array */
console.log(Array.isArray("amansah"))
console.log(Array.from("aman"))
console.log(Array.from({name:"aman"}))

let a = 20
let b =56
let c= 67
// by using of we convert normal value into array
console.log(Array.of(a,b,c))


