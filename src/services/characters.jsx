import CryptoJS from 'crypto-js';


export const reqCharacters = async (name = '', offset = 0) => {
    const timeStamp = new Date().getTime();

    const PRIVATE_API_KEY = '53fd314dc54bba4d939a477471037fc8228a4d29';

    const PUBLIC_API_KEY = '0908bf5f44f77a170ef566a5ca037e64';
    
    const hash = CryptoJS.MD5(timeStamp + PRIVATE_API_KEY + PUBLIC_API_KEY).toString();

    let url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${PUBLIC_API_KEY}&hash=${hash}&offset=${offset}`;

    if (name) {
        url += `&nameStartsWith=${name}`;
    }

    const resp = await fetch(url);
    const { data } = await resp.json();
    
    return data;
}