import { Request, Response } from 'express';
import { UserModel } from '../models/user';
import bcrypt from 'bcryptjs';
import { signedUserToken } from '../auth';

const signin = async (req: Request, res: Response) => {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({
            code: 400,
            error: 'Username and password required',
        });
    }

    let user = await UserModel.findOne({
        uid: req.body.username.toLowerCase(),
    });

    if (!user) {
        return res.status(404).json({
            code: 401,
            error: 'User does not exist',
        });
    }

    const ok = bcrypt.compareSync(req.body.password, user.pw_hash);

    if (!ok) {
        return res.status(400).json({
            code: 400,
            error: 'Incorrect username or password',
        });
    }

    if (!user.activated) {
        return res.status(403).json({
            code: 403,
            error: 'You need to activate your account before signing in',
        });
    }

    // everything ok, return auth token

    const token = signedUserToken(user);

    return res.json({
        code: 200,
        token,
    });
};

export { signin };
