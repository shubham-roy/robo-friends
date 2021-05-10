import React from 'react';
import Card from './Card';
import { robots } from './robots';

let cardArray = robots.map((robot, index) => {
    return (<Card 
        key = {index}
        id={index} 
        name={robots[index].name} 
        email={robots[index].email} />);
});

class CardList extends React.Component {
    render() {
        return cardArray;
    }
}

export default CardList;