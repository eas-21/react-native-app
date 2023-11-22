import { StyleSheet } from "react-native";
import { color } from "../../modal/color";
const styles = StyleSheet.create({ 
  headerWrap: {
            backgroundColor: color.backgroundColor,
            marginBottom: 10,
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20
  },
  card: { flexDirection: 'row', 
        backgroundColor: color.white,
        margin: 5, 
        padding: 10, 
        borderRadius: 5 },
  locationWrap:{ flexDirection: 'row', 
        justifyContent: 'space-between',
        width: '100%' },
  vehicle : { fontWeight: 'bold', marginLeft: 5 },
  dynoLocation: { fontWeight: 'bold', marginLeft: 5 },
  placeholder: { width: '100%' },
  row : { flexDirection: 'row' }
  });
  
  export default styles;