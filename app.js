let num1 = prompt("enter the first number");
let num2 = prompt("enter the second number");
console.log(typeof num1);
nums1=parseInt(num1);
nums2 =parseInt(num2);

console.log(typeof nums1);
let adding_two_numbers = nums1 + nums2;
console.log(adding_two_numbers);


function adding_two_numbers (a, b){
  return a+b;
}

let sum = adding_two_numbers(num1,num2);
console.log(sum);
console.log(typeof sum);

