import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/constants.js';

export const authMiddleware = (req, res, next) => {
    //Check if there is a token in the request
    const token = req.cookies['auth'];

    if (!token) {
        return next();
    }

    //Validate token
    try {
        const decodedToken = jwt.verify(token, JWT_SECRET);
        console.log(decodedToken);
        
        return next();
    } catch (err) {

    }
    //Add user data to request
};