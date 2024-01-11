import { View, Text , StyleSheet , ScrollView } from 'react-native'
import React from 'react'
import Markdown from 'react-native-markdown-display';

const copy = `# Dummy Markdown Content

## Introduction

Welcome to this dummy markdown document. In this document, we will explore various sections to demonstrate the use of markdown syntax.

## Text Formatting

*This text is italicized.*

**This text is bold.**

***This text is bold and italicized.***

## Lists

### Unordered List

- Item 1
- Item 2

## Links

[Visit OpenAI](https://www.openai.com)

## Images

![Dummy Image](https://placekitten.com/300/200)

## Code

Inline code: 'print("Hello, World!")'

Code block:

python
def greet(name):
    print(f"Hello, {name}!")

greet("John") `




const editor = () => {
  return (
  
    <ScrollView style = {styles.page}>
      <Markdown style={MarkdownStyles}>
            {copy}
          </Markdown>
    </ScrollView>
    
  )
}


export default editor
const styles = StyleSheet.create({

  page : {
    backgroundColor : 'white',
    flex : 1,
    padding : 10,
  }
  
})


const MarkdownStyles = StyleSheet.create({
  
   heading1 : {
    fontFamily : 'InterBold',
    color : 'red'
   },

   heading2 : {
    fontFamily : 'InterBold',
    color : 'grey'
   },

   body :  {

    fontFamily : 'Inter',
    fontSize : 16,

   }

})