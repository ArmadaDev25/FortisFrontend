import { Container, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import CardModal from "../complete-modals/CardModal";
import CarouselImage from "../carousel_components/CarouselImage";
import Ferret from "../../assets/FurretCard.png";
import "../../../src/styles.css"



const shortenSet = (data) => {
  while(data.cards.length > 36){
    let rand = Math.floor(Math.random()*data.cards.length)
    data.cards.splice(rand, 1)
  }
  // console.log(data.cards)
  
  return data
}

const CardCarousel = () => {
  const [setData, setSetData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imagesLoadedCount, setImagesLoadedCount] = useState(0)
  
  const findSet = async () => {
    const allSetsArray = await fetch("https://api.tcgdex.net/v2/en/sets");
    const allSetsData = await allSetsArray.json();
    let foundSetArray = [];
    let randomSetId = '';
    
    for (let i = 0; i < allSetsData.length; i++) {
      const set = allSetsData[i];
      if(set.cardCount.total > 36 && !set.name.includes('Promos')) {
        foundSetArray.push(set)
      }
    }
    console.log(foundSetArray);
  
    let randomSetIndex = Math.floor(Math.random()*foundSetArray.length)
    randomSetId = foundSetArray[randomSetIndex].id
  
    try {
      const randomSetData = await fetch(`https://api.tcgdex.net/v2/en/sets/${randomSetId}`)
      if (!randomSetData.ok) {
        throw new Error(`HTTP error! Status: ${randomSetData.status}`);
      }
      const renderedRandomData = await randomSetData.json()
      console.log(renderedRandomData);
      setSetData(shortenSet(renderedRandomData));
    }catch (error) {
      setError(error);
    }
    
  }

 
  useEffect(() => {
    findSet()
  }, []);

  const handleImageLoad = () => {
    setImagesLoadedCount((prevCount) => prevCount + 1);
  };

  
  const loaded = () => {
    if (setData && imagesLoadedCount <= 36) {
      const setCards = setData.cards;
      return (
        <Container  className="d-flex flex-column p-0 mb-2 py-2 bg-light border rounded">
              <h5 className="mb-0 text-muted">Featured Set: {setData.name} </h5>
          <Container  className="d-flex flex-column justify-content-center align-items-center p-0 mb-2">
              <Image
                src={`${setData.logo}.png`}
                style={{width:"250px", maxHeight:"200px"}}
              />
          </Container>
          <Container
            fluid
            id="carousel-container"
            className="d-flex flex-row justify-content-start overflow-scroll bg-dark border-top align-items-center py-2 px-0 m-0"
            >
            {setCards.map((card, index) => (
              <CarouselImage
                setId={setData.id}
                localId={card.localId}
                key={index}
                image={`${card.image}/low.png`}
                alt={`${card.name} Image`}
                onLoad={() => handleImageLoad()}
              />
              ))}
          </Container>
        </Container>
      );
    } else {
      return null; // Return null if data is not available or images are not loaded yet
    }
  };

  const loadingText = () => {
      return (
        <div className="spinner-grow text-primary border rounded-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )
  }
  
  return setData ? loaded(): loadingText()

}

export default CardCarousel;