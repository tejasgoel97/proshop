import jwt from 'jsonwebtoken'
import UserModel from '../models/UserModel.js'


export const protect = async (req, res, next) => {
    let token = req.headers.authorization;
    if (token && token.startsWith('Bearer')) {
        token = token.split(' ')[1]
        try {
            const tokenData = jwt.verify(token, process.env.JWT_SECRET)
            req.token = tokenData.id
            req.user = await UserModel.findById(tokenData.id);
        } catch (error) {
            console.error(error)
            throw new Error('Not Authorised')
        }

    }
    else {
        res.status(401);
        throw new Error("not authorized")
    }
    console.log(token);
    next();
}