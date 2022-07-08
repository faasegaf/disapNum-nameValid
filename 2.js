let findDisappearedNumbers = function (nums) {
  let output = [];
  for (let i = 1; i <= nums.length; i++) {
    if (nums.indexOf(i) < 0) {
      output.push(i);
    }
  }
  return output;
};

console.log(findDisappearedNumbers(43278231));
