import { Container, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import CardModal from "../complete-modals/CardModal";
import CarouselImage from "../carousel_components/CarouselImage";
import Ferret from "../../assets/FurretCard.png";
import "../../../src/styles.css"

const CardCarousel = () => {
  const [setData, setSetData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imagesLoadedCount, setImagesLoadedCount] = useState(0)

  const shortenSet = (data) => {
    while(data.cards.length > 36){
      let rand = Math.floor(Math.random()*data.cards.length)
      data.cards.splice(rand, 1)
      console.log(data.cards)
    }

    return data
  }

  const getSet = async () => {
    const tcgdexurl = "https://api.tcgdex.net/v2/en";
    
    try { 
      const set = await fetch(`${tcgdexurl}/sets/swsh4`);
      // const response = await fetch(`${tcgdex}/sets/${cardData.set.id}/${cardData.localId}`);
      
      if (!set.ok) {
        throw new Error(`HTTP error! Status: ${set.status}`);
      }
      
      const data = await set.json();
      console.log(data, "line 26 @ cardCarousel");
      setSetData(shortenSet(data));
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      setError(error);
      setLoading(false); // Set loading to false on error
    }
  }
 
  useEffect(() => {
    getSet()
    // getCardImages()
  }, []);

  const handleImageLoad = () => {
    setImagesLoadedCount((prevCount) => prevCount + 1);
  };

  
  const loaded = () => {
    if (setData && imagesLoadedCount <= 36) {
      const setCards = setData.cards;
      console.log(setData, 'line 60 @ cardCarousel');
      return (
        <Container
          fluid
          id="carousel-container"
          className="d-flex flex-row justify-content-start overflow-scroll align-items-center bg-info py-2 px-0 m-5"
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
      );
    } else {
      return null; // Return null if data is not available or images are not loaded yet
    }
  };

  const loadingText = () => {
      return (
        <div class="spinner-grow text-primary border rounded-5" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )
  }
  
  return setData ? loaded(): loadingText()

}

export default CardCarousel;