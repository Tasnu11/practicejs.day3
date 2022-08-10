// এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 
 
const numbers=[22,34,54,12,45,58,-56,77,56,44]
for(let i=0;i<numbers.length;i++){
    let number=numbers[i];
    if(number <0){
        break;
        
    }
    console.log(number)
}
    



//1.  Mular dam
// For first 21 kg
// 30 tk per kg
//  For more than 2 kg  25 tk per kg
//  write a function to calculate total price based on given quantity. + handle errors

// 2. Calculate the average of all the numbers that is divisible by 3 from 1 - n;

// 3.  Calculate Electricity bill 
// For first 100 unit - 5 tk per unit
// For more than 100 unit 6 tk for every unit more than 100
//  For more than 200 unit 7 tk for every unit more than 200

// 4.Find if anybody got A+ from your friends
//  marks = [78, 82, 69];

//5. Check if a number is Prime