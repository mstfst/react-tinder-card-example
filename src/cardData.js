import React from 'react';

//end cards have null for both left/right
//start card has ID 'start'
export const cards = {
  start: {
    text: `You and your friend are out at night when you notice a store that is closed, but the front door is open.  
    
    Your friend goes in to check it out.
    
    What do you do?`,
    leftText: 'Wait outside',
    leftCardID: 'police_arrive',
    rightText: 'Go in',
    rightCardID: 'police_arrive'
  },
  police_arrive: {
    text: `The police arrive.`,
    leftText: 'Wait',
    leftCardID: 'end',
    rightText: 'Run',
    rightCardID: 'end'
  },
  end: {
    text: `The last card`,
    leftText: 'end',
    leftCardID: null,
    rightText: 'end',
    rightCardID: null
  }
};
