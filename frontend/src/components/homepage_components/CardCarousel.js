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
      setSetData(data);
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

  // const carouselImages = setData.map((card) => {
  //   console.log( `${card.image}`);
  // })
  
  // setData.cards returns an array of cards, each object is a card
  // card[i] is a specific card, which is an object
  // to get image, return ${card[i].image}/high.png

  // const setCards = setData.cards;
  // const getCardImages = () => {
  //   // console.log(setData.id);
  //   // console.log(setCards);
  //   // console.log(typeof(setCards))
  //   // console.log(setCards[202]);
  //   // console.log(`${setCards[202].image}/high.png`);
    
  // }
  
  const loaded = () => {
    const setCards = setData.cards;
    console.log(setData, 'line 60 @ cardCarousel');
    return (
      <Container fluid id="cards-carousel-container" className="d-flex flex-column h-50 border bg-primary mb-2 px-0">
          <Container fluid 
            id="carousel-container" 
            className="d-flex flex-row justify-content-start overflow-scroll py-2 px-0 m-0"
            // setId={setData.id}
          >
            
          {setCards.map((card, index) => (
            
            <CarouselImage
              setId={setData.id}  // Pass setId from CardCarousel to CarouselImage
              localId={card.localId}
              key={index}
              image={`${card.image}/high.png`}
              alt={`${card.name} Image`}
            />
          ))}
          {/* <p>{setData.id}</p> */}
          {/* <Image
            className="card-image"
            // src={`${setData.cards[1]}/high.png`}
          /> */}
          </Container>
      </Container>
    )
  }

  const loadingText = () => {
      return (
        <div class="spinner-grow text-primary border rounded-5" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )
  }
  
  return (setData ? loaded(): loadingText())

}

export default CardCarousel;