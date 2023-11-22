import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Platform, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
 const PostItems = () =>{
  const navigation = useNavigation();
    return(
      
        <Pressable onPress={()=>{
          navigation.navigate("PostDetails")
        }} style={styles.container}>
          
        <Text style={styles.infotext}></Text>
        <StatusBar style="auto" />
        <View style={styles.postWrap}>
          <Image style={styles.postImage} source={{ uri: 'https://picsum.photos/200/300.jpg' }} />
          <View style={styles.postwarpcontent}>
            <View>
            <Text style={styles.title}>Title: Holiday Tour package</Text>
            <Text style={{color : "grey"}}>Kodaikannal + ooty.</Text>        
            </View>
            <Text style={{color : "#fec344", padding: 5, backgroundColor: "#293241", borderRadius: 10, alignSelf :"flex-start"}}>Price : $100/ user</Text>
            </View>
        </View>      
      </Pressable>
      
    )
 }
 export default PostItems;