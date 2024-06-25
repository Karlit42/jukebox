import React, { useState, useEffect } from 'react';
import '../styles/Home.scss';


function Home() {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prevDots => {
                if (prevDots.length >= 3) {
                    return '';
                } else {
                    return prevDots + '.';
                }
            });
        }, 500);

        return () => clearInterval(interval); 
    }, []);

    return (
        <h1 className="home">
            {dots}
        </h1>
    );
}

export default Home;