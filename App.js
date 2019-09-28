import React, { Component } from 'react';
import {BackHandler} from 'react-native';
import {
  Container, Header, Title,
  Content, Footer, FooterTab, Button,
  Left, Right, Body, Icon, Text, Item,
  Input
} from 'native-base';

import ListItemComponent from './src/components/ListItem/ListItem';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';



class App extends Component {
  state = {
    currentInput: '',
    places: [],
    selectedPlace: null
  }
  _input = null;
  backHandler;

  onTextChange = (text) => {
    this.setState({
      currentInput: text
    })
  }

  filterItemOnPress = (i) => {
    let item = this.state.places;
    const newArr = item.find((value, index) => {
      return index == i;
    });
    this.setState({
      selectedPlace: newArr
    });
  }

  deleteItemOnPress = (key) => {
    let item = this.state.places;
    const newArr = item.filter((value, index) => {
      return value.key !== key;
    });
    this.setState({
      places: newArr,
      selectedPlace:null
    });
  }

  modalClose = () => {
    this.setState({
      selectedPlace:null
    });
    
  }

  // componentDidMount() {
  //   console.log('Component Mounted');
  //   this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
  //     console.log('Back Pressed');
  //     this.modalClose(); // works best when the goBack is async
  //     return true;
  //   });
  // }

  addTextToListHandler = () => {

    let trimmedText = this.state.currentInput.trim();
    if (trimmedText != '') {
      let item = this.state.places.concat({
        key:Math.random(),
        name: trimmedText,
        image: {
          uri: `https://picsum.photos/id/${Math.round(1000 * Math.random())}/300`
        }
      });
      this.setState({
        places: item,
        currentInput: ''
      });
      this._input._root.clear();
    }
  }

  render() {
    let modal = null;
    if (this.state.selectedPlace) {
      modal = (
      <PlaceDetail item={this.state.selectedPlace} onModalClosed={this.modalClose} onItemDelete={(key) => this.deleteItemOnPress(key)}/>
      );
    }
    return (
      <Container>
        <Header transparent style={{ borderStyle: 'solid', borderBottomColor: '#e231a' }}>
          <Left>
            <Button info transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            {/* <Title>Places Application</Title> */}
            <Item bordered style={{ borderBottomColor: '#ffff' }} >
              <Input placeholder="Type Here"
                onChangeText={this.onTextChange}
                ref={(c) => this._input = c}
              />
            </Item>
          </Body>
          <Right>
            <Button info transparent onPress={this.addTextToListHandler}>
              <Text>Add</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          {modal}
          <ListItemComponent places={this.state.places} onItemPressed={this.filterItemOnPress} />
        </Content>
      </Container>
    );
  }
}

export default App;