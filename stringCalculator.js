function add(numbers) {
    if (numbers === "") {
      return 0;
    }
  //  return parseInt(numbers , 10); // for handling single number
  
let delimiter = /[\n,]/;
if (numbers.startsWith("//")) {
  const parts = numbers.split("\n");
  delimiter = new RegExp(parts[0].substring(2));
  numbers = parts.slice(1).join("\n");
}

const nums = numbers.split(delimiter);
(delimiter);
  const negatives = nums.filter(num => parseInt(num, 10) < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed => ${negatives.join(", ")}`);
  }

return nums.reduce((sum, num) => sum + parseInt(num, 10), 0);
}
try{
    console.log(add("1,-2,3"));// it should throw error
}
catch(err){
console.log(err.message); // negavtive numbers not allowed => -2 
}
// Examples
console.log(add(""));        // Output: 0
console.log(add("1"));       // Output: 1
console.log(add("1,5"));     // Output: 6
console.log(add("1,2,3,4")); // Output: 10
console.log(add("10,20,30")); // Output: 60
console.log(add("1\n2,3"));  // Output: 6
console.log(add("//;\n1;2"));  //Output :3