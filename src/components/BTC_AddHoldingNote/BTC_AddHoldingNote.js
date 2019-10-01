import React from 'react';
import { View, Text, Button } from 'native-base';
import { StyleSheet } from 'react-native';

const BTC_AddHoldingNote = (props) => {
    return (


            < View style = { styles.note } >
                <Text style={styles.content}><Text style={styles.boldText}>Crypto Watcher</Text> is a <Text style={styles.boldText}>R</Text>eact <Text style={styles.boldText}>N</Text>ative Application that allows you to
                 keep track of the approximate worth of your cryptocurency portfolio.{"\n\n"}
                <Text style={styles.boldText}>No account required, </Text>just hit the button below to start tracking your coins in whatever currency you wish!
            </Text>
            <Button style={styles.btn} full onPress={props.clicked}><Text>Add Coins</Text></Button>
        </View >
    );
};


const styles = StyleSheet.create({
    note: {
        margin: 25,
        padding: 20,
        backgroundColor: '#f4f4f4'
    },
    content: {
        fontSize: 13
    },
    boldText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    btn:{
        backgroundColor:'#07152b',
        marginTop:15
    }
});

export default BTC_AddHoldingNote;