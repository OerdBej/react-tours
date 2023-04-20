import React from 'react';
import Tour from './Tour';

const Tours = ({ tours }) => {
    return (
        <section>
            <div>
                <h2 className='title'>List of tours</h2>
                <div className='underline'></div>
            </div>
            <div className='tours'>
                {tours.map((tourItem) => {
                    console.log(tourItem);
                    return <Tour key={tourItem.id} {...tourItem} />;
                })}
            </div>
        </section>
    );
};

export default Tours;
