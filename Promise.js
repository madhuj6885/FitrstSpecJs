let myPromise = new Promise((resolve, reject) =>{
  
let x=10;


   resolve(x);
   reject(x);
});

myPromise.then((res) => {
    return checkData(res);
}).then((res2) => {
    console.log(res2);
    
});

function checkData(res) {
    console.log(res);
    

    setTimeout(() => {
        if(res % 2 ===0) {
            return ("The number is EVEN");
            
        } else { 
            return ("The number is ODD");
            
        }
    }, 2000)

}























// let myPromise = new Promise((resolve, reject) => {

//     let x =8;

// let result = x % 2 ==0 ? "Its an even number " : " Its an odd number";

// resolve(result);
// reject(result);

// });

// myPromise.then(
//     (success) => {
//         console.log(success);
//         display(success);
        
//     }
// )


// function display(str) {
//     setTimeout(() => {
//         console.log(str);
//         (str);
//     },2000)
// }





















// function myfunction(str) {
//     console.log(str

//     );
    
// }




// let promise = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve("I have passed");
//         reject ("I have failed the code");

//     }, 2000)
// });

// promise.then((value) => {
//     myfunction(value);

// })