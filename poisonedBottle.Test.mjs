import poisonedBottle from "./poisonedBottle.mjs";

// Test to check poisonedBottle function

// Poison one bottle for test
const poisonBottleNumber = 568;

// Create 1000 bottle array for test
const bottles = Array(1000).fill(false);
bottles[poisonBottleNumber - 1] = true;

// Check which bottle is poisoned using Fn
const identifiedPoisonBottle = poisonedBottle(bottles);

// Test function:
let result;
// Check if poison bottle number between 1 and 1000;
if (poisonBottleNumber >= 1 && poisonBottleNumber <= 1000) {
  result = poisonBottleNumber === identifiedPoisonBottle;
} else {
  // All prisoners survived - no poison
  result = 0 === identifiedPoisonBottle;
}
console.log("poisoned Bottle Function worked correctly: ", result);
