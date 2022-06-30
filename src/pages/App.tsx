import React, { useEffect, useState } from 'react';
import type {ReactNode} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Button,
  PermissionsAndroid,
  ToastAndroid,
  BackHandler
} from 'react-native';

import { SetServer } from '../IntentDigitalHubService/BRIDGE/SetServer';
import IntentDigitalHubCommandStarter from '../IntentDigitalHubService/IntentDigitalHubCommandStarter';


import XmlStoreService from '../XmlStorageService/XmlStoreService';

const Toast = ({ visible, message }) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    return null;
  }
  return null;
};


const App: () => ReactNode = () => {

  const [visibleToast, setvisibleToast] = useState(false);

  //Ao entrar na aplicação, para prosseguir, é necessário a permissão de acesso ao armazenamento externo
  useEffect(() => {
    
    //Desabilite o Toast ao entrar
    setvisibleToast(false), [visibleToast];

     //Pede a permissão de armazenamento
    askWritePermission();
        return () => {
    }
  }, []);

  async function askWritePermission() : Promise<void> {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);

    //Caso a permissão não seja concedida, mostre o toast com a informação e feche a aplicação
    if (granted == PermissionsAndroid.RESULTS.DENIED || granted == PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN){
      setvisibleToast(true);

      BackHandler.exitApp();
    }
    else {
      //Após a permissão ser concedida, salav no diretório do dispositivo todos os XMLs que serão utilizados
      XmlStoreService.allocateXmls();
    } 
  }

  const onPress = async () => {
    IntentDigitalHubCommandStarter.startCommand(new SetServer('192.168.0.1', 3000, 3001),
      (result) => {
        alert(result);
      }
    );
  };

  return (

      <View style={styles.container}>
      <Toast visible={visibleToast} message="É necessário conceder a permissão para várias funcionalidades da aplicação!" /> 
      <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}/>
      </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#888888",
    padding: 8
  }
});

export default App;
