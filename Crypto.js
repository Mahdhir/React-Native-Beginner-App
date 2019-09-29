import React, { Component } from 'react'; 4
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Container, Content, Text, Footer, View } from 'native-base';
// import {Footer,FooterTab,Button,Text} from 'native-base';
import Header from './src/components/BTC_Header/BTC_Header';
import Item from './src/components/BTC_Item/BTC_Item';
class Crypto extends Component {


    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Item/>
                    <Item/>
                    <Item/>
                </Content>
                <Footer style={styles.footer}>
                    <Text style={styles.text}><Text style={styles.boldText}>Disclaimer:</Text> Do not use this application to make investment decisions. Displayed prices may not reflect actual prices.</Text>
                </Footer>
            </Container >
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#f4f4f4',
        padding: 15
    },
    text: {
        color: '#474747',
        fontSize: 10
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 12
    }
});
export default Crypto;