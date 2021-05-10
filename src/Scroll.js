import React from 'react';

const css = {
    overflowY: 'scroll',
    margin: '5px',
    border: '1px solid black',
    height: '500px'
};

const Scroll = (props) => {
    return (
        <div className='scroll' style={css}>
            {props.children}
        </div>
    );
};

export default Scroll;