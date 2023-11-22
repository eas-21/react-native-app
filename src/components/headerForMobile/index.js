import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Platform, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons';
import { color } from '../../modal/color';
import styles from './style';
 const HeaderForMobile = () =>{
    return(
         
      <View style={styles.headerWrap}>
        <View style={styles.card}>
          <Feather name="search" size={24} color="black" />
          
          <TextInput placeholder='Search by name in Rent.com' style={styles.placeholder} multiline={false} />
         
        </View>
        <View style={styles.locationWrap}>
          <View style={styles.row}>
          <EvilIcons name="location" size={24} color="black" />
            <Text>location</Text>
            <Text style={styles.dynoLocation}> NewYork</Text>
          </View>
          <View style={styles.row}>
          <SimpleLineIcons name="settings" size={24} color="black" />
            <Text style={{ marginLeft: 5}}>Category</Text>
            <Text style={styles.vehicle}>Vehicle</Text>
          </View>
        </View>
      </View>      
    )
 }
 export default HeaderForMobile;