/**
 *  '==' is to check values
 * '===' is to check type of variables
 */

// const isuserloggedin = true

// if(isuserloggedin){

//     console.log('never reaching code')
// }



// const a = 'true'
// const b = 'true'
// if( a===b){
//     console.log('never reaching code')
// }


// const score = 200 
// if( score > 100 ){
//     let power = 'fly'
//     console.log(`user power : ${power}`);
    
// }

// console.log(`user power : ${power}`);



/** short hand notation */

// const bal = 1000
// if(bal < 500){
//     console.log('less then');
    
// }else if(bal < 750){
//     console.log('less then 750');
    
// }else if(bal < 900){
//     console.log('less then 900');
    
// }else {
//     console.log('less then 1200');
    
// }






const userloggedin = true 
const debitcard = true
const loggednfromgoogle = false
const loggednfromemail = true

if( userloggedin && debitcard && 2==2){
 console.log('allow to buy course'); 
}


if(loggednfromgoogle || loggednfromemail ){
    console.log('user logged in');
    
}