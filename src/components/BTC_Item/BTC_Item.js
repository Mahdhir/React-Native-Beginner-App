import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Content } from 'native-base';
const BTC_Item = () => {
    return (
        <View style={styles.item}>
            <Text style={styles.name}>btc/aud{"\n"}</Text>
            <Text style={styles.value}>Rate:{"\n"}</Text>
            <Content>
                <Text style={styles.price}>0202020.9292929</Text>
            </Content>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9f9f9',
        padding: 20,
        marginBottom:10
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
        color: '#33cc33',
        fontSize: 20,
        textTransform: 'uppercase',
    }
});

export default BTC_Item;