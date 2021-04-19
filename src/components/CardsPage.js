import React, { useState, useEffect } from 'react';
import Cards from './Cards';

const CardsPage = () => {
    const [cardsListDefault, setCardsListDefault] = useState();

    const fetchData = async () => {
        return await fetch('/api/card')
        .then(response => response.json())
        .then(data => {
            setCardsListDefault(data)
        });
    }

    useEffect( () => fetchData()
    , []);

    return (
        <div>
            <Cards cardsList={ cardsListDefault }/>
        </div>
    )
}

export default CardsPage