import { serverApi, type Response } from '../index';
import type { WordQuery, WordList } from '@en/common/word';

export const getWordBookList = async (params: WordQuery): Promise<Response<WordList>> => {
    return await serverApi.get('/word-book', { params }) as unknown as Promise<Response<WordList>>;
}
