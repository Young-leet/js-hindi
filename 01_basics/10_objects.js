// singleton
const jsuser = {
    name : 'nitin',
    age : 18,
    location : 'langkawii',
    email : 'nitin@kapar.com',
    isloggedin : false ,
    lastlogindays : ['wed','fri']

}


 // console.log(jsuser.email);
// we accesss properties of object tusing square brackets .        console.log(jsuser['email']);

/**------------------------------------------------------------------------------------- 
 * to prevent an object from rewriting its data 
 * we use Object.freeze()
 *------------------------------------------------------------------------------------*/

// console.log('before :' , jsuser);

// //Object.freeze(jsuser)

// jsuser.name = 'keko'
// jsuser.age = 34

// console.log('after :', jsuser);


/** done ----------------------------------------------- */

jsuser.greeting = function(){
    console.log('hello user')
}

jsuser.greeting1 = function(){
    console.log(`heelo again, ${this.name}`)
}

console.log(jsuser.greeting)
console.log(jsuser.greeting1);
log