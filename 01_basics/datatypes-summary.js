// primitive datatype

// 7 categories 

/* 

String
number
boolean
null
undefined
symbol
Bigint


*/


// refrence type (refrence )

/*
array 
objects
browser events
functions
*/ 


const score = false

const scoreValue = 100.3


const scoreBool = false


const scoreNull = null


const scoredef = undefined

let userEmail ;


// 888888888888888888888888888888888888888888888888888888888888888888

const id = Symbol( '123' )
const anotherId = Symbol('123')

console.log(id === anotherId )


//********************************************************************* */

const bignum = 1234123412134121412133412131412134n



//arrays

const heros = ['shaktiman' , 'nagraaj','jj']

// objext

let myobj = {
    name : 'Nitin',
    age : 44 ,


}

const myf = function(){
    console.log('classic hellow')
}


// console.log(typeof bignum)
// console.log(typeof scoreNull)
// console.log(typeof id)
// console.log(typeof anotherId)




//*************************MEMORY************************************ */


//***********************stack (primitive)****************************** */

let myutubename = 'ksmrWorld'

let anothername =  myutubename

anothername = 'jinnyadmirer'



console.log(myutubename)


console.log(anothername)


let user = {
    email : 'user@gmail.com' ,
    upi : 'user@sbi'
}



let user1 = user 


console.log(user)

user1.email = 'user1@gamil.com'


console.log(user)
