import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, View, FlatList, ActivityIndicator } from 'react-native'


const Home = () => {

//menampung data dari api
  const [data, setData] = useState([]);

//fungsi untuk mengambil data
  const getDataFromApiAsync = async () => {
    try {
      let response = await fetch ('https://makeup-api.herokuapp.com/api/v1/products.json')
      let json = await response.json()
      setData(json);
    } catch (error) {
      console.error(error);
    }
  }
};

//otomatis dijalankan
useEffect(() => {
  getDataFromApiAsync()
}, [])

const renderItem = ({ item }) => {
  return (
    <view 
    style={{
      marginVertical: 5, 
      borderBottomWidth: 1, 
      borderBottomColor: '#ccc', 
      padding: 5, 
      }}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image style={{width:50, height:50, borderRadius:50/2}}
          source={{
            uri: image_link
          }}
          />
        <View style={{marginHorizontal:10}}>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
        </View>
     
      </View>
    </view>
  )
}

 ( 
  <View style={styles.container}>
    <Text>My List Make Up</Text>
    <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
    />
  </View>
);

export default Home