import bcrypt from 'bcrypt'
export async function decryptPassword(passwordRequest, passwordHash){
    return await bcrypt.compare(passwordRequest, passwordHash);
}