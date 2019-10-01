import axios from 'axios';

const url = 'https://api.cryptonator.com/api/ticker/';

export const addHolding = (holding) => {
    return axios.get(url+holding.base + '-' + holding.target);
}

export const updateHolding = (holdings) => {
    let holdingPromises = [];
    for(let holding of holdings){
        holdingPromises.push(addHolding(holding));
    }
    return Promise.all(holdingPromises);
}