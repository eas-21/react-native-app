import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import PostItems from '../../components/PostItems';
import HeaderForMobile from '../../components/headerForMobile';
const Home = () => {
  return (   
    <>
      <HeaderForMobile />
      <PostItems />
      </>
  )
}
export default Home;