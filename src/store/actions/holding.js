import * as actionTypes from "./actionTypes";
import * as axiosService from '../../services/holdings';

const addHolding = (data) => {
    return {
        type: actionTypes.ADD_HOLDING,
        data: data
    }
}

const addHoldingStart = (data) => {
    return {
        type: actionTypes.ADD_HOLDING_START,
        data: data
    }
}

export const removeHolding = (id) => {
    return {
        type: actionTypes.REMOVE_HOLDING,
        id: id
    }
}

export const updateHolding = (data) => {
    return {
        type: actionTypes.UPDATE_HOLDING,
        data: data
    }
}

export const errorHolding = () => {
    return {
        type: actionTypes.ERROR_HOLDING
    }
}

export const addHoldingInitial = (data) => {
    return dispatch => {
        dispatch(addHoldingStart())
        axiosService.addHolding(data)
            .then(res => {
                const data = res.data;
                const status = res.data.success;
                if(!status){
                    dispatch(errorHolding());
                }else{
                    dispatch(addHolding(data));
                } 
            })
            .catch(err => {
                dispatch(errorHolding());
            });

    }
}
