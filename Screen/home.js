import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, ScrollView, Modal, TextInput } from 'react-native'
import COLORS from '../constants/colors'


const Home = ({navigation}) => {

  const [list,setList] = useState([])
  const [modalSiswa,setModalSiswa] = useState(false)

  const[name, setName] = useState("");
  const[id, setId] = useState("");
  const[gender, setGender] = useState("");
  const[email, setEmail] = useState("");

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
const handleDelete = (item) => {

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
const handleEdit = (item) => {

}

//fungsi untuk tambah data
const handleCreate = () => {
 setModalSiswa(true)
}

//fungsi untuk close add data
const handleCloseModal = () => {
  setModalSiswa(false)
}

const handleSave = () => {
  fetch("https://reqres.in/api/users",{
    method : "POST",
    body : JSON.stringify(
      {
        "name": name,
        "job": gender,
        "id": id,
        "createdAt": email
    }),
    headers :  {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    }
   }).then(res=>{
    return res.json()
   }).then(res=>{
    getDataStudents();
    setModalSiswa(false)
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
    
 <Modal 
 visible={modalSiswa}
 >

  <SafeAreaView>
  <View >
    <Text style={styles.txtBaru} >Add Data Siswa</Text>
    <TouchableOpacity onPress={handleCloseModal}>
      <Text style={styles.txt_close} >Close</Text>
    </TouchableOpacity>
  </View>

  <View >
    <Text style={styles.txt_siswa}>Nama Siswa</Text>
    <TextInput 
    style={styles.txt_input}
    placeholder={"Masukkan Nama"}
    value={name}
    onChangeText={(text)=>{
    setName(text)
   }}
    />

    <Text style={styles.txt_siswa}>ID Siswa</Text>
    <TextInput style={styles.txt_input}
     placeholder={"Masukkan ID"}
     value={id}
    onChangeText={(text)=>{
     setId(text)
    }}/>

    <Text style={styles.txt_siswa}>Jenis Kelamin</Text>
    <TextInput style={styles.txt_input}
     placeholder={"Jenis Kelamin"}
     value={gender}
    onChangeText={(text)=>{
     setGender(text)
    }}/>

    <Text style={styles.txt_siswa}>Alamat Email</Text>
    <TextInput style={styles.txt_input}
     placeholder={"Masukkan Email"}
     value={email}
    onChangeText={(text)=>{
     setEmail(text)
    }}/>

    <TouchableOpacity style={styles.btn_save} onPress={handleSave} >
      <Text style={styles.txt_save}>Simpan</Text>
    </TouchableOpacity>

  </View>
  </SafeAreaView>
 </Modal>

<View>
  <Text style={styles.txtHeader}>Data Siswa SMK Negeri 1 Tri Sakti</Text>
  <TouchableOpacity style= {{padding:10}} onPress={handleCreate}>
    <Text
    style={{color:"navy",
    fontSize : 20,
    fontWeight: "bold",
    textAlign : 'center'}}>
      + New</Text>
  </TouchableOpacity>
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
           onPress={()=>handleEdit(item)}>
          <Text style={styles.txt_edit}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>handleDelete(item)}>
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
    backgroundColor:"orange",
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

  txt_close :{
      fontSize : 20,
      backgroundColor: COLORS.grey,
      fontWeight: "bold",
      textAlign : 'center'
  },

  txtBaru :{
    fontSize : 30,
    fontWeight : "bold",
    color : COLORS.white,
    textAlign : 'center',
    padding : 20,
    backgroundColor : COLORS.primary
  },

  txt_input :{
    padding:10,
    borderWidth :1,
    borderColor:"#888",
    marginTop:5,
    marginBottom : 20,
    marginRight:350,
    marginLeft:350,
    borderRadius : 5
  },

  txt_siswa :{
    fontSize : 18,
    marginTop:15, 
    fontWeight : "bold",
    marginRight:350,
    marginLeft:350
  },

  btn_save:{
    padding:10,
    borderWidth :1,
    backgroundColor:COLORS.secondary,
    borderColor:"white",
    marginRight:700,
    marginLeft:700
  },

  txt_save:{
    fontSize : 20,
    color : "white",
    fontWeight: "bold",
    textAlign : 'center'

  }

})