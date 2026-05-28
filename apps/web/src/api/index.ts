import axios from 'axios'
export const timeout = 50000;
export const serverApi = axios.create({
    baseURL: '/api/v1',
    timeout
})

serverApi.interceptors.response.use(response => {
    return response.data
})

export const aiApi = axios.create({
    baseURL: '/api/ai/v1',
    timeout
})

aiApi.interceptors.response.use(response => {
    return response.data
})

export interface Response<T = any> {
    success: any;
    code: number;
    message: string;
    data: T;
    timestamp: number;
    path: string;
}

