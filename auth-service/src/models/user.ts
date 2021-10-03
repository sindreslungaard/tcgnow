import { Schema, model } from 'mongoose';

interface User {
    uid: string;
    username: string;
    email: string;
    pw_hash: string;
    created: number;
    activated: boolean;
    suspended: boolean;
}

const schema = new Schema<User>({
    uid: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    pw_hash: { type: String, required: true },
    created: { type: Number, required: true },
    activated: { type: Boolean, required: true },
    suspended: { type: Boolean, required: true },
});

const UserModel = model<User>('User', schema);

export { User, UserModel };
