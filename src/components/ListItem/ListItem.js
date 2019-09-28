import React,{Component} from 'react';
import {List,ListItem,Icon,Text,Left,Right,Thumbnail,Body} from 'native-base';

const ListItemComponent = (props) => {
    
    const itemPress = (event) => {
        console.log(event);
        props.onItemPressed(event);
    }

    let listItem = props.places.map((item,i) => {
        return (
        <ListItem onPress={() => itemPress(i)} key={i} noIndent style={{ backgroundColor: "#cde1f9",paddingLeft:0,marginLeft:5 }} thumbnail>
        <Left>
        <Thumbnail square source={item.image} />
        </Left>
        <Body>
          <Text>{item.name}</Text>
        </Body>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
      );
    });
    // let listItem= 'text';
    return (
        <List>
            {listItem}
        </List>
    );
};

export default ListItemComponent;