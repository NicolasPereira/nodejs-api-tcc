import jwt from 'jsonwebtoken';

export function validateToken(token) {
    return jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if (err) return false;
        
        return decoded;
      });
}
