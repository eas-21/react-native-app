import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import PostItems from '../../components/PostItems';
import HeaderForMobile from '../../components/headerForMobile';
import {  Text, View,} from 'react-native-web';

const PostDetails = () => {
  return ( 
    <>
    <HeaderForMobile /> 
    <View>
        <Text>Hi, postdetails screen</Text>
    </View>
    </> 
  )
}
export default PostDetails;