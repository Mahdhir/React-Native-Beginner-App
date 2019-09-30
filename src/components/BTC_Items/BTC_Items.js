import React from 'react';
import Item from '../BTC_Item/BTC_Item';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';

const BTC_Items = (props) => {
    let items = [];
    let itemsMap = [];
    if (props.items) {
        items = props.items;
        items.map((item,index) => {
            itemsMap.push(
                <Item key={index} id={item.id} base={item.ticker.base} target={item.ticker.target} price={item.ticker.price} />
            );
        })
    }
    return (
        itemsMap
    );
};
const mapStateToProps = (state) => {
    return {
        items: state.holdingPage.holdings
    }

}

const styles = StyleSheet.create({
    container:{
        height:'100%'
    }
});
export default connect(mapStateToProps)(BTC_Items);