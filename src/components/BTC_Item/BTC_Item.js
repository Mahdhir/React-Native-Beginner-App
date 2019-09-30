import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Content, ListItem, Button, Icon } from 'native-base';
// import { SwipeRow } from 'react-native-swipe-list-view';
import Swipeable from 'react-native-swipeable-row';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import * as actions from '../../store/actions/index';

const BTC_Item = (props) => {
    let item = null;
    const rightButtons = [
        <Button style={styles.btn} onPress={() => props.onRemove(props.id)}><Icon name="trash"/></Button>
    ];
    if (props && props.base && props.target && props.price) {
        item = (<View style={styles.item}>

            <Text style={styles.name}>{props.base}/{props.target}{"\n"}</Text>
            <Text style={styles.value}>Rate:{"\n"}</Text>
            <Text style={styles.price}>{props.price}</Text>

        </View>)
    }
    return (
        <Swipeable rightButtons={rightButtons}>
            {item}
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9f9f9',
        padding: 20,
        marginBottom: 10
    },
    name: {
        fontSize: 12.7,
        color: "#474747",
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    value: {
        fontSize: 10,
        fontWeight: 'bold',
        color: "#474747",
        textTransform: 'uppercase',
    },
    price: {
        color: '#32db64',
        fontSize: 20,
        textTransform: 'uppercase',
    },
    btn:{
        height:111,
        backgroundColor:'red',
        paddingLeft:15
    }
  
});


const mapDispatchToProps = (dispatch) =>{ 
    return {
        onRemove:(id)=> {dispatch(actions.removeHolding(id))}
    }
}

export default connect(null,mapDispatchToProps)(BTC_Item);