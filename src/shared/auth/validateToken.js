import jwt from 'jsonwebtoken';
import { config } from '../../shared/config/config.js';

export function validateToken(token) {
    return jwt.verify(token,config.SECRET, function(err, decoded) {
      const errorMessage = { messageError: 'Token de autenticação não é válido' };
      return (err) ? errorMessage : decoded;  
      });
}
