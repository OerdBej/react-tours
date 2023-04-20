import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, removeTour }) => {
    return (
        <section>
            <div>
                <h2 className='title'>List of tours</h2>
                <div className='underline'></div>
            </div>
            <div className='tours'>
                {tours.map((tourItem) => {
                    return (
                        <Tour
                            key={tourItem.id}
                            {...tourItem}
                            removeTour={removeTour}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Tours;
