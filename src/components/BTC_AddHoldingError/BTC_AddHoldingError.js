import React from 'react';
import {View, Text} from 'native-base';
import {StyleSheet} from 'react-native';
const BTC_AddHoldingError = () => {
    return (
        <View>
            <Text style={styles.errorMsg}>
            Sorry, that combination is not currently available. Make sure to only include a single code.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    errorMsg:{
        color:'#fff',
        backgroundColor:'#eb4f44',
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#d63929',
        marginTop:30,
        padding:10
    }
});

export default BTC_AddHoldingError;