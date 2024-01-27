import { View, Text, Button } from 'react-native'

import React, { useRef } from 'react'

import LottieView from 'lottie-react-native';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';






const AnimationScreen = () => {

  const animation = useRef<LottieView>(null);

  return (
    <View style = {{flex : 1, alignItems : 'center', justifyContent : 'center',  backgroundColor : 'black'}}>

      <Stack.Screen  options={{ headerShown : false}} />
      <StatusBar style="light" />

      <LottieView
        ref={animation}
        autoPlay
        style={{
          width : "80%",
          maxWidth : 400,
          
        }}

        source={require('../../../../assets/lottie/Animation - 1706079200212.json')}
      />

       {/* <Button title='Play' onPress={() => animation.current?.play()} />
       <Button title='Pause' onPress={() => animation.current?.pause()} /> */}
    </View>
  )
}

export default AnimationScreen