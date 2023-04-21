import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price, removeTour }) => {
    //boolean logic
    const [readMore, setReadMore] = useState(false);

    return (
        <div>
            <img src={image} alt={name} />
            <span>{price}</span>
            <div>
                <h5>{name}</h5>
                {/* display the text only if the readMore is true, substring method to reduce the strings */}
                <p>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    {/* conditional: button change the value for readMe */}
                    <button
                        type='button'
                        onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'show less' : 'read more'}
                    </button>
                </p>
                <button onClick={() => removeTour(id)}>Remove</button>
            </div>
        </div>
    );
};

export default Tour;
