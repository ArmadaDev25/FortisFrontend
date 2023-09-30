//const pokeCardURL = `${collectionURL}:collectionID/cards/`

// //PokeCard crud
// const getPokeCards = async () => {
//     const response = await fetch(pokeCardURL)
//     const data = await response.json()
//     setPokeCards(data.data)
// }

// const createPokeCard = async (pokeCard) => {
//     await fetch(pokeCardURL, {
//         method:"post",
//         headers:{
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(pokeCard)
//     })

//     getPokeCards()
// }

// const updatePokeCard = async (pokeCard, id) => {
//     await fetch(pokeCardURL + id, {
//         method:"put",
//         headers:{
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(pokeCard)
//     })

//     getPokeCards()
// }

// const deletePokeCard = async () => {
//     await fetch(pokeCardURL + id, {
//         method: "delete"
//     })

//     getPokeCards()
// }