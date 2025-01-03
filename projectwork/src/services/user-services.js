import React from 'react';
import {enquUser, status, statusUser, statusUserSignin, statusUserSignup} from '../utils/utils';

const API = process.env.REACT_APP_API;

// signup user
export function SignUp(userData){
    return fetch(`https://${API}/web/users/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    }).then((res)=>statusUser(res,"signup")).catch(e => {console.log(e);
    })
}

// authorize user
export function auth(credentials){
    console.log(`${API}`);
    return fetch(`https://${API}/web/authenticate/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then((res)=>statusUser(res,"signin")).catch((e)=>enquUser(e,'error'));
}


export function ProfileSet(userData){
    return fetch(`https://${API}/web/users/profiles/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    }).then(status).catch(e => {console.log(e);
    })
}