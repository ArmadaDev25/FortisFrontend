import energies from "../assets/energy_symbols/Energies"

export default function symbolizeEnergy (type) {
    let newType = ""
    if(Object.keys(energies).includes(type)){
        newType = energies[type]
    }
    return newType
}

// const testCost = ["Colorless", "Colorless"]

// //testCost[0] = symbolizeEnergy(testCost[0])

// testCost.forEach((type, idx) => {
//     testCost[idx] = symbolizeEnergy(type)
// })