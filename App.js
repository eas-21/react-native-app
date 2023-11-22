import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Home from './src/screens/home';
import Route from './src/navigation/router';
import "react-native-gesture-handler";
export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaViewforAndroid}>     
    <StatusBar barStyle="dark-content" backgroundColor="#fec85c"/>
    <Route />   
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  SafeAreaViewforAndroid: { flex: 1, paddingTop: Platform.OS === 'android' ? 25 : 0, },
})


