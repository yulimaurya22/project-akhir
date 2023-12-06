import React from 'react'
import { SafeAreaView, Text, View, FlatList, ActivityIndicator } from 'react-native'

const Item = ({name}) => {
    <View style ={styles.item}>
        <Text style={styles.title}>{name}</Text>

    </View>
    
};
const Home = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
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

}
export default Home