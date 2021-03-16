# React Tinder Card Example

A project demonstrating a prototype using [react-tinder-card](https://github.com/3DJakob/react-tinder-card) to implement a "tinder card" interface to tell a story. 

## Try the demo

Try thye demo on the gh-pages site [here!](https://mstfst.github.io/react-tinder-card-example/)

## The cards

The sequence of cards that are shown in the demo are based on the contents of [./src/cardData.json](./src/cardData.json)

Each key/value pair in this JSON file represents a card ID and its corresponding data.

The starting card should always have ID `start`.

The prperties of each card's data are as follows:

* `text` -- the text of the card
* `leftText` -- text of the left button when the card is displyed
* `leftCardID` == ID of the next card the user is shown when the left button is clicked
* `rightText` -- text of the right button when the card is displyed
* `rightCardID` == ID of the next card the user is shown when the right button is clicked
