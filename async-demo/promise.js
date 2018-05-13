// const p = new Promise((resolve, reject) => {     //kick off some async work
// ... database/fetch     setTimeout(() => {         // resolve(1); reject(new
// Error("oh error Message"));     }, 2000); }) p.then(data => {
// console.log(data); }).catch(err => {     console.log(err.message); })

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async operation 1...");
        resolve(1);
        // reject(new Error("Something went worng"));
    }, 2000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async operation 2...");
        resolve(2);
    }, 2000);
})

// Promise     .all([p1, p2])     .then(res => console.log(res))
// .catch(error => console.error(error.message))
Promise
    .race([p1, p2])
    .then(res => console.log(res))
    .catch(error => console.error(error.message))