import * as actionTypes from '../actions/actionTypes';
import * as asyncStorage from '../../services/asyncStorage';

const initialState = {
    holdings: [],
    error: false,
    addHoldingStart: false,
    addHoldingFinish:false,
    isRefreshing: false
}

const key = 'holdings';
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_HOLDING: {
            const id = state.holdings.length + 1;
            const obj = {
                ...action.data,
                id: id
            };
            const newData = state.holdings.concat(obj);
            asyncStorage.storeData(key, JSON.stringify(newData));
            return {
                ...state,
                error: false,
                addHoldingStart: false,
                addHoldingFinish:true,
                holdings: newData
            }
        }

        case actionTypes.ADD_HOLDING_START: {
            return {
                ...state,
                addHoldingStart: true,
                addHoldingFinish:false
            }
        }

        case actionTypes.REMOVE_HOLDING: {
            const data = state.holdings.filter((item, id) => {
                return item.id !== action.id
            });
            asyncStorage.storeData(key, JSON.stringify(data));
            return {
                ...state,
                holdings: data
            }
        }
        case actionTypes.UPDATE_HOLDING:
            asyncStorage.storeData(key, JSON.stringify(action.data));
            return {
                ...state,
                holdings: action.data,
                isRefreshing: false,
                error: false
            }

        case actionTypes.START_REFRESHING:


            return {
                ...state,
                isRefreshing: true
            }
        case actionTypes.STOP_REFRESHING:


            return {
                ...state,
                isRefreshing: false
            }

        case actionTypes.ERROR_HOLDING:
            return {
                ...state,
                addHoldingStart: false,
                addHoldingFinish:true,
                error: true
            }

        case actionTypes.ERROR_HOLDING_CLEAR:
            return {
                ...state,
                error: false,
                addHoldingFinish:false,
                addHoldingStart:false
            }

        case actionTypes.ON_INITIAL_LOAD:
            return {
                ...state,
                holdings:action.data
            }
        default:
            return state;
    }
};

export default reducer;