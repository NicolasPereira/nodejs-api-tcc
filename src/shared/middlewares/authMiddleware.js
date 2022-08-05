import { validateToken } from "../auth/validateToken.js"

const authMiddleware = (req, res, next) => {

    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ error: true, message: 'Token de autenticação não fornecido' });
    
    const result = validateToken(token);

    if(result.messageError) {
        return res.status(401).json({ error: true, message: result.messageError })
    }

    req.userId = result.user.id;
    req.userName = result.user.name;

    next();
    
}

export { authMiddleware }
