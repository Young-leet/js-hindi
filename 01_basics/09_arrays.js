const mheros = ['thor' , 'spider' , 'cap' , 'kang']
const dheros = ['bat' , 'super' , 'flash' , 'ww']

//mheros.push(dheros)
// pushing an array as an element into another array
// console.log(mheros)
//console.log(mheros[4][3]);


// how abt insterd of pushing an array we concat it at the end of an array
// but to get the output we need a new array which willstore combined output.
// output = mheros.concat(dheros)
// console.log(output);



// one more way to mix these two arrays is spread operator
// ...
// combine = [...mheros , ...dheros]
// console.log(combine);



// flat is used to untangle the array
// const random = [ 'nia' , 'blake' , ['nina' , 'anna' , 'xiyu'] , ['hiachi' , [ 'kaguya' , ['jin'] ] ]  ]

// const nichod = random.flat(Infinity)
// console.log(nichod);



// Array
a = Array.from('Jinny')
console.log(a);

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3));
