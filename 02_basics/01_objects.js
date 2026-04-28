/* 
we can access field of obj through dot ( . ) but it is not the only option
we can also use square braackers to access same properties  ['NAME_OF_FEILD'] 

to access a function for an object we create the function
say we have object ob , we want to put a greet function to it 
we can do so by ,

                ob.greet = function(){
                console.log('hello')
                }

    later we can access this function using ,

    ob.greet()

    if we only print value of ob.greet it will return ,

    function['Anonymous']


 */


   
    



    /**
     * 
     * 
     */


    const tinderuser = new Object()

     tinderuser.id = '123abc'
     tinderuser.name = 'sammy'
     tinderuser.islogged = false



     /** creating objects inside an object or 
      * nesting in objects
      */

    const regularuser = {
        email : 'some@gmail.com',

        fullname : {
            
            userfullname : {
                    fname : 'anya' ,
                    mname : 'taylor',
                    lname : 'joy'
            
            }
       }



    } 


  //  console.log(regularuser.fullname.userfullname.fname);
    

  /** we merge two different objects too */

  const obj1 = { 
    1 : 'a' , 2 : 'b'
  }

  const obj2 = {
    3 : 'c' , 4 : 'd'
  }

const obj3 = {
    5 : 'e' , 6 : 'f'
  }
  


/** multiple ways to merge two or three objects 
 * #1 : just write the objects name in container object
 * #2 : use Object.assign() method
 * #3 : use spread ... operator 
 */

// const obj3 = { obj1 , obj2 }

// const obj4 = Object.assign({},obj1 , obj2 , obj3)

// const obj4 = { ...obj1 , ...obj2 , ...obj3}


 // console.log(obj4);
  

/** Array containing multiple objects */

 const users = [
    {
        id : 1 ,
        email : 'h@gmail.com' ,

    } ,  {
        id : 2 ,
        email : 'h@gmail.com' ,

    } ,  {
        id : 3 ,
        email : 'h@gmail.com' ,

    } , 
    {
        id : 4 ,
        email : 'h@gmail.com' ,

    } ,  {
        id : 5 ,
        email : 'h@gmail.com' ,

    } , 
 ]

 users[1].email
 console.log(tinderuser);
 

 /** access keys  and values of object using
     * object.keyS(OBJECT-NAME)
     * object.values(OBJECT-NAME)
     */

//  console.log(Object.keys(tinderuser));
//  console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));


// console.log(tinderuser.hasOwnProperty('islogged'));

/** what is de-structuring */

const course = {
   coursename : 'js in hindi' ,
   price : '999' ,
   courseinstructor : 'hitesh' 
}

// we always use dot to access : course.courseinstructor

// this new way to access object field is de-structring
// {FEILD-NAME , VARIABLE-NAME } = OBJECT-NAME

const {courseinstructor : ins } = course
console.log(ins);

/*** what is API :  application proggraming interface */




// {
//     name : "jinny",
//     work : "streamer",
//     followers : "1 million"
// }


[
    {} ,
    {}
]




