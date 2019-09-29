import React from 'react';
import {StyleSheet} from 'react-native';

import {
    Container, Header, Title,
    Content, Footer, FooterTab, Button,
    Left, Right, Body, Icon, Item,
    Input, View, H1,Text
} from 'native-base';

const BTC_Header = () => {
    return (
        <Header style={styles.header}>
                    <Left>
                        <Button transparent>
                            <Icon name='logo-bitcoin' />
                        </Button>
                    </Left>
                        <Title style={styles.title}>CryptoTracker</Title>
                    <Right>
                        <Button transparent>
                            <Icon name="add"/>
                        </Button>
                    </Right>
                </Header>
    );
};

const styles = StyleSheet.create({
    title:{
        marginTop:14,
        marginLeft:60,
        fontFamily:'newCourier',
        fontSize:20,
        letterSpacing:5
    },
    header:{
        backgroundColor: '#585858'
    }
});
export default BTC_Header;