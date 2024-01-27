import { View, Text, Button } from 'react-native'
import React from 'react'
import {Link, Stack } from 'expo-router'

const DayFour = () => {
  return (
    <View>
    <Stack.Screen options={{title : 'Day 4 animate splash screen', headerTitleAlign : 'center'}} />
    <Text >DayFour Work</Text>

    <Link href= "/Days/Day4/animation" asChild >
      <Button title='Go To AnimationScreen'  />
    </Link> 


    <Link href= "/Days/Day4/splash" asChild >
      <Button title='Splash Screen Animation'  />
    </Link> 
    

    </View>
  )
}

export default DayFour;