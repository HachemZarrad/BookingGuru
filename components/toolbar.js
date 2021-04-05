import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from '../components/icon';

import IconLibrary from '../constants/iconLibrary';
import Colors from '../constants/colors';

const Toolbar = () => {
    const navigation = useNavigation();
    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.toolbar}>
            <TouchableOpacity onPress={openMenu}>
                <Icon library={IconLibrary.FontAwesome5} name="bars" />
            </TouchableOpacity>
            <Image
                source={require('../assets/guruLogo.png')}
                style={styles.logo} />
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                <Icon library={IconLibrary.FontAwesome5} name="bell" />
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: Platform.OS === 'android' ? Colors.toolbarColor : 'white',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 110,
        justifyContent: 'space-around',
        
    },
    logo: {
        width: '30%',
        height: '80%',
        margin: 20
    }
});

export default Toolbar;