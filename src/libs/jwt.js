import jwt from 'jsonwebtoken'
import {TOKEN_SECRET} from '../config.js'

export function createAccessToken(payload){
    return new Promise((resolve, reject) =>{
        
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: "1d"
            },
            (err, tokenx) =>{
                if (err) reject(err)  
                resolve(tokenx) 
            }
        );
    }
    )    
}
