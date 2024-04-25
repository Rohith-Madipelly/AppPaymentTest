import { Button,  Linking,  StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
// import * as WebBrowser from 'expo-web-browser';
import { WebView } from 'react-native-webview';


const Linking123 = async () => {
  const url = 'exp://192.168.0.107:8081/--/ezewin/GamePage';
  try {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  } catch (error) {
    console.error('An error occurred', error);
  }
};



const Home = () => {
  const [result, setResult] = useState(false);
  console.log(result)

  const _handlePressButtonAsync = async () => {
    setResult(true)
    // return <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} />;
  };

  if (result) {
    return <WebView source={{ uri: 'https://cosmofeed.com/vp/6605d4c652d3ec00123e3a77' }} style={{ flex: 1 }} />
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 32 }}>
        {/* Home Page */}
        <Button title='Pay Now' onPress={_handlePressButtonAsync}></Button>
        <Button title='Linking123' onPress={Linking123}></Button>
      </Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})