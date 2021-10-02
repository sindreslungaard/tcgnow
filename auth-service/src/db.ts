import { connect as mongoose } from 'mongoose';

export const connect = async (uri: string) => {
    await mongoose(uri);
};
