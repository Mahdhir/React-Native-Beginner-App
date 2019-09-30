import React from 'react';
import { View, Text } from 'native-base';
import {StyleSheet} from 'react-native';

const BTC_Note = () => {
    return (
        <View style={styles.note}>
            <Text style={styles.content}>To add a holding you will need to supply the appropriate symbol for the cryptocurrency,
                and the symbol for the currency you would like to display the values in.{"\n\n"}
            <Text style={styles.boldText}>Note:</Text> Listed prices are estimated. Rates may vary significantly across different exchanges.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    note:{
        marginTop:10,
        padding:20,
        backgroundColor:'#f4f4f4'
    },
    content:{
        fontSize:11
    },
    boldText:{
        fontSize:11,
        fontWeight:'bold'
    }
});
export default BTC_Note;