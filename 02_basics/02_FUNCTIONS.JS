
// function saymname(){
// console.log('y');
// console.log('o');
// console.log('o');
// console.log('m');
// console.log('j');
// console.log('i');


// }


// saymname()

function addnum(x,y){
    return x+y
}

function loginusermsg(username = 'kevin'){

    /*** we can check if username is undefined or not by doing
     *  either :  if( username === undefined )
     * 
     * or :   if( !username )
     * 
     * both conditions will be true if variable is undefined 
 
    */


    // if(username === undefined){
    //     console.log('please enter a user name');
    //     return ''
    // }



    if(!username){
        console.log('please enter a user name');
        return ''
    }
    return `${username} just logged in `
}

// console.log( loginusermsg() )




/*** to passing multiple values into a function
 * without givimg many variables as parameter in a function
 * WE USE REST OPERATOR i.e : ...
 * 
 * function chain( ...pearl){
 * return pearl 
 * }
 * 
 * chain( ruby , hazal , jublie , mair )
 * 
 * the ... allows parameter to take multiple values into one variable/parameter 
 * that parameter becomes an array
 * 
 * pearl will have values : [ 'ruby' , 'hazal' , 'jublie' , 'mair' ]
 * 
 * 
 */

function calculatecatprice(...num1){
    return num1
}

console.log(calculatecatprice(200 , 300 , 6700));


/** num1 will act as array now with whatever values passed into it */

const user = {
    username : 'jinny' ,
    price : 199
}

// we can pass ny object in this function

function handleobj(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
    
}

// // pass object name into function
// handleobj(user)

// // pass an object directly 
// handleobj({
//     username : 'esfand' ,
//     price : 599
// })



arr = [77,12,15,56]

function returnsecondval( getarr ){
 
    return  getarr[1]
}

console.log(returnsecondval(arr));


