import React, { useEffect, useState } from 'react';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project';
const App = () => {
    const [tours, setTours] = useState([]);

    // function to call the api
    const fetchTours = async () => {
        try {
            const response = await fetch(url);
            const tours = await response.json();
            console.log(tours);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTours();
    }, []);

    return (
        <div>
            <Tours />
        </div>
    );
};

export default App;
