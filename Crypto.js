import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider, connect } from 'react-redux';
import { createStore,applyMiddleware,compose,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/store/reducers/holding';
import * as actions from './src/store/actions/index';
import AddHolding from './src/screens/AddHolding/AddHolding';
import Crypto from './src/screens/CryptoHome/CryptoHome';

const mapDispatchToPropsHome = (dispatch) => {
    return {
        onUpdate: (result) => { dispatch(actions.updateHolding(result)) },
        onRemove:(id) => {dispatch(actions.removeHolding(id))}
    }
}

const mapStateToPropsHome = (state) => {
    return {
        holdings: state.holdingPage.holdings
    }
}

const mapDispatchToPropsAdd = (dispatch) => {
    return {
        onAdd:(data) => {dispatch(actions.addHoldingInitial(data))}
    }
}

const mapStateToPropsAdd = (state) => {
    return {
        holdings: state.holdingPage.holdings,
        error:state.holdingPage.error
    }
}

const CryptoContainer = connect(mapStateToPropsHome, mapDispatchToPropsHome)(Crypto);
const AddHoldingContainer = connect(mapStateToPropsAdd,mapDispatchToPropsAdd)(AddHolding);

const RootStack = createStackNavigator(
    {
        Home: CryptoContainer,
        AddHolding: AddHoldingContainer
    },
    {
        initialRouteName: 'Home',
        headerMode: "none"
    }
);




const AppContainer = createAppContainer(RootStack);


const reducer = combineReducers({
    holdingPage: reducers
});



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
));


export default class AppBonanza extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}