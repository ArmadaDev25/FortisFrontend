import React, { useState, Link } from 'react';
import { Card } from 'react-bootstrap'; // Import necessary components

const SearchCardDisplay = (props, { ele }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Card
      className={`set-card d-flex flex-column justify-content-center col-4 col-md-2 shadow border ${isHover ? 'hovered' : ''}`}
      onClick={() => props.changeDisplayStateCards()} // You may want to pass some props to this function
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHover && (
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center text-center bg-dark p-5 rounded-3"
          style={{ opacity: 0.8 }} // Adjust opacity as needed
        >
          {ele.name}
        </div>
      )}
      <Link to={`/search/set/${props.id}`}>
        {/* <div className="d-flex flex-column position-relative"> */}
          <div className="text-center">
            <Card.Img
              variant="top"
              src={`${props.logo}.png`}
              className="set-logo"
              style={{ width: "auto", maxWidth: "100%", maxHeight: "100px" }}
            />
          </div>
          <div className="text-center">
            <Card.Title className="fs-6">{props.name}</Card.Title>
          </div>
        {/* </div> */}
      </Link>
    </Card>
  );
};

export default SearchCardDisplay;