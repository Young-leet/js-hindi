 // dates are calculated in ms
// tc39 consortium javascript defines api

// let d = new Date()
// console.log(d.toString())
// console.log('----------------------------------');

// console.log(d.toDateString())
// console.log(d.toTimeString());
// console.log(d.toLocaleDateString());
// console.log(d.toISOString());
// console.log(d.toLocaleTimeString());


// let mynewd = new Date(2024,1,26 , 5 ,3)
// console.log(mynewd.toString())

let cdate = new Date('2023-01-14')
console.log(cdate.toLocaleDateString())

let newd = new Date()
console.log(newd);

/***
 * 0 : january
 * 1 : february
 */

console.log(newd.getMonth())

/** 0 : sunday 
 * 1 : monday 
 * 2: tuesday ..soon
 */
console.log(newd.getDay())

console.log(newd.getDate())

newd.toLocaleString('default' , { 
    weekday : "long",
    
})












console.log();
