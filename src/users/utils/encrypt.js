import bcrypt from 'bcrypt'

export async function encryptPassword(password){
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    return await bcrypt.hash(password, salt);
}