import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import PostDetails from '../screens/postDetails';
const Route = () => {
    const Stack = createStackNavigator();
  return (   
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown : false}}>
      
        <Stack.Screen name= 'Home' component={Home} />
        <Stack.Screen name= 'PostDetails' component={PostDetails}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}
export default Route;