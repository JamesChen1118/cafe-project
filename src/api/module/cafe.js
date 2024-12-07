import server from '../server';


export const cafeApi = {
    getCafes: async () => {
        const { data } = await server.get('/cafes');
        return data;
    }
}