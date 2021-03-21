import React from 'react';

//end cards have null for both left/right
//start card has ID 'start'
export const cards = {
  start: {
    text: `You and your friend are out at night when you notice a store that is closed, but the front door is open.  
    
    Your friend goes in to check it out.
    
    What do you do?`,
    leftText: 'Wait outside',
    leftCardID: 'police_arrive_wait',
    rightText: 'Go in',
    rightCardID: 'police_arrive_inside'
  },
  police_arrive_wait: {
    text: `The police arrive.
    
    The police believe that you were acting as a "lookout" for your friend.  They arrest you for break and enter.
    
    The police can let you go until your criminal charges get resolved, but they take you to jail to await your first bail hearing instead.`,
    leftText: 'Go to jail',
    leftCardID: 'in_jail',
    rightText: 'Go to jail',
    rightCardID: 'in_jail'
  },
  in_jail: {
    text: `You are in jail.
    
    You will wait there until your bail hearing, which will happen within the next 24 hours.
    
    In the hearing, a Judicial Officer will determine your bail.`,
    leftText: 'Wait',
    leftCardID: 'bail_hearing',
    rightText: 'Wait',
    rightCardID: 'bail_hearing'
  },
 bail_hearing: {
  text: 'You are at the bail hearing',
  leftText: 'end',
  leftCardID: null,
  rightText: 'end',
  rightCardID: null
 }
};
