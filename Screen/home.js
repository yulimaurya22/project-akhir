import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, View, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import COLORS from '../constants/colors'


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

  //fungsi untuk Delete
const handelDelete = (item) => {

  fetch("https://reqres.in/api/users/2",{
    method : "DELETE",
    body : JSON.stringify({
      "reqres_id" : item.reqres_id
    }),
    headers :  {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    }
   }).then(res=>{
    return res.json()
   }).then(res=>{
    console.log(res)
    getDataStudents();
   }).catch(err=>{
    console.log(err)
   })
  }

//fungsi untuk edit
const handelEdit = (item) => {

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
  <Text style={styles.txtHeader}>Data Siswa SMK Negeri 1 Tri Sakti</Text>
</View>
<View>
  {list.map((item,index)=>{
    return (

      <View>
      <View key={index} style={styles.itemList}>
        <Text style={styles.txtName}> {index+1}. {item.first_name} {item.last_name}</Text>
        <Text> {item.id}</Text>
        <Text> {item.gender == 1 ? "Male" : "Female"}</Text>
        <Text> {item.email}</Text>        


        <TouchableOpacity
           onPress={()=>handelEdit(item)}>
          <Text style={styles.txt_edit}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>handelDelete(item)}>
          <Text style={styles.txt_del}>Delete</Text>
          </TouchableOpacity>
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
    paddingVertical : 15,
    borderBottomColor: COLORS.white,
    borderBottomWidth:0.5,
    marginRight:300,
    marginLeft:300
    
  },

  txtName:{
    fontSize : 18,
    fontWeight : "bold"
  },

  txt_edit:{
    fontSize : 18,
    marginTop : 5,
    fontWeight : "bold",
    color : "black",
    backgroundColor:"yellow",
    marginLeft:795,
    textAlign : 'center',
    marginRight:20
  },

  txt_del :{
    fontSize : 18,
    marginTop : 5,
    color : "white",
    textAlign:'right',
    backgroundColor:"brown",
    fontWeight : "bold",
    marginLeft:785,
    textAlign : 'center',
    marginRight:10
  },
})