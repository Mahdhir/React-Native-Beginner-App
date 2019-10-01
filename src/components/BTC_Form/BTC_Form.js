import React from 'react';
import { Form, Item, Input, Label, Button, Text } from 'native-base';
import { Formik } from 'formik';
import {StyleSheet} from "react-native";

const BTC_Form = (props) => {
    return (
        <Formik
            initialValues={{ base: '', target: '' }}
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
                    <Input onChangeText={props.handleChange('base')}
                        onBlur={props.handleBlur('base')}
                        placeholder="(e.g. BTC,LTC,ETH)"
                    />
                </Item>
                <Item stackedLabel last>
                    <Label style={styles.lbl}>Display Currency Code</Label>
                    <Input onChangeText={props.handleChange('target')}
                        onBlur={props.handleBlur('target')}
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
        backgroundColor:'#616480'
    },
    lbl:{
        fontSize:12
    },
    form:{
        marginTop:20
    }
});

export default BTC_Form;