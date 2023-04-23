import React, { useEffect, useState } from 'react';
import Tours from './components/Tours';
import Loading from './components/Loading';

const url = 'https://course-api.com/react-tours-project';
const App = () => {
    // for the conditonal rendering
    const [isLoading, setIsLoading] = useState(true);
    const [tours, setTours] = useState([]);

    // id is from each data
    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    };

    // function to call the api
    const fetchTours = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const tours = await response.json();
            setTours(tours);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchTours();
    }, []);

    // while fetch display spiner

    if (isLoading) {
        return (
            <main>
                <Loading />
            </main>
        );
    }

    if (tours.length === 0) {
        return (
            <main>
                <div>
                    <h2>No tours left</h2>
                    <button onClick={() => fetchTours()}>refresh</button>
                </div>
            </main>
        );
    }

    return (
        <div>
            <Tours tours={tours} removeTour={removeTour} />
        </div>
    );
};

export default App;
