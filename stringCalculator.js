function add(numbers) {
    if (numbers === "") {
      return 0;
    }
  //  return parseInt(numbers , 10); // for handling single number


    const nums= numbers.split(",");
    return nums.reduce((sum, num) => sum + parseInt(num, 10), 0);// for adding two numbers

  }
  console.log(add(""))    // output 0
  console.log(add("1"));  // output 5
  console.log(add("1,5")); // output 6
