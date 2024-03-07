// find , findLast , filter , map
const fun1=(len)  =>{
    const arr=[];
    for(let i=0;i<len;i++){
        let n=Math.floor(Math.random()*100000000)+10000000;
        arr.push("010"+n);
    }
    return arr;
}
console.log(fun1(50));
