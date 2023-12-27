import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import DayListItem from '../components/core/DayListItem';




const days = [...Array(24)].map((value, index) => (index + 1))


export default function HomeScreen() {

 
  return (

    <View style={styles.container}>

      <FlatList
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.coulum}
        numColumns={2}
        data={days}
        renderItem={({ item }) => <DayListItem day={item} />}

      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },

  content: {

    gap: 10,
    padding: 15,
    paddingTop: 30,
  },

  coulum: {
    gap: 10,
  },


});
