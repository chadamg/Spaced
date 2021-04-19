import { useState, useEffect } from "react";


//submit function

// inside body:
// {
//     "username": "Lionel",
//     "password": "123"
// }

// returned by server:
// {
//     "user": {
//         "id": 1,
//         "username": "Lionel",
//         "email": "smithlionel1121@gmail.com"
//     },
//     "token": "bdfee2fec8c30f862e8f485b2da3460b549abc61036f80b9841f8953f8d91e47"
// }


const SubmitLogin = async (event) => {
    event.preventDefault();


    await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(this.state)
    })
    .then ((response) => {
        if(response.status === 401) {
            throw new Error('Unauthorized');
        }
        return response.json();
    })
    .then((result) => {
        console.log(result);
        this.props.history.push('/api/card?public=true');
        alert('Login Sucessful');
    })
    .catch((err) => {
        console.log();
    })
}

export default SubmitLogin;
