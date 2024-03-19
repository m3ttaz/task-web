console.log("<<--------------sol one-------------->");
const arr=[51,5,1,14,100,34,70,66,3,18];
arr.sort((a,b) => a-b)
console.log("the second largest element is " , arr.at(-2));

console.log("<<--------------sol two-------------->");
const arr1=[51,5,1,14,100,34,70,66,3,18];
arr1.sort((a,b) => a-b)
console.log("the largest three elements are " , arr1.at(-3),arr1.at(-2),arr1.at(-1));

console.log("<<--------------sol three-------------->");
const arr2=[51,5,1,14,100,34,70,66,3,18];
arr2.sort((a,b) => a-b)
console.log(arr2[1]);

console.log("<<--------------sol four-------------->");
const arr3=[51,5,1,14,100,34,70,66,3,18];
arr3.sort((a,b) => a-b)
let unique=1;
Boolean(unique=1); 
for(let i=1 ;i<arr3.length; i++){
    if(arr3[i]==arr3[i-1]){
        unique=false;
        break;
    }
}
console.log(unique ? "Yes,unique" : "Not Unique");

console.log("<<--------------sol five-------------->");
const arr4=[1,4,3,6,2,7,8,10,9];
arr4.sort((a,b) => a-b);
let MissingNumber;
for(let i=0 ; i<10 ; i++){
    if(arr4[i]!=i+1){
        MissingNumber=i+1;
        break;
    }
}
console.log("Missing Number is " , MissingNumber);

console.log("<<--------------sol six-------------->");
const arr5=[1,2,3,3,3,5,2,6,6,7,8,8,8,8,9];
arr5.sort((a,b) => a-b);
let len=arr5.at(-1);
const fre=[];
for(let i=0 ; i<=len ; i++)fre[i]=0;
for(let i=0 ; i<arr5.length ; i++)fre[arr5[i]]++;
console.log("the most frequent element is " , fre.indexOf(Math.max(...fre)));

console.log("<<--------------sol seven-------------->");
const arr6=[1,5,3,8,66,215,100,75];
// console.log(arr6.indexOf(3));
const item=66;
const idx=arr6.findIndex((value) => value==item);
(idx!=-1) ? console.log(idx) : console.log("not found");

console.log("<<--------------sol eight-------------->");
const arr7=[1,5,3,8,66,215,100,75];
let sum=0;
for(let i=0 ; i<arr7.length ;i++)sum+=arr7[i];
console.log(sum = ${sum});

console.log("<<--------------sol nine-------------->");
const arr8=[10,20,30,40,50];
Boolean(IsSorted=true);
for(let i=1 ; i<arr8.length ; i++){
    if(arr8[i]<arr8[i-1]){
        IsSorted=false;
        break;
    }
}
console.log(IsSorted ? "Sorted" : "Not sorted");

console.log("<<--------------sol ten-------------->");
const arr9=[1,2,3,3,3,5,2,6,6,7,8,8,8,8,9];
const it=8;
let cnt=0;
for(let i=0 ; i<arr9.length ; i++)if(arr9[i]==it)cnt++;
console.log("number of frequency of 8 =",cnt);

console.log("<---------------sol 11---------------");
for(let i=1 ; i<100 ; i+=2)console.log(i);

console.log("<---------------sol 12---------------");
for(let i=0 ; i<=12 ; i++)console.log(`7 * ${i} = ${7*i}`);

console.log("<---------------sol 13---------------");
console.log("sum of numbers from 1 to 10 =" ,10*(10+1)/2);

console.log("<---------------sol 14---------------");
let fact=1;
for(let i=1 ; i<=10 ; i++)fact*=i;
console.log("10! =" ,fact);

console.log("<---------------sol 15---------------");
let summ=0;
for(let i=10 ; i<=30 ; i+=2)summ+=i;
console.log("the sum of even numbers greater than 10 and less than 30 =" ,summ);

console.log("<---------------sol 16---------------");
let fah=(celsius) => 5.0/9.0 * (celsius + 32.0);
console.log("Celsius to Fahrenheit ",fah(1));

console.log("<---------------sol 17---------------");
let cel=(fahrenheit) =>  (fahrenheit - 32.0) * 5.0 / 9.0;;
console.log("Fahrenheit to Celsius ",cel(1));

console.log("<---------------sol 18---------------");
const arr18=[1,2,34,4,52,65,78,100];
let sumofarr18=0;
for(let i=0 ; i<arr18.length ; i++)sumofarr18+=arr18[i];
console.log("the sum of numbers of array =",sumofarr18);

console.log("<---------------sol 19---------------");
const arr19=[1,2,34,4,52,65,78,100];
let sumofarr19=0;
for(let i=0 ; i<arr19.length ; i++)sumofarr19+=arr19[i];
console.log("the sum of numbers of array =",sumofarr19/arr19.length);

console.log("<---------------sol 20---------------");
const arr20=[1,-2,3,54,-88,-98,10];
const positiveArray=(array) => { 
    const pos=[];
    for(let i=0 ; i<array.length ; i++)if(array[i]>=0)pos.push(array[i]);
    return pos;
}
console.log(positiveArray(arr20));

console.log("<---------------sol 21---------------");
let count=0;
let num=2;
function isprime(x){
    if(x<=1)return false;
    if(x<=3)return true;
    let a=x/2;
    for(let i=2 ; i<a ; i++){
        if(x%i==0)return false;
    }
    return true;

}
while(count<100){
    if(isprime(num)){
        console.log(num);
        count++;
    }
    num++;
}

console.log("<---------------sol 22---------------");
let str="moataz hamdy ali abdelhakeem";
let upperarray=str.split(" ");
            // solution one
// for(let i=0 ; i<upperarray.length ; i++){
//     let firstchar=upperarray[i][0];
//     let x=upperarray[i].slice(1);
//     upperarray[i]=firstchar.toUpperCase() + x;
// }
            // solution two
upperarray.forEach((word , index) => {
    let fstchar = word[0].toUpperCase();
    let subword = word.slice(1);
    upperarray[index]=fstchar + subword;
});
console.log(upperarray.join(' '));

console.log("<---------------sol 23---------------");
let txt="moataz hamdy ali abdelhakeem";
const txtarray=txt.split(" ");
console.log(txtarray);

console.log("<---------------sol 24---------------");
let st="abcdefg";
const ascii=st.split('');
ascii.forEach((letter,index) => {
    let as=letter.charCodeAt();
    ascii[index]=as;
});
console.log(ascii);