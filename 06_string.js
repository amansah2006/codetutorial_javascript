/* const name ="aman sah"
const repocount= 4

// here we use concatination

console.log(name + repocount + "value")
console.log(` hell̥o my name is ${name } and my repo count is ${repocount}`) */
const gameName = new String('aman sah')
console.log(gameName)
console.log(gameName.length )
console.log(gameName.trimStart())
console.log(gameName.trimEnd())
console.log(gameName.toUpperCase() )
// substring me hum negative vaue use nahi kr skte
// substring functionn me string ki index dalke hum uske elenent count krwa skte hai 
// (0.4) tak me 0-3 tak ke elemt print honge 4 nahi hoga 
const newstring = gameName.substring(0,4)
console.log(newstring)
// slice me  hum negative valuw use krte hai
const anotherstring = gameName.slice(-5,4)
console.log(anotherstring)