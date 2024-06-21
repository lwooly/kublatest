// Function to determine which bottles each prisoner should drink
// Returns an array where each subarray represents the indicies of bottles for each prisoner

const prisonerNum = 10;

const assignBottlesToPrisoners = () => {
  // create array to track the bottles assigned to each prisoner.
  const prisonerBottles = [];
  for (let i = 0; i < prisonerNum; i++) {
    prisonerBottles[i] = [];
  }

  // Iterate through all 1000 bottles to determine which prisoners are to drink it based on binary code
  for (let bottle = 1; bottle <= 1000; bottle++) {
    // convert bottle number to binary
    let binaryNum = bottle.toString(2);

    // Pad to 10 chars to match the 10 prisoners
    while (binaryNum.length < 10) {
      binaryNum = "0" + binaryNum;
    }

    // Assign this bottle to prisoners who are to drink it based on the positions of the 1s in the bottle number binary equivalent
    for (let prisoner = 0; prisoner < prisonerNum; prisoner++) {
      if (binaryNum[prisoner] === "1") {
        prisonerBottles[prisoner].push(bottle);
      }
    }
  }

  return prisonerBottles;
};

export default assignBottlesToPrisoners;