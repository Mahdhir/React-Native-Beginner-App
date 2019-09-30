import React, { Component } from 'react';
import { Container, Content, Footer,Text,View } from 'native-base';
import {StyleSheet} from 'react-native';
import Header from '../../components/BTC_Header/BTC_Header';
import Note from '../../components/BTC_Note/BTC_Note';
import Form from '../../components/BTC_Form/BTC_Form';

export default class AddHolding extends Component {
    backHandler=()=>{
        this.props.navigation.goBack();
    }

    addHolding = (values)=>{
        this.props.onAdd(values);
        this.backHandler();
    }


    render() {
        const title = "Add Holding";
        return (
            <Container>
                <Header title={title} screen="add_holding"  back={this.backHandler}/>
                <Content style={styles.content}>
                    <Note/>
                    <Form submit={(values)=>this.addHolding(values)} />
                </Content>
                <Footer style={styles.footer}>
                <Text style={styles.text}><Text style={styles.boldText}>Note:</Text> 
                This android allows you to track your Cryptocurrency without creating an account.
                 This means that all data is stored locally, and may be permanently deleted without warning.</Text>
                </Footer>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        height:70,
        backgroundColor: '#f4f4f4',
        padding: 20
    },
    text: {
        color: '#474747',
        fontSize: 10
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 12
    },
    content:{
        margin:20
    }
});