import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const cardArray = robots.map((robot, index) => {
        return (<Card 
            id={index} 
            name={robot.name} 
            email={robot.email} />);
    });
    return cardArray;
};

export default CardList;