import React from 'react';
import { Form, Item, Input, Label, Button, Text } from 'native-base';
import { Formik } from 'formik';
import {StyleSheet} from "react-native";

const BTC_Form = (props) => {
    return (
        <Formik
            initialValues={{ code: '', currency: '' }}
            onSubmit={values => {
                const obj = {
                    ...values,
                    id:Math.random().toFixed(3) * 1000
                }
                props.submit(obj);
            }}
        >{props => (
            <Form style={styles.form}>
                <Item stackedLabel>
                    <Label style={styles.lbl}>Crypto Code</Label>
                    <Input onChangeText={props.handleChange('code')}
                        onBlur={props.handleBlur('code')}
                        placeholder="(e.g. BTC,LTC,ETH)"
                    />
                </Item>
                <Item stackedLabel last>
                    <Label style={styles.lbl}>Display Currency Code</Label>
                    <Input onChangeText={props.handleChange('currency')}
                        onBlur={props.handleBlur('currency')}
                    placeholder="(e.g. USD,CAD,AUD)" />
                </Item>
                <Button style={styles.btn} full onPress={props.handleSubmit}>
                    <Text>Submit</Text>
                </Button>
            </Form>
        )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    btn:{
        marginTop:15,
        backgroundColor:'#444445'
    },
    lbl:{
        fontSize:12
    },
    form:{
        marginTop:20
    }
});

export default BTC_Form;