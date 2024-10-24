import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from '../lib/jwt.js';
import { JWT_SECRET } from "../config/constants.js";

const register = async (email, password, rePassword) => {
    // Check if user exists
    const userCount = await User.countDocuments({ email });

    if (userCount > 0) {
        throw new Error('User already exists!');
    }

    return User.create({ email, password, rePassword });
}

const login = async (email, password) => {

    //Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('User does not exist');
    }

    //Validate password
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Password does not match');
    }

    //Generate jwt token
    const payload = {
        _id: user._id,
        email,
    }
    const token = await jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' });

    //Return jwt token

    return token;
}

export default {
    register,
    login,
}