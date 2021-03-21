//end cards have null for both left/right
//start card has ID 'start'
export const cards = {
  start: {
    text: `You and your friend are out at night when you notice a store that is closed.

    It seems that someone has broken into the store -- the front door is open.
   
   Your friend goes in to check it out.
   
   What do you do?`,
    leftText: 'Wait outside',
    leftCardID: 'police_arrive_wait',
    rightText: 'Go in',
    rightCardID: 'police_arrive_go_in'
  },
  police_arrive_wait: {
    text: `The police arrive.

    One officer goes in to arrest your friend for break and enter.
    
    The other officer suspects you of being a "lookout" for your friend.
    
    You are asked to freeze and put your hands up.`,
    leftText: 'Put your hands up',
    leftCardID: 'police_arrest_comply',
    rightText: 'Run',
    rightCardID: 'police_arrest_run'
  },
  police_arrive_go_in: {
    text: `The police arrive.

    They enter the store and find you and your friend inside.
    
    One officer holds you at gunpoint and tells you freeze and put your hands up.`,
    leftText: 'Put your hands up',
    leftCardID: 'police_arrest_comply',
    rightText: 'Run',
    rightCardID: 'police_arrest_run'
  },
  police_arrest_comply: {
    text: `The police officer arrests you for break and enter.

    The officer has the choice to let you live in your community until your criminal charges are resolved, or take you into police custody.
    
    The officer chooses to take you into police custody.`,
    leftText: 'Go into police custody',
    leftCardID: null,
    rightText: null,
    rightCardID: null
  },
  police_arrest_run: {
    text: `The police officer chases after you, catches up to you, and violently takes you down.

    You are arrested for break and enter and evading arrest.
    
    You are taken into police custody.`,
    leftText: 'Go into police custody',
    leftCardID: null,
    rightText:  null,
    rightCardID: null
  }
};
