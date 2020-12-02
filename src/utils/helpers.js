import { Platform, AsyncStorage } from "react-native";
import * as Google from 'expo-google-app-auth';
export const prefix = Platform.OS=== "ios"?"ios":"md";

const config = {
    iosClientId: `<YOUR_IOS_CLIENT_ID>`,
    androidClientId: `653599446577-08r879ikomgp1tm61grp1g6e85sjhjcf.apps.googleusercontent.com`,
    iosStandaloneAppClientId: `653599446577-eaph20qcvqj12008k85m85ao07k5an8p.apps.googleusercontent.com`,
    androidStandaloneAppClientId: `<YOUR_ANDROID_CLIENT_ID>`,
  };

  export const auth = async()=>{
      try {
          const {user, type}= await Google.logInAsync(config);
          console.log("result:", type);
          if (type=== "success") {
              //stocker l'utilisateur dans la BDD
              //stocker l'utilisateur dans la memoir interne
              const {name, photoUrl, email} = user;
              await AsyncStorage.setItem('user', JSON.stringify({
                  name,
                  photoUrl,
                  email
              }));
              //naviguer vers l'écran Home
              console.log('naviguer vers home');              
          }
          
      } catch (e) {
          console.log("error auth", e);          
      }
  }

  export const renderInitialScreen = async ()=>{
      try {
          const user = await AsyncStorage.getItem('user');
          JSON.parse(user);
          //si user existe, on retourne une chaine de charactere (pour dire l'écran Home) sion Login
          return user ? "Home": "Login";
          
      } catch (e) {
          console.error('error render initial screen',e);          
      }
  }