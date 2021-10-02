import { Schema, model } from 'mongoose';

interface User {
    username: string;
    email: string;
    pw_hash: string;
}

const schema = new Schema<User>({
    username: { type: String, required: true },
    email: { type: String, required: true },
    pw_hash: { type: String, required: true },
});

const UserModel = model<User>('User', schema);

export default UserModel;
