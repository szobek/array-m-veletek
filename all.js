import { sorting } from "./sort.js";

export const everythingFn = () =>{
    const arr = sorting()
    const end = []
    arr.forEach(element => {
       console.log(`szorozva 2-vel: ${element*2}`); 
       end.push(element*2)
    });
    console.log(`A legkisebb: ${Math.min(...end)}`);
    console.log( `Az összeg: ${end.reduce((item, acc)=>item + acc,0)}`);
}