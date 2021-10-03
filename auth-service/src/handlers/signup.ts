import { Request, Response } from 'express';
import UserModel from '../models/user';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const signup = async (req: Request, res: Response) => {
    const emailOk = validator.isEmail(req.body.email || '');
    const passwordOk = req.body.password && req.body.password.length >= 6;
    const usernameOk =
        req.body.username &&
        validator.isAlphanumeric(req.body.username) &&
        req.body.username.length > 3 &&
        req.body.username.length < 20;

    let err = '';
    if (!emailOk) err = 'Email is not in a valid format';
    if (!passwordOk) err = 'Password must be at least 6 characters long';
    if (!usernameOk)
        err =
            'Username can only contain letters and numbers and be between 4-20 characters long';

    if (err != '') return res.status(400).json({ code: 400, error: err });

    // request data is ok, now make sure the user and email does not already exist

    const uid = req.body.username.toLowerCase();

    if (await UserModel.findOne({ uid })) {
        return res
            .status(400)
            .json({ code: 400, error: 'Username already taken' });
    }

    if (await UserModel.findOne({ email: req.body.email.toLowerCase() })) {
        return res
            .status(400)
            .json({ code: 400, error: 'Email already taken' });
    }

    // todo: recaptcha

    // username and email is free, create user

    const hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

    const user = new UserModel({
        uid,
        username: req.body.username,
        email: req.body.email.toLowerCase(),
        pw_hash: hash,
        created: Math.floor(Date.now() / 1000),
        activated: false,
        suspended: false,
    });

    try {
        await user.save();
    } catch (err) {
        return res.status(500).json({
            code: 500,
            error: 'Failed to create user, please try again',
        });
    }

    res.status(200).json({ code: 200, user });
};

export { signup };
