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
          <View style={{...styles.container, ...props.style}} >
              <View style={styles.frame}>
                <Text style={styles.price}>${props.price}</Text>
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
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.buttonContainer
    },
    frame: {
      height: 60,
      width: '97%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },
    button: {
       height: '90%',
       flex: 0.9,
       borderRadius: 10,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: Colors.button,
    },
    price: {
        fontSize: 24,
        flex: 0.5,
        fontWeight: 'bold',
        color: 'white',
    },
    
});

export default CustomButton;