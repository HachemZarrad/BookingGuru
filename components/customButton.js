import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import Colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';


const CustomButton = props => {
    const navigation = useNavigation();

    const createTwoButtonAlert = () =>
    Alert.alert(
      "Title",
      "Thank you for booking with us you will receive a notification once verified by our team",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => navigation.navigate('Home') }
      ],
      { cancelable: false }
    );
    
    return(
          <View style={styles.container} >
              <View style={styles.pricePosition}>
                <Text style={styles.price}>${props.price}</Text>
              </View>
              <View style={styles.buttonPosition}>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigation.navigate(props.nextStep, props.price)}
                    >
                   <Text style={styles.textButton}>{props.title}</Text>
                </TouchableOpacity>
              </View>
          </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width: '80%',
      height: 60,
      // flexShrink: 1,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: Colors.buttonContainer
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },
    button: {
       width: '100%',
       height: '90%',
      //  marginLeft: 10,
       borderRadius: 10,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: Colors.button,
    },
    buttonPostion: {
        // flex: 1,

    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    pricePosition: {
      flex:1
    },
  
});

export default CustomButton;