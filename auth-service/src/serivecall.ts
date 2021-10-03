import axios, { Method } from 'axios';

const serviceCall = async (method: Method, endpoint: string, data: any) => {
    if (!process.env.host) {
        throw new Error('host env variable not specified');
    }

    const res = axios({
        url: `${process.env.host}/api${endpoint}`,
        method,
        data,
        headers: {
            Authorization: process.env.service_token || '',
        },
    });

    return res;
};

export { serviceCall };
