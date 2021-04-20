import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import useToken from './useToken';

const CardsPage = () => {
    const [cardsListDefault, setCardsListDefault] = useState();
    const { token } = useToken();

    const fetchData = async () => {
        if (token) {
            return await fetch('/api/card?public=true', {
            method: 'GET',
            headers: {
                'Authorization': 'Token ' + token,
                'Content-Type': 'application/json',
            }
            })
            .then(response => response.json())
            .then(data => {
                setCardsListDefault(data)
            });
        }
        return await fetch('/api/card?public=true')
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