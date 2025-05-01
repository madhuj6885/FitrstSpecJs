// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let isAuthenticated= false;
//         resolve(isAuthenticated);
//     })
// }).then((status) => {
//     let isAuthenticated = !status;
//     return isAuthenticated;
// }).then((status) => {
//     console.log(status);
    
// })

let myPromise = new Promise((resolve, reject) => {
    resolve(10);
}).then()