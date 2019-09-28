import React,{useEffect} from 'react';
import { Modal,Image,StyleSheet,BackHandler } from 'react-native';
import { Button, Text, View, H1 } from 'native-base';
const PlaceDetail = (props) => {

    return (
        <Modal animationType="slide" onRequestClose={() => {
            props.onModalClosed();
          }}>
            <View style={styles.modalContainer}>
                <Image style={styles.image} source={props.item.image} />
                <H1 style={styles.placeName}>
                    {props.item.name}
                </H1>
                <Button info transparent full onPress={props.onModalClosed}>
                    <Text>
                        Hide Me
                   </Text>
                </Button>
                <Button full danger transparent onPress={() => props.onItemDelete(props.item.key)}>
                    <Text>
                        Delete !
                   </Text>
                </Button>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer:{
        margin:30
    },
    image:{
        height:300,
        width:'100%'
    },
    placeName:{
        textAlign:"center",
        marginTop:20
    }
});

export default PlaceDetail;