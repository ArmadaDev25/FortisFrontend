export default function symbolizeEnergy (type) {
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
    if(Object.keys(energies).includes(type)){
        type = energies[type]
    }

    return type
}

// const testCost = ["Colorless", "Colorless"]

// //testCost[0] = symbolizeEnergy(testCost[0])

// testCost.forEach((type, idx) => {
//     testCost[idx] = symbolizeEnergy(type)
// })