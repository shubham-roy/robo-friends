import React from 'react';
import Card from './Card';

const CardList = (props) => {
    const cardArray = props.robots.map((robot, index) => {
        return (<Card 
            id={index} 
            name={props.robots[index].name} 
            email={props.robots[index].email} />);
    });
    return cardArray;
};

export default CardList;