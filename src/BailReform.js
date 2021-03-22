import React, { useState, useMemo} from "react";
import TinderCard from "react-tinder-card";
import { cards } from "./cardData";

function BailReform() {
  const [currentCardID, setCurrentCardID] = useState("start");
  const [lastDirection, setLastDirection] = useState()
  const [beingSwiped, setBeingSwiped] = useState(false);
  // const childRefs = useMemo(
  //   () =>
  //     Array(Object.keys(cards).length)
  //       .fill(0)
  //       .map((i) => React.createRef()),
  //   []
  // );
  const childRefs = useMemo(
    () => {
      let refs = {};
      Object.keys(cards).map((key, index) => {
        refs[key] = {};
      })
      return refs;
    }, []
  );
  // const [currentCardIndex, setCurrentCardIndex] = useState(
  //   childRefs.length - 1
  // );

  const swiped = (direction) => {
    // console.log('inswped', direction)
    if (!beingSwiped) {
      // console.log('was swiped')
      // setLastDirection(direction);
      setBeingSwiped(true);
    }
  };

  const outOfFrame = (direction, cardID) => {
    // console.log('out of frame ', direction, cardID)

    // setCurrentCardIndex(index - 1);
    if (direction === "left") {
      setCurrentCardID(cards[cardID].leftCardID);
    } else if (direction === "right") {
      setCurrentCardID(cards[cardID].rightCardID);
    }
    setBeingSwiped(false);
  };

  const swipe = (dir, cardID) => {
    // console.log('swiped ', dir, cardID)
    if (!beingSwiped) {
      setBeingSwiped(true)
      childRefs[cardID].current.swipe(dir); // Swipe the card!
    }
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
            ref={childRefs[cardID]}
            preventSwipe={["up", "down"]}
            className="swipe"
            key={cardID}
            onSwipe={(dir) => swiped(dir, cardID)}
            onCardLeftScreen={(dir) => outOfFrame(dir, cardID)}
          >
            <div
              style={{
                backgroundColor: "grey",
                display: currentCardID === cardID ? "block" : "none",
              }}
              className="card"
            >
              <h3 style={{ whiteSpace: "pre-line" }}>
                {cards[cardID].text}
              </h3>
            </div>
          </TinderCard>
        )) : null}
      </div>
      {currentCardID ? 
        <div className="buttons">
          {cards[currentCardID].leftText ? 
            <button onClick={() => swipe("left", currentCardID)}>
            {cards[currentCardID].leftText}
          </button> : null}
          {cards[currentCardID].rightText ? 
            <button onClick={() => swipe("right", currentCardID)}>
            {cards[currentCardID].rightText}
          </button> : null}
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
