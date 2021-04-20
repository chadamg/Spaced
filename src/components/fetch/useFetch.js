import React, { useState, useEffect } from "react";
import { useFetch } from "./Fetch";

const url = "api/card/?ordering=-difficulty/";

const FetchModular = () => {
  const { loading, payload } = useFetch(url);
  console.log(payload);
  return (
    <div>
      <h2>{loading ? "loading..." : "loaded cards"}</h2>
      {payload.map(data => {
        return (
          <div>
            <h2>{data.question}</h2>
            <h2>{data.answer}</h2>
          </div>
        )
      })}
    </div>
  );
};

export default FetchModular;
