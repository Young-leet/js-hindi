// es6 came in 2015 and made some significant changes in js
const user = {
username : 'nitin',
price : '999',
welcomemsg : function(){
    // this can access current context fields of object
console.log(`${this.username} , welcome to website`);

console.log(this);
            
    }
}


// user.welcomemsg()

// console.log(this);
/***
 *   this in global scope returns empty {} 
 */

// in a function this does not perform the same wway as in an object
// function chai(){
//     let username = 'nitin'
//     console.log(this.username);
    
// }
// chai()

// const chai = ()=>{
//     let username = 'nitin'
//    console.log(this);
    
// }
// chai()


// implicit return
const giga = (n1,n2)=> (n1+n2) 
console.log(giga(80,20));



// explicit return
const res = (n1,n2)=>{
 return (n1+n2) 
} 
console.log(res(80,20));



const marr = [3,6,5,2]

marr.forEach(  )
