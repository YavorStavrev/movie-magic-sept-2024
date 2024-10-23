import User from "../models/User.js";
import bcrypt from 'bcrypt';


const register = (email, password) => {


    return User.create({ email, password });
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
}

export default {
    register,
    login,
}