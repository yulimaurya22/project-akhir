import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, ScrollView, Modal, TextInput } from 'react-native'
import COLORS from '../constants/colors'


const home = ({navigation}) => {

  const [list,setList] = useState([])
  const [modalSiswa,setModalSiswa] = useState(false)
  const [modalEdit,setModalEdit] = useState(false)

  const[first_name, setfirstName] = useState("");
  const[last_name, setlastName] = useState("");
  const[id, setId] = useState(null);
  const[email, setEmail] = useState("");

//otomatis dijalankan
  useEffect(() => {
    getDataStudents();
  }, [])

  //fungsi untuk mengambil data
const getDataStudents =  () => {
   fetch("https://reqres.in/api/users",{
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

  fetch("https://reqres.in/api/users"+item.id,{
    method : 'DELETE',

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
  const handleEdit = async () => {
    try {
      const apiUrl = 'https://reqres.in/api/users';
      const dataIdToUpdate =id; // Ganti dengan ID data yang ingin diubah
      const updatedData = {
        "first_name": first_name,
        "last_name" : last_name,
        "id": id,
        "email" : email

      };
  
      const response = await fetch(`${apiUrl}/${dataIdToUpdate}`, {
        method: 'PUT',
        //memproses data dalam format json
        headers: {
          'Content-Type': 'application/json',
         
        },
        //meengirim data dalam format json melalui permintaan http
        body: JSON.stringify(updatedData),
      });
      
      if (!response.ok) {
        throw new Error('Gagal mengedit data');
        
      }
     
    
      const responseData = await response.json();
      console.log('Data berhasil diubah:', responseData);
      getDataStudents();
      setModalEdit(false)
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  //fungsi save tambah data
  const handleSave = async () => {
     try {
      const apiUrl = 'https://reqres.in/api/users';
      const requestData = {
        "first_name": first_name,
        "last_name" : last_name,
        "id": id,
        "email" : email,
      };
  
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // tambahkan header lain jika diperlukan
        },
        body: JSON.stringify(requestData),
      });
  
      if (!response.ok) {
        throw new Error('Gagal menambahkan data');
      }
  
      const responseData = await response.json()
      console.log('Data berhasil ditambahkan:', responseData);
      getDataStudents();
      setModalSiswa(false);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  


//fungsi untuk tambah data
const handleCreate = () => {
 setModalSiswa(true)
}

//fungsi untuk close add data
const handleCloseModal = () => {
  setModalSiswa(false)
}

const handleCreateEdit = (item) => {
  //untuk memanggil data yang akan diedit
 setfirstName(item.first_name)
 setlastName(item.last_name)
 setId(item.id)
 setEmail(item.email)
  setModalEdit(true)
 }
 
 //fungsi untuk close add data
 const handleCloseEdit = () => {
   setModalEdit(false)
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
    <Text style={styles.txt_siswa}>Nama Depan Siswa</Text>
    <TextInput 
    style={styles.txt_input}
    placeholder={"Masukkan Nama"}
    value={first_name}
    onChangeText={(text)=>{
    setfirstName(text)
   }}
    />
     <Text style={styles.txt_siswa}>Nama Akhir Siswa</Text>
    <TextInput 
    style={styles.txt_input}
    placeholder={"Masukkan Nama"}
    value={last_name}
    onChangeText={(text)=>{
    setlastName(text)
   }}
    />



    <Text style={styles.txt_siswa}>ID Siswa</Text>
    <TextInput style={styles.txt_input}
     placeholder={"Masukkan ID"}
     value={id}
    onChangeText={(text)=>{
     setId(text)
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

 <Modal 
 visible={modalEdit}
 >

  <SafeAreaView>
    
  <View >
    <Text style={styles.txtBaru} >Edit Data Siswa</Text>
    <TouchableOpacity onPress={handleCloseEdit}>
      <Text style={styles.txt_close} >Close</Text>
    </TouchableOpacity>
  </View>
  
  <View >
    <Text style={styles.txt_siswa}>Nama Depan Siswa</Text>
    <TextInput 
    style={styles.txt_input}
    placeholder={"Masukkan Nama"}
    value={first_name}
    onChangeText={(text)=>{
    setfirstName(text)
   }}
    />
     <Text style={styles.txt_siswa}>Nama Akhir Siswa</Text>
    <TextInput 
    style={styles.txt_input}
    placeholder={"Masukkan Nama"}
    value={last_name}
    onChangeText={(text)=>{
    setlastName(text)
   }}
    />




    <Text style={styles.txt_siswa}>ID Siswa</Text>
    <TextInput style={styles.txt_input}
     placeholder={"Masukkan ID"}
     value={id}
    onChangeText={(text)=>{
     setId(text)
    }}/>

   

    <Text style={styles.txt_siswa}>Alamat Email</Text>
    <TextInput style={styles.txt_input}
     placeholder={"Masukkan Email"}
     value={email}
    onChangeText={(text)=>{
     setEmail(text)
    }}/>

    <TouchableOpacity style={styles.btn_save} onPress={handleEdit} >
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
        <Text> {item.email}</Text>        


        <TouchableOpacity
           onPress={()=>handleCreateEdit(item)}>
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


export default home

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
  },

  txtName:{
    fontSize : 18,
    fontWeight : "bold"
  },

  txt_edit:{
    fontSize : 15,
    marginTop : 5,
    fontWeight : "bold",
    color : "black",
    backgroundColor:"orange",
    marginLeft:100,
    textAlign : 'center',
    marginRight:10
  },

  txt_del :{
    fontSize : 15,
    marginTop : 5,
    color : "white",
    textAlign:'right',
    backgroundColor:"brown",
    fontWeight : "bold",
    marginLeft:100,
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
    fontSize : 25,
    fontWeight : "bold",
    color : COLORS.white,
    textAlign : 'center',
    padding : 15,
    backgroundColor : COLORS.primary
  },

  txt_input :{
    padding:10,
    borderWidth :1,
    borderColor:"#888",
    marginTop:5,
    marginBottom : 10,
    borderRadius : 5,
    marginRight:35,
    marginLeft:35
  },

  txt_siswa :{
    fontSize : 10,
    marginTop:10, 
    fontWeight : "bold",
    marginRight:35,
    marginLeft:35
  },

  btn_save:{
    padding:10,
    borderWidth :1,
    backgroundColor:COLORS.secondary,
    borderColor:"white",
    borderRadius : 5,
    marginRight:35,
    marginLeft:35
  },

  txt_save:{
    fontSize : 20,
    color : "white",
    fontWeight: "bold",
    textAlign : 'center'

  }

})