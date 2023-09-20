import React, { useEffect, useState } from 'react';


const CardDisplay = (props) => {
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const getCard = async () => {
    const tcgdex = "https://api.tcgdex.net/v2/en";
    
    try {
      const response = await fetch(`${tcgdex}/sets/${cardData.set.id}/${cardData.localId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      
      setCardData(data);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      setError(error);
      setLoading(false); // Set loading to false on error
    }
  }

  useEffect(() => {
    
    getCard();
  }, []);

  // Render the loaded data
  const loaded = () => {
    return (
      <div id="card-pack-details" className="d-flex flex-column mx-2 align-content-center" style={{ maxWidth: "250px" }}>
        <img src={`${cardData.image}/high.png`} alt="Pokemon Card" />
        
      </div>
    )
  }

  // Render loading state
  const renderLoading = () => {
    return <h1>Loading...</h1>;
  }

  // Render error state
  const renderError = () => {
    return <p>Error: {error.message}</p>;
  }

  // Conditional rendering based on loading and error states
  if (loading) {
    return renderLoading();
  } else if (error) {
    return renderError();
  } else {
    return loaded();
  }
}

export default CardDisplay;
