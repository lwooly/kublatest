// Function to check if each prisoner has survived

// returns a bool for prisoner survival

const isPrisonerAliveAfter24Hours = (indiciesOfBottlesDrunk, bottles) => {

    return indiciesOfBottlesDrunk.every((bottle) => {
        return bottles[bottle -1] === false;
    })
}

export default isPrisonerAliveAfter24Hours;