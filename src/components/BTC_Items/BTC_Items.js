import React from 'react';
import Item from '../BTC_Item/BTC_Item';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { List } from 'native-base';

const BTC_Items = (props) => {
    let items = [];
    let itemsMap = [];
    if (props.items) {
        items = props.items;
        items.map((item, index) => {
            itemsMap.push(
                <Item key={index} id={item.id} base={item.base} target={item.target} price={item.price} />
            );
        })
    }
    return (
        <List>
            {itemsMap}
        </List>
    );
};
const mapStateToProps = (state) => {
    return {
        items: state.holdingPage.holdings
    }

}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    }
});
export default connect(mapStateToProps)(BTC_Items);