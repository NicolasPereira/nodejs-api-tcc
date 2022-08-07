import bcrypt from 'bcrypt'
import { config } from '../../shared/config/config.js';

export async function encryptPassword(password){
    const salt = await bcrypt.genSalt(Number(config.SALT));
    return await bcrypt.hash(password, salt);
}