import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Platform} from 'react-native';
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
            <TouchableOpacity onPress={openMenu}>
                <Icon name="bars" size={25} color="#000000"
                    />
            </TouchableOpacity>
            <Image 
                source={require('../assets/guruLogo.png')}
                style={styles.logo}/>
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                <Icon name="bell" size={25} color="#000000"/>
            </TouchableOpacity>
        </View>
    );
    
}

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: Platform.OS === 'android' ? Colors.toolbarColor : 'white',
        alignItems: 'center',
        flexDirection: 'row',
        height: '18%',
        width: '100%',
        justifyContent: 'space-around'
    },
    logo: {
        width: 100,
        height: 80,
        margin: 20
    }
});

export default Toolbar;