import { View, Text, Button } from 'react-native'
import React from 'react'
import {Link, Stack } from 'expo-router'

const DayTwo = () => {
  return (
    <View>
    <Stack.Screen options={{title : 'Day 2', headerTitleAlign : 'center'}} />
    <Text >DayTwo Work</Text>

    <Link href= "/Days/Day2/onboarding" asChild >
      <Button title='OnBoarding Screen'  />
    </Link> 
    

    </View>
  )
}

export default DayTwo