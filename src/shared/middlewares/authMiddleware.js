import { validateToken } from "../auth/validateToken.js"

const authMiddleware = (req, res, next) => {

    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ auth: false, message: 'Token de autenticação não fornecido' });
    
    const result = validateToken(token);

    if(!result) {
        return res.status(401).json({ auth: false, message: 'Token de autenticação não é válido' })
    }

    req.userId = result.user.id;
    req.userName = result.user.name;

    next();
    
}

export { authMiddleware }