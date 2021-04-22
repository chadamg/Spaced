import { useState, useEffect, useCallback } from "react";

//fetches via GET
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

//Create a card

//Token functions
export const UseToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
};

export default UseToken;
