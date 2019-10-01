import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key,value) => {
    try {
      await AsyncStorage.setItem(key,value);
      console.log('Done.')
    } catch (e) {
      // saving error
      console.log('ERROR SAVING DATA');      
    }

  }

export const getData = async (key) => {
    try {
      const value = AsyncStorage.getItem(key)
      return value;
    } catch(e) {
      // error reading value
      console.log('ERROR READING DATA FROM STORAGE ' + key);
      
    }
  }

export const  removeValue = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log('Done Removing '+key);
    } catch(e) {
      // remove error
      console.log('ERROR REMOVING ' + key);
    }
  }


