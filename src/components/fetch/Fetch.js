import { useState, useEffect, useCallback } from "react";

//Token functions
const UseToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}

//Retrieves all cards belonging to current user
export const GetUserCards = () => {
    const [userCards, setUserCards] = useState([]);
    const { token } = UseToken();

    const fetchUserCards = async () => {
        return await fetch('/api/card', {
        method: 'GET',
        headers: {
            'Authorization': 'Token ' + token,
            'Content-Type': 'application/json',
        }
        })
        .then(response => response.json())
        .then(data => {
            setUserCards(data)
        });
        
    }

    //if user selects option to view public cards, function
    if(!token) {//button is placeholder
      // GetPublicCards()
    }
    
    useEffect( () => fetchUserCards()
    , []); //useEffect dependency array has button in it, rerenders cards if ticked

    return(userCards)
  }

  // [
  //   {
  //       "url": "http://127.0.0.1:8000/api/card/1/",
  //       "id": 1,
  //       "owner": "Lionel",
  //       "question": "What is a?",
  //       "answer": "b",
  //       "difficulty": 1.0,
  //       "subject": "http://127.0.0.1:8000/api/subject/1/"
  //   }
  // ]


//Retrieves all card of current user + public cards

// export const GetPublicCards = () => {
//     const [publicCards, setPublicCards] = useState([]);

//     const fetchPublicCards = async () => {
//         return await fetch('/api/card?public=true')
//             .then(response => response.json())
//             .then(data => {
//                 setPublicCards(data)
//             });
//     }

//     useEffect( () => fetchPublicCards()
//     , []);

//     return (publicCards)
// }

const url = '/api/card/?ordering=-difficulty/'

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [payload, setPayload] = useState([]);

  const getPayload = useCallback(async () => {
    const response = await fetch(url);
    const payload = await response.json();
    setPayload(payload);
    setLoading(false);
    }, [url]);


  useEffect(() => {
    getPayload();
  }, [url, getPayload]);
  return { loading, payload };

};


export default UseToken