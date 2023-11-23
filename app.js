































//* object, array destructing
const personInfo = {
    adi:"John", yas:"33", sehir:"Kayseri"
}

const{sehir,...rest}= personInfo
console.log(sehir);
console.log(rest);

const numbers = [1,2,3,4,5]
// const [bir,iki,uc,dort,bes] = numbers 
// console.log({bir,iki,uc,dort,bes});

const [bir,iki,...kalan] = numbers 
console.log(kalan);