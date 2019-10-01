import * as actionTypes from "./actionTypes";
import * as axiosService from '../../services/holdings';
import * as asyncStorage from '../../services/asyncStorage';
const key = 'holdings';


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

const updateHoldingStart = () => {
    return {
        type: actionTypes.START_REFRESHING
    }
}

const updateHoldingStop = () => {
    return {
        type: actionTypes.STOP_REFRESHING
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

const errorHolding = () => {
    return {
        type: actionTypes.ERROR_HOLDING
    }
}

export const errorHoldingClear = () => {
    return {
        type: actionTypes.ERROR_HOLDING_CLEAR
    }
}

export const onInitialLoad = () => {
    return dispatch => {
        asyncStorage.getData(key).then(
            res => {
                if (res !== null) {
                    data = JSON.parse(res);
                    dispatch(onInitialLoadInner(data));
                }
            }
        ).catch(err => console.log(err));
    }
}

const onInitialLoadInner = (data) => {
    return {
        type: actionTypes.ON_INITIAL_LOAD,
        data: data
    }
}

export const addHoldingInitial = (data) => {
    return dispatch => {
        dispatch(addHoldingStart())
        axiosService.addHolding(data)
            .then(res => {
                const data = res.data.ticker;
                const status = res.data.success;
                if (!status) {
                    dispatch(errorHolding());
                } else {
                    dispatch(addHolding(data));
                }
            })
            .catch(err => {
                dispatch(errorHolding());
            });

    }
}

export const updateHoldingInitial = (currentHoldings) => {
    return dispatch => {
        dispatch(updateHoldingStart());
        if (currentHoldings.length > 0) {
            axiosService.updateHolding(currentHoldings).then(
                res => {
                    console.log(res);
                    let newHoldingArr = [];
                    let count = 1;
                    for (let record of res) {
                        if (record.data.success) {
                            const value = record.data.ticker;
                            const obj = {
                                ...value,
                                id: count
                            };
                            newHoldingArr.push(obj);
                            count++;
                        }
                    }
                    dispatch(updateHolding(newHoldingArr));
                }
            ).catch(
                err => console.log(err)
            );
        } else {
            dispatch(updateHoldingStop());
        }


    }
}


