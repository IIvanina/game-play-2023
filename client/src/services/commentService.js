import * as request from '../lib/request.js'

const baseUrl = 'http://localhost:3030/jsonstore/commments'

export const create = async (gameId, username, text) => {
    const newCommnent = await request.post(baseUrl, {
        gameId,
        username,
        text,
    });

    return newCommnent;
}