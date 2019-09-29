import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  Container, Header, Title,
  Content, Footer, FooterTab, Button,
  Left, Right, Body, Icon, Text, Item,
  Input,View
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
        <Button onPress={() => this.props.navigation.navigate('Home')}><Text>Click</Text></Button>
          {modal}
          <ListItemComponent places={this.state.places} onItemPressed={this.filterItemOnPress} />
        </Content>
      </Container>
    );
  }
}


class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button onPress={() => this.props.navigation.navigate('Details')}><Text>Click</Text></Button>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: App,
  },
  {
    initialRouteName: 'Details',
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class AppBonanza extends Component {
  render() {
    return <AppContainer />;
  }
}