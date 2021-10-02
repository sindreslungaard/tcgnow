import { Request, Response } from 'express';
import UserModel from '../models/user';

const signup = async (req: Request, res: Response) => {
    const user = new UserModel({
        username: 'sindres',
        email: 'email@gmail.com',
        pw_hash: 'pwhashed',
    });

    try {
        await user.save();
    } catch (err) {
        return res.status(500).json({ code: 500, error: err });
    }

    res.status(200).json({ code: 200, user });
};

export { signup };
