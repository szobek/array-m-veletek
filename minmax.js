export const minmax = (arr,bool) =>{
    let r = ""
    if(bool){
        r = Math.max(...arr)
    } else if(!bool){
        
        r = Math.min(...arr)
    }
    console.log(r);
}