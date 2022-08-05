import jwt from 'jsonwebtoken';

export async function generateToken(user){
    return await jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60), 
        user: user
    }, process.env.SECRET);
}
