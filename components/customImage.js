import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

const CustomImage = () => {
    return(
        <View style={styles.container}>
            <Image 
                source={require('../assets/vacation.jpg')}
                style={styles.image}/>
        </View>
    );
    
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 340,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 30
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default CustomImage;