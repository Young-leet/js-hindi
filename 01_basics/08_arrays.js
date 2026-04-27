
// const mray1 = [0,1,2,3,4,5,true,"nitin"] ;
// console.log(mray1);

// // arrays do the shallow copy means arrays share same memory refrence

// const dis = ['iu' , 'dahye' , 'jinjin' , 'pak']
// console.log(dis[3]);


let myray = []
myray.push(77)
myray.push(23)
myray.push(244)
myray.push(466)

// console.log(myray);

// console.log(myray.includes(31))
// console.log(myray.indexOf(244))


const myray1 = myray.join()
console.log(myray1)
console.log(typeof myray1)

// myray.unshift(8);
// console.log(myray);
// myray.shift()
// console.log(myray);

/** slice vs splice */


// // in slice the original array does not change
// let mynew =  myray.slice(1,4)
// console.log(mynew)
// console.log('original array : ',myray)

// // in splice the orginal array does change
// let mnew = myray.splice(1,2)
// console.log('part transfered to new array : ',mnew)
// console.log('remaining  original array : ',myray)


let p = [130,198,208,108,216,344]
console.log('org array : ', p)

p1 = p.slice(0,3)
console.log('new generated arr from p : ', p1)
console.log('org is still the same : ',p);

p1 = p.splice(2,4)
console.log('part new array got : ' , p1);
console.log('part left with org arr :',p);



