import React, { Component } from 'react';
import { Container, Content, Footer, Text } from 'native-base';
import { StyleSheet, RefreshControl } from 'react-native';
import Header from '../../components/BTC_Header/BTC_Header';
// import Item from '../../components/BTC_Item/BTC_Item';
import Items from '../../components/BTC_Items/BTC_Items';
import SplashScreen from 'react-native-splash-screen'
import AddNote from '../../components/BTC_AddHoldingNote/BTC_AddHoldingNote';

class Crypto extends Component {

    goToAddPageHandler = () => {
        this.props.navigation.navigate('AddHolding');
    }


    componentDidMount(){
        console.log('I mounted for the first time');
        SplashScreen.hide();
        this.props.onInitialLoad();
    }


    render() {
        const title = "Crypto Tracker";
        let note = null;
        if(this.props.holdings.length==0){
            note = <AddNote clicked={this.goToAddPageHandler}/>
        }
        return (
            <Container>
                <Header title={title} screen="home" clicked={this.goToAddPageHandler} />
                <Content refreshControl={
                    <RefreshControl
                        refreshing={this.props.isRefreshing}
                        onRefresh={() => this.props.onUpdate(this.props.holdings)}
                        title="Loading..."
                    />
                }>
                    {note}
                    <Items />
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
        height: 70,
        backgroundColor: '#f4f4f4',
        padding: 15
    },
    text: {
        color: '#474747',
        fontSize: 10,
        marginTop: 10
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 12
    }
});

export default Crypto;