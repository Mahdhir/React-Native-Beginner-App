import * as actionTypes from '../actions/actionTypes';

const initialState = {
    holdings: [],
    error: false,
    addHoldingStart:false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_HOLDING:{
            const test = state.holdings.concat(action.data);
            return {
                ...state,
                error: false,
                addHoldingStart:false,
                holdings: state.holdings.concat(action.data)
            }
        }

        case actionTypes.ADD_HOLDING_START:{
            return {
                ...state,
                addHoldingStart:true
            }
        }
            
        case actionTypes.REMOVE_HOLDING:

            return {
                ...state,
                holdings: state.holdings.filter((item, id) => {
                    return item.id !== action.id
                })
            }

        case actionTypes.UPDATE_HOLDING:
            return {
                ...state,
                holdings: action.data
            }
        case actionTypes.ERROR_HOLDING:
            return {
                ...state,
                addHoldingStart:false,
                error: true
            }
        default:
            return state;
    }
};

export default reducer;