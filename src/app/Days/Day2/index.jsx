import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const DayTwo = () => {
  return (
    <View>
    <Stack.Screen options={{title : 'Day 2', headerTitleAlign : 'center'}} />
    <Text style = {{fontFamily : 'AmaticBold' , fontSize : 100}} >DayTwo Details</Text>
    </View>
  )
}

export default DayTwo