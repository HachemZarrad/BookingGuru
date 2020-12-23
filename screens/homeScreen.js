import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import CustomImage from '../components/customImage';
import Icon from '../components/icons';
import Toolbar from '../components/toolbar';

const HomeScreen = () => {
    return(
        <View>
            <Toolbar/>
            <CustomImage/>
            <Icon/>
        </View>
    );
    
}

const styles = StyleSheet.create({

});

export default HomeScreen;