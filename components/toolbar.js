import React from 'react';
import { View, StyleSheet, Image} from 'react-native';
import Colors from '../constants/colors';

const Toolbar = () => {
    return(
        <View style={styles.toolbar}>
            <Image 
                source={require('../assets/guruLogo.png')}
                style={styles.image}/>
        </View>
    );
    
}

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: Colors.primary,
        alignItems: 'center',
        height: 150

    },
    image: {
        width: 120,
        height: 100
    }
});

export default Toolbar;