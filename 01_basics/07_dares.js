let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let cdate = new Date(2023 , 0 , 23)
// console.log(cdate.toDateString());


// let ndate = new Date(2023 , 0 , 23 , 5 , 3)
// console.log(ndate.toLocaleString());



 let fdate = new Date("01-14-2023")
// console.log(fdate.toLocaleString());


// let myTimeStamp = Date.now()

// console.log(myTimeStamp);

// console.log(fdate.getTime());


// console.log(Math.floor(Date.now()/1000));


let newdate = new Date()

console.log(newdate);

console.log(newdate.getMonth()+1);

console.log(newdate.getDay());

newdate.toLocaleString('default',{

    weekday : 'long'
    
})