import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, View, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import COLORS from '../constants/colors'
import { Center } from 'native-base'

const Home = ({navigation}) => {

  const [list,setList] = useState([])

//otomatis dijalankan
  useEffect(() => {
    getDataStudents();
  }, [])


  //fungsi untuk mengambil data
const getDataStudents =  () => {
   fetch("https://reqres.in/api/users?page=2",{
    method : "GET",
    headers :  {
      "Content-Type" : "application/json"
    }
   }).then(res=>{
    return res.json()
   }).then(res=>{
    var data = res.data
    setList(data)
   }).catch(err=>{
    console.log(err)
   })
     
  }    

return (
  <SafeAreaView style={styles.bg}>
<SafeAreaView style={styles.container}>
  <View style={styles.headerBar}>
    <Text style={styles.txtBar}>HOME</Text>
  </View>

  <ScrollView 
  contentContainerStyle={{
    padding:20,
    backgroundColor : COLORS.grey
    }}>
    
<View>
  <Text style={styles.txtHeader}>List Student</Text>
</View>
<View>
  {list.map((item,index)=>{
    return (

      <View style={styles.icon}>
      <View key={index} style={styles.itemList}>
        <Text> {item.id}</Text>
        <Text style={styles.txtName}> {item.first_name} {item.last_name}</Text>
        <Text> {item.gender == 1 ? "Male" : "Female"}</Text>
        <Text> {item.email}</Text>
        
      </View>
        
      </View>  
     
    )}
    )}
</View>
</ScrollView>
</SafeAreaView>
</SafeAreaView>
  )
}


export default Home

const styles = StyleSheet.create({
  bg : {
    backgroundColor : COLORS.secondary
  },
container : {
  padding : 20,

  
},

  headerBar : {
    padding : 20,
    backgroundColor : COLORS.primary
   
  },
  
  txtBar :{
    fontSize : 22,
    fontWeight : "bold",
    color : COLORS.white
    
  },
  txtHeader:{
    padding: 15,
    fontSize : 30,
    fontWeight : "bold",
    width: "100%",
    borderBottomWidth:0.5,
   textAlign : 'center'
   
  },

  itemList: {
    padding : 6,
    paddingVertical : 15,
    borderBottomColor: COLORS.white,
    borderBottomWidth:0.5
    
  },

  icon :{

  },

  txtName:{
    fontSize : 18,
    fontWeight : "bold"
  },
})