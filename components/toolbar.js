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
        backgroundColor: Colors.toolbarColor,
        alignItems: 'center',
        height: 130,
        marginBottom: 30
    },
    image: {
        width: 124,
        height: 100,
        margin: 20
    }
});

export default Toolbar;