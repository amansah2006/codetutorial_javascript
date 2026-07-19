/*  java script me array primitive nahi hote wo 
  object hote hai 
  .....>>>>> they following some characterstic
               1)resizable and contain mixed data typed
               2)java array are not associative (inme array ko arbitary string index 
               se access nahi kiya jata )
               3)the first element of array are at index 0 and second at 1 
               4) javascript me hum array copy shallow or deep copy ka use krke krte hai
               (shallow copy)--->> isme agr array ke copy me change kiya 
                            to original array me bhi change hoga
                (deep copy)----->>            
                            
                            */



const myarr = [0,1,2,9,4,5]

// // console.log(myarr[3])

// // Array Methods
// // myarr.push(11)
// // console.log(myarr)

// myarr.unshift(-1)
// console.log(myarr)
// myarr.shift()
// console.log(myarr)

const newarr = myarr.join()
// jooin array ke sare element ko ek string me convert kr deta hai
console.log(myarr)
console.log(newarr)


// slice and splice in array

const myn1 = myarr.slice(1,4)
console.log(myn1)
console.log('a',myarr)

const myn2 = myarr.splice(1,3)
console.log(myn1)
console.log('b',myarr)


