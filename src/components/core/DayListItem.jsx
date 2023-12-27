import { Text, View, StyleSheet, Pressable } from "react-native"
import { Link } from 'expo-router';


export default function DayListItem(props) {

  return (
    <Link href={`/Days/Day${props.day}`} asChild>
      <Pressable style={styles.box}>
      <Text style={styles.text}>{props.day}</Text>


    </Pressable>
    </Link>
    
  )
  
}


const styles = StyleSheet.create({

  box: {
    backgroundColor: '#f9EDE3',
    // width: 100,
    // height: 100,
    flex: 1,
    aspectRatio: 1,

    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '9b4521',
    borderRadius: 20,


    justifyContent: 'center',
    alignItems: 'center',


  },

  text: {
    color: '#9b4521',
    fontSize: 70,
    fontFamily: 'Inter',
  }

});
