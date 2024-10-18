function add(numbers) {
    if (numbers === "") {
      return 0;
    }
    return parseInt(numbers , 10) // for handling single number
  }
  console.log(add(""))    // output 0

