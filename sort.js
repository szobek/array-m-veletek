export const sorting =  ()=>{
const arr = ['egy','hatos','eleven','biztosan']
const end = arr.sort(((a,b)=>{
if(a.length>b.length){return -1}
if(a.length<b.length){return 1}
if(a.length===b.length){return 0}
}))
console.log(end);
}