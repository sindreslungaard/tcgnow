import { Schema, model } from 'mongoose';

interface User {
    uid: string;
    username: string;
    email: string;
    pw_hash: string;
    created: number;
}

const schema = new Schema<User>({
    uid: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    pw_hash: { type: String, required: true },
    created: { type: Number, required: true },
});

const UserModel = model<User>('User', schema);

export default UserModel;
