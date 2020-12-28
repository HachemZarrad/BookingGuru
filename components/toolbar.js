import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../constants/colors';

const Toolbar = () => {
    const navigation = useNavigation();
    const openMenu = () => {
        navigation.openDrawer();
    }
    return( 
        <View style={styles.toolbar}>
            <TouchableOpacity>
                <Icon name="bars" size={30} color="#000000"
                    onPress={openMenu}/>
            </TouchableOpacity>
            <Image 
                source={require('../assets/guruLogo.png')}
                style={styles.image}/>
            <TouchableOpacity>
                <Icon name="bell" size={30} color="#000000"/>
            </TouchableOpacity>
        </View>
    );
    
}

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: Colors.toolbarColor,
        alignItems: 'center',
        flexDirection: 'row',
        height: 130,
        justifyContent: 'space-around'
    },
    image: {
        width: 124,
        height: 100,
        margin: 20
    }
});

export default Toolbar;