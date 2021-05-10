import React from 'react';
import Card from './Card';

const CardList = (props) => {
    const cardArray = props.robots.map((robot, index) => {
        return (<Card 
            key = {index}
            id={index} 
            name={props.robots[index].name} 
            email={props.robots[index].email} />);
    });
    return (
        <div className="tc">
            {cardArray}
        </div>);
};

export default CardList;