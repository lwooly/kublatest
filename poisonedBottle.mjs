import assignBottlesToPrisoners from "./assignBottlesToPrisoners.mjs";
import isPrisonerAliveAfter24Hours from "./isPrisonerAliveAfter24Hours.mjs";

// Function to identify poisoned bottle from bottleArray using 10 calls to isPrisonerAliveAfter24Hours Fn.

// Returns the number of the poisoned bottle or 0 if no poison.

const poisonedBottle = (bottleArray) => {
  // Use method 2 from https://medium.com/i-math/a-king-1000-bottles-of-wine-10-prisoners-and-a-drop-of-poison-2dd1959a8dd2

  // 1:- Determine which bottles each prisoner should drink
  const prisonerBottles = assignBottlesToPrisoners();

  // 2:- Check if each prisoner is alive after 24 hours
  const arePrisonersAlive = prisonerBottles.map(bottleIndicies => {
    return isPrisonerAliveAfter24Hours(bottleIndicies, bottleArray)
  })

  //3:- Identify the bottle number from the binary equivalent of the surviving prisoners array
  // Convert surviving prisoner array to binary
  const resultBinary = arePrisonersAlive.map(isAlive => {
    return isAlive ? '0' :'1';
  })

  // Convert binary to integer
  const bottleNumber = parseInt(resultBinary.join(''), 2)

  // Output result to console
  console.log("Poisoned bottle number identified:", bottleNumber === 0 ? 'No poison' : bottleNumber);
  return bottleNumber;
};

export default poisonedBottle;
