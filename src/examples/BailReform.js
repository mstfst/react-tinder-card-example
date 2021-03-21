import React, { useState, useMemo} from "react";
import TinderCard from "react-tinder-card";
import { cards } from "../cardData";

function BailReform() {
  const [currentCardID, setCurrentCardID] = useState("start");
  const [lastDirection, setLastDirection] = useState()
  const [beingSwiped, setBeingSwiped] = useState(false);
  const childRefs = useMemo(
    () =>
      Array(Object.keys(cards).length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );
  const [currentCardIndex, setCurrentCardIndex] = useState(
    childRefs.length - 1
  );

  const swiped = (direction) => {
    if (!beingSwiped) {
      // setLastDirection(direction);
      setBeingSwiped(true);
    }
  };

  const outOfFrame = (direction, index) => {
    setCurrentCardIndex(index - 1);
    if (direction === "left") {
      setCurrentCardID(cards[currentCardID].leftCardID);
    } else if (direction === "right") {
      setCurrentCardID(cards[currentCardID].rightCardID);
    }
    setBeingSwiped(false);
  };

  const swipe = (dir, index) => {
    childRefs[index].current.swipe(dir); // Swipe the card!
    // 
  };


  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <div className="cardContainer">
        {currentCardID ? 
          Object.keys(cards).map((cardID, index) => (
          <TinderCard
            ref={childRefs[index]}
            preventSwipe={["up", "down"]}
            className="swipe"
            key={cardID}
            onSwipe={(dir) => swiped(dir, index)}
            onCardLeftScreen={(dir) => outOfFrame(dir, index)}
          >
            <div
              style={{
                backgroundColor: "grey",
                display: index === currentCardIndex ? "block" : "none",
              }}
              className="card"
            >
              <h3 style={{ whiteSpace: "pre-line" }}>
                {cards[currentCardID].text}
              </h3>
            </div>
          </TinderCard>
        )) : null}
      </div>
      {currentCardID ? 
        <div className="buttons">
          <button onClick={() => swipe("left", currentCardIndex)}>
            {cards[currentCardID].leftText}
          </button>
          <button onClick={() => swipe("right", currentCardIndex)}>
            {cards[currentCardID].rightText}
          </button>
        </div> : 
        <div className="treatedFairlySection"> 
          <p>Do you think you were treated fairly?</p>
          <div className="buttons" style={{ justifyContent: 'center' }}>
            <button onClick={() => {
              window.location.reload()
            }}>Try again</button>
          </div>
          <div>
            <a href="https://github.com/mstfst/react-tinder-card-example">See the GitHub repo.</a>
            </div>
        </div>}
    </div>
  );
}

export default BailReform;
