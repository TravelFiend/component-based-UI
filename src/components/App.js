import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Character from './Character';
import {
  cardOne,
  cardTwo,
  cardThree,
  cardFour,
  cardFive,
  cardSix,
  cardSeven,
  cardEight
} from '../character';
import slotOne from '../../assets/slotOne.jpeg';
import slotTwo from '../../assets/slotTwo.jpeg';
import slotThree from '../../assets/slotThree.jpeg';
import slotFour from '../../assets/slotFour.jpeg';
import slotFive from '../../assets/slotFive.jpeg';
import slotSix from '../../assets/slotSix.jpeg';
import slotSeven from '../../assets/slotSeven.jpeg';
import slotEight from '../../assets/slotEight.jpeg';

const App = () => (
  <React.Fragment>
    <Header />
    <Character image={slotOne} name={cardOne.name} status={cardOne.status} species={cardOne.species} gender={cardOne.gender} origin={cardOne.origin} lastLocation={cardOne.lastLocation} />
    <Character image={slotTwo} name={cardTwo.name} status={cardTwo.status} species={cardTwo.species} gender={cardTwo.gender} origin={cardTwo.origin} lastLocation={cardTwo.lastLocation} />
    <Character image={slotThree} name={cardThree.name} status={cardThree.status} species={cardThree.species} gender={cardThree.gender} origin={cardThree.origin} lastLocation={cardThree.lastLocation} />
    <Character image={slotFour} name={cardFour.name} status={cardFour.status} species={cardFour.species} gender={cardFour.gender} origin={cardFour.origin} lastLocation={cardFour.lastLocation} />
    <Character image={slotFive} name={cardFive.name} status={cardFive.status} species={cardFive.species} gender={cardFive.gender} origin={cardFive.origin} lastLocation={cardFive.lastLocation} />
    <Character image={slotSix} name={cardSix.name} status={cardSix.status} species={cardSix.species} gender={cardSix.gender} origin={cardSix.origin} lastLocation={cardSix.lastLocation} />
    <Character image={slotSeven} name={cardSeven.name} status={cardSeven.status} species={cardSeven.species} gender={cardSeven.gender} origin={cardSeven.origin} lastLocation={cardSeven.lastLocation} />
    <Character image={slotEight} name={cardEight.name} status={cardEight.status} species={cardEight.species} gender={cardEight.gender} origin={cardEight.origin} lastLocation={cardEight.lastLocation} />
    <Footer />
  </React.Fragment>
);

export default App;
