import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const sign = payload => jwt.sign(payload, '1Q2W3E4R5T')

export default sign