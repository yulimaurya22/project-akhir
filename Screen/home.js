import React, {useState, useEffect} from 'react'
import { SafeAreaView, Text, View, FlatList, ActivityIndicator } from 'react-native'

const Item = ({name}) => {
    <View style ={styles.item}>
        <Text style={styles.title}>{name}</Text>

    </View>};
const Home = () => {

  //menampung data dari api
    const [data, setData] = useState([]);

    //fungsi untuk mengambil data
    const getDataFromApiAsync = async () => {
      try {
      let response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
      let json = await response.json()
      setData(json);
      }catch (error) {
        console.error(error);
      }
    }
  };

  //otomatis dijalankan
      

    return(
      <SafeAreaView style={styles.container}>
        {isLoading  ? (
            <ActivityIndicator style={styles.container}/>
        ) : (
        <FlatList
         data={DATA}
         renderItem={({item}) => <Item name= {Item.name}/>}
         keyExtractor={item => item.id}
         />
        )}
      </SafeAreaView>
    );


export default Home