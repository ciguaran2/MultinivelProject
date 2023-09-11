import jwt from 'jsonwebtoken'
import {TOKEN_SECRET} from '../config'

export function createAccessToken(payload){
    return new Promise((resolve, reject) =>{
        
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: "1d"
            },
            {
                httpOnly: false, // client can't get cookie by script
                secure: true, // only transfer over https
                sameSite: "None" // only sent for requests to the same FQDN as the domain in the cookie
            },
            (err, token) =>{
                if (err) reject(err)  
                resolve(token) 
            }
        );
    }
    )    
}
