import React from 'react';

const Tour = ({ id, image, info, name, price }) => {
    return (
        <div>
            <img src={image} alt={name} />
            <span>{price}</span>
            <div>
                <h5>{name}</h5>
                <p>{info}</p>
            </div>
        </div>
    );
};

export default Tour;
