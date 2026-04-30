const myobj = {
    js : 'javascript',
    cpp : 'c++',
    xb : 'ruby' ,
    sw : 'swift by apple'
}

// for (const key in myobj) {

// console.log(myobj[key]);

// }


// cart = ['js' , 'rb' , 'java' , 'cpp']

// for (const key in cart) {
//     console.log(cart[key]);
    
// }




const map = new Map()
map.set('in','India')
map.set('us','united states of america')
map.set('ch','china')


for (const [key,value] in map) {
    console.log(key , ':-' , value);   
}


/** objects are not iterable using forof loop
 *  we iterate over objects using forin loop
*/

// const obj = {
//     'game' : 'nfs',
//     'game2' : 'spiderman'
// }

// for (const key in obj) {
//     console.log(`${key} frpm obj corresponds to ${obj[key]}`)
// }



// for (const [key , value ] in obj){
 
//     console.log('iterated obj using for in',obj[key] , ':-' , obj[value]);
    

// }
    

// for(const [g,n] of obj) {

//         console.log(g , ':-' , n);  

prog = ['vsync' , 'mmid' , 'cpp' , 'js' , 'vim']

for( const k in prog){

console.log(prog[k]);

}


