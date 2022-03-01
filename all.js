import { sorting } from "./sort.js";

export const everythingFn = () =>{
    const arr = sorting()
    arr.forEach(element => {
       console.log(`szorozva 2-vel: ${element*2}`); 
    });
    console.log(`A legkisebb: ${Math.min(...arr)}`);
    console.log( `Az összeg: ${arr.reduce((item, acc)=>item + acc,0)}`);
}