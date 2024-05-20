import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
    console.log("Request body:", req.body);
    // const { username, email, password } = (req.body.Username,req.body.Email,req.body.Password);
    const username= req.body.Username;
    const email= req.body.Email;
    const password= req.body.Password;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return next(errorHandler(400, 'All fields are required'));
    }

    try {
        // Check if password is not empty
        if (!password.trim()) {
            return next(errorHandler(400, 'Password cannot be empty'));
        }

        console.log("Username:", username);
        console.log("Email:", email);

        const hashedPassword = bcryptjs.hashSync(password, 10);
        console.log("Hashed Password:", hashedPassword); // For debugging

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.json('Signup Successful');
        console(newUser.email)
    } catch (error) {
        next(error);
    }
}