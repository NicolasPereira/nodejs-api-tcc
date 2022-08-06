import jwt from 'jsonwebtoken';
import { config } from '../../shared/config/config.js';

export async function generateToken(user){
    return await jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60), 
        user: user
    }, config.SECRET);
}
