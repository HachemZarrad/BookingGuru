import React from 'react';
import { StyleSheet, View, Image} from 'react-native';

const CustomImage = props => {
    return(
        <View style={styles.container}>
            <Image 
                {...props}
                style={styles.image}/>
        </View>
    );
    
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: '96%',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 30
    },
    container: {
        alignItems: 'center',
    }
});

export default CustomImage;