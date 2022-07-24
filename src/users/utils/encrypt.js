import bcrypt from 'bcrypt'

export async function encryptPassword(password){
    console.log(process.env.SALT);
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    return await bcrypt.hash(password, salt);
}