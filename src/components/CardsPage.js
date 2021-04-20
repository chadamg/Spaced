import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import { UseToken, GetUserCards, GetPublicCards } from './fetch/Fetch';

const CardsPage = () => {
  GetUserCards()
    
  return (
      <div> 
        {userCards.map((data,index) => { if (data) {
                return (
                  <div key={ data.question }>
                    <h4>{ data.question }</h4>
                    <h4>{ data.answer }</h4>
                  </div>	
                )
              }
              return null
        })}
        
      </div> 
    )

}

// import GetUserCards here
//show cards for user