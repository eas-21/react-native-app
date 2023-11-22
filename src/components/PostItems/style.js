import { StyleSheet } from "react-native";
import { color } from "../../modal/color";
const styles = StyleSheet.create({ 
    container: {
      flex :1,
      backgroundColor: "#fec85c35",  
    },
    postWrap: {  display: "flex",paddingTop: 10, marginTop: -20, flexDirection: "row", backgroundColor: color.white, marginVertical: 5, marginHorizontal: 5, borderRadius: 20, 
    shadowColor: color.black, paddingVertical: 5, shadowOffset: {width:0, height:1}, shadowOpacity: 0.8, shadowRadius: 2, elevation : 5 },
    title: {fontWeight : "bold"},
    postImage: {
      width: 100, height: 100, borderRadius: 30,
      marginLeft: 10, marginRight: 20, marginVertical: 10
    },
    infotext: {
      fontWeight: "bold",
  
      padding: 20
    },
    postwarpcontent: { justifyContent: 'space-around', paddingVertical: 10}
  });
  
  export default styles;