function add(numbers) {
    if (numbers === "") {
      return 0;
    }
  //  return parseInt(numbers , 10); // for handling single number
  
const nums = numbers.split(",");
return nums.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

// Examples
console.log(add(""));        // Output: 0
console.log(add("1"));       // Output: 1
console.log(add("1,5"));     // Output: 6
console.log(add("1,2,3,4")); // Output: 10
console.log(add("10,20,30")); // Output: 60
