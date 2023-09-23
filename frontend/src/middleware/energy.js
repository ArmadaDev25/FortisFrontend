const symbolizeEnergy = (type) => {
    const energies = {
        Grass: "G",
        Fire: "F",
        Water: "W",
        Lightning: "L",
        Fighting: "Fi",
        Psychic: "P",
        Colorless: "C",
        Darkness: "D",
        Metal: "M",
        Dragon: "Dr",
        Fairy: "Fa"
    }
    console.log(type, "Before if")
    if(Object.keys(energies).includes(type)){
        console.log(type, "In if")
        type = energies[type]
        console.log(type, "After change")
    }

    return type
}

testCost = ["Colorless", "Colorless"]

//testCost[0] = symbolizeEnergy(testCost[0])

testCost.forEach((type, idx) => {
    testCost[idx] = symbolizeEnergy(type)
})


console.log(testCost)