import jwt from 'jsonwebtoken';

export function validateToken(token) {
    return jwt.verify(token, process.env.SECRET, function(err, decoded) {
      const errorMessage = { messageError: 'Token de autenticação não é válido' };
      return (err) ? errorMessage : decoded;  
      });
}
