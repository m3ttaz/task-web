for(let i=0 ; i<upperarray.length ; i++){
    let firstchar=upperarray[i][0];
    let x=upperarray[i].slice(1);
    upperarray[i]=firstchar.toUpperCase() + x;
}