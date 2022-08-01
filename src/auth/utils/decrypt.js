import bcrypt from 'bcrypt'
export async function comparePassword(passwordRequest, passwordHash){
    return await bcrypt.compare(passwordRequest, passwordHash);
}
