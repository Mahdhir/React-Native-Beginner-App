import axios from 'axios';

const url = 'https://api.cryptonator.com/api/ticker/';

export const addHolding = (holding) => {
    return axios.get(url+holding.code + '-' + holding.currency);
}