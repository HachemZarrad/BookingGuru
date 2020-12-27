import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import CustomImage from '../components/customImage';
import Icon from '../components/icons';
import Toolbar from '../components/toolbar';
import Colors from '../constants/colors';
import Destinations from '../components/destinations';

const Home = () => {
    return(
        <ScrollView>
          <View style={styles.container}>
            <Toolbar/>
            <CustomImage/>
            <Icon/>
            <Destinations/>
          </View>
        </ScrollView>
    );
    
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: Colors.background
    }
});

export default Home;