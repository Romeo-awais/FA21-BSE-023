let names = [
    "Awais",
    "Zain",
    "Kamran",
    "Basit",
    "Naveed",
    "Faisal",
    "Wajahat",
    "Aali",
  ];
  // push function to add element in array
  names.push("light");
  console.log(names);
  // pop function to remove last element of the array
  names.pop();
  console.log(names);
  // shift function to remove first element of an array
  names.shift();
  console.log(names);
  // unshift function is used to add one or more element at start of the array
  names.unshift("King", "Evil");
  console.log(names);
  //concat function is used to join 2 arrays
  let numbers = [1, 2, 3, 4, 5,7,8];
  let new_array = names.concat(numbers);
  console.log(new_array);
  // slice function is used to fetch  the portion of an array
  let slice_array = names.slice(3, 5);
  console.log(slice_array);
  //foreach loop is  specially used to fetch elements from array
  names.forEach((element) => {
    console.log(element);
  });
  //map function is used to take element from array one by one and apply some operation on it,then update the array with new elements
  let updated_array = names.map(function (element) {
    return element + " hello";
  });
  console.log(updated_array);
  
  // filter function is used to fetch element from array then passes through some test ,if it passes the test then  it moves to the new array
  let number = [2, 5, 6, 7, 4, 7, 3, 7, 8];
  let filtered_array = number.filter(function (element) {
    return element % 2 != 0;
  });
  console.log(filtered_array);
  
  //splice function is used to replace element from array
  names.splice(0, 6, "samama", "rafique");
  console.log(names);
  
  //include function is used to check specific value present in array or not
  console.log(names.includes("Hunain"));
  // reduce function is used to executes a reducer function on each element of the array
  let num = [1, 2, 3, 4, 5];
  let sum = num.reduce(function (a, currentValue) {
    return a + currentValue;
  }, 0);
  console.log(sum);
  
  // reduce function is used to executes a reducer function on each element of the array,by 4 value
  let sum2= num.reduce(function (a, currentValue) {
    return a + currentValue;
  }, -4);
  console.log(sum2);
  
  // negative index
  console.log(names[names.length - 1]);