const maxValueApproach = (arr) => {
  let maxValue = Number.NEGATIVE_INFINITY;

  arr.forEach((item, index, array) => {
    if (typeof item != "number") throw Error("The array should contains numbers");

    if (item > maxValue) maxValue = item;
  });

  console.log("The maximum value for the given array is", maxValue);
};

let arraywithPostives = [1, 22, 8, 9, 8];
let arraywithNegative = [-1, -7, -9, 0];
let arraywithStrings = [-1, -7, "old", 0];

maxValueApproach(arraywithPostives);
maxValueApproach(arraywithNegative);
maxValueApproach(arraywithStrings);
