//1. define var
var names='rayhan';
var age=25;
var isMarried=true;
// console.log(typeof names);
// console.log(typeof age);
// console.log(typeof isMarried);

// ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো। 

var num1= 34;
var num2 = 45;

const totalNum= num1+num2;
// console.log(totalNum);

const numbersDifference=Math.abs(num1-num2);
// console.log(numbersDifference);

const multiplication=num1 * num2;
// console.log(multiplication);

const divisible= num2/num1;
// console.log(divisible)

const reminder= 11  % 3;
// console.log(reminder);

// ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 

var number1=5;
var number2=7;
if(number1<number2){
    // console.log(true)
}
if(number1>number2){
    // console.log(false)
}
if(number1== number2){
    //  console.log(false)
}
if(number1 !=number2){
    // console.log(true)
}
if(number1 <= number2){
    // console.log(false)
}
if(number1>=number2){
    // console.log(true)
}

// ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 

var isGratuates=true;
var income= 25000;
if(isGratuates== true && income==50000){
    console.log(' biye kora jay')
}
else{
    // console.log('kopale biye nai')
}

// another one
if(isGratuates==true || income>30000){
    // console.log('permission granted')
}
else{
    // console.log('not allowed')
}

// ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো

var money =10;
var chocolatePrice=30;
var icecreamePrice=50;
var biscuitPrice=20;
if(chocolatePrice< money){
    console.log('chocolate khabo')

}
else if(icecreamePrice< money){
    console.log('icecream khabo')
}
else if(biscuitPrice < money){
    console.log('biscuit kinbo')
}
else{
    // console.log('kicchu khawar dorkar nai')
}

// ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো।

var number =7;
while(number<=19){
// console.log(number);
number=number+2;
}

// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

var numbers=[12,23,34,45,56,76,78];
//  console.log(numbers.length);
numbers[3]=10
//  console.log(numbers)
numbers.push(80,90)
// console.log(numbers);
numbers.pop();
// console.log(numbers)

// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।

const elements=[11,22,33,44,55,66,77,78,98,90]
for(let i=0;i<elements.length;i++){
    var element=elements[i];
    // console.log(element)
}

// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 

var items=[20,13,34,25,80,85,89,90,100,46];
    
for(let i=0; i<items.length;i++){
    var item=items[i];
    if(item < 80){
        continue;
    }
    // console.log(item)
}

// ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 

const frstnum=3;
const scndnum=5;
const thirdnum=7;
const multiplications= frstnum*scndnum*thirdnum
// console.log(multiplications);

// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 

var student={name:'tasnu',
     id:537,
     class:11   
    }
     student.id=532;
    console.log(student);
