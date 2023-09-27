import energies from "../assets/energy_symbols/Energies"

export default function symbolizeEnergy (type) {
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