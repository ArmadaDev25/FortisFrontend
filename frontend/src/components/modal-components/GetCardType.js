import PkmActionDetails from "./PkmActionDetails"
import TrainerActionDetails from "./TrainerActionDetails"
import EnergyActionDetails from "./EnergyActionDetails"

const GetCardType = (cardData) => {

  if (cardData.category === "Pokemon") {
    return (
      <PkmActionDetails 
        name={cardData.name}
        hp={cardData.hp}
        stage={cardData.stage}
        types={cardData.types}
        evolveFrom={cardData.evolveFrom}
        abilities={cardData.abilities}
        attacks={cardData.attacks}
        resistances={cardData.resistances}
        weaknesses={cardData.weaknesses}
        retreat={cardData.retreat}
      />
    )
  } else if (cardData.category === "Trainer") {
    return (
      <TrainerActionDetails
        name={cardData.name}
        trainerType={cardData.trainerType}
        effect={cardData.effect}
      />
    )
  } else if (cardData.category === "Energy") {
    return (
      <EnergyActionDetails 
        name={cardData.name}
        energyType={cardData.energyType}
        effect={cardData.effect}
      />
    )
  }
}

export default GetCardType;