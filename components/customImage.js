import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

const CustomImage = () => {
    return(
        <View style={styles.container}>
            <Image 
                source={require('../assets/sk.png')}
                style={styles.image}/>
        </View>
    );
    
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 340,
        borderRadius: 10,
        marginTop: 80,
        marginBottom: 50
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default CustomImage;