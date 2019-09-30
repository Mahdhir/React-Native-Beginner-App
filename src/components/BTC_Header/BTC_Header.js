import React from 'react';
import { StyleSheet } from 'react-native';

import {
    Header, Title, Button,
    Left, Right, Icon
} from 'native-base';

const BTC_Header = (props) => {
    // console.log(props);
    const left = props.screen === 'home' ? (
        <Button transparent>
            <Icon name='logo-bitcoin' />
        </Button>)
        : (
            <Button transparent onPress={props.back}>
                <Icon name='arrow-back' />
            </Button>
        );
        
    const right = props.screen === 'home' ? (
        <Button transparent onPress={props.clicked}>
            <Icon name="add" />
        </Button>)
        : null;

    return (
        <Header style={styles.header}>
            <Left>
                {left}
            </Left>
            <Title style={styles.title}>{props.title}</Title>
            <Right>
                {right}
            </Right>
        </Header>
    );
};

const styles = StyleSheet.create({
    title: {
        marginTop: 14,
        marginLeft: 60,
        fontFamily: 'newCourier',
        fontSize: 20,
        letterSpacing: 5
    },
    header: {
        backgroundColor: '#585858'
    }
});
export default BTC_Header;