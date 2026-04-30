/** reduce method */

// const arr = [1,2,3,4,5]

// const total = arr.reduce( (accu , cval) => accu+cval , 0 )

// console.log(total)


// 0=1=2=3=4=5

/** accumulator , currentvalue 
 * we declare intital value of accumulator 
 */


// const intialsubs = 0 

// const subsperhour = [2,5,10,20,20,20,50,100,20,20,100,60,50,50]

// const jinnydailysub = subsperhour.reduce( function ( acc , curval) {
//     console.log(`acc : ${acc} curval : ${curval}`);
    
//     return acc+curval
// }, intialsubs)


// console.log(jinnydailysub)




const shoppingcart = [
    {
           itemName : 'razor',
           price : 1499
    }, {
           itemName : 'lighter',
           price : 499
    }, {
           itemName : 'shoes',
           price : 4999
    }, {
           itemName : 'belt',
           price : 799
    }, {
           itemName : 'cap',
           price : 599
    }, {
           itemName : 'bag',
           price : 1299
    },
]


const totalprice = shoppingcart.reduce(( acc , item) => acc + item.price , 0 )
console.log(totalprice);
