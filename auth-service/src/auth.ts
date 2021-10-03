import jwt from 'jsonwebtoken';
import { User } from './models/user';

const exp = (): number => {
    return Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 365 * 3;
};

const secret = () => {
    const sec = process.env.secret;

    if (!sec) {
        throw new Error('Secret not specified');
    }

    return sec;
};

const signedUserToken = (user: User) => {
    const token = jwt.sign(
        {
            exp: exp(),
            uid: user.uid,
            username: user.username,
            email: user.email,
        },
        secret()
    );

    return `Bearer ${token}`;
};

export { signedUserToken };
