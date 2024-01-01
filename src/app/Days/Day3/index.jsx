import { View, Text, Button } from 'react-native'
import React from 'react'
import {Link, Stack } from 'expo-router'

const DayTwo = () => {
  return (
    <View>
    <Stack.Screen options={{title : 'Day 3 Markdown', headerTitleAlign : 'center'}} />
    <Text >DayThree Work</Text>

    <Link href= "/Days/Day3/editor" asChild >
      <Button title='Go To Editor'  />
    </Link> 
    

    </View>
  )
}

export default DayTwo