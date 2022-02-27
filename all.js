export const everythingFn = arr =>{
    arr.forEach(element => {
       console.log(element*2); 
    });
    console.log(Math.min(...arr));
    console.log(arr.reduce((item, acc)=>item + acc,0));
}