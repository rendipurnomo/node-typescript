import bcrypt from 'bcrypt'

// encode
export const hashing = async (password: string) => {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  return hashedPassword
}

//decode
export const compare = async (password: string, userPassword: string) => {
  return bcrypt.compareSync(password, userPassword)
}
