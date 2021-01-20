import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import CustomImage from '../components/customImage';
import Icon from '../components/icons';
import Toolbar from '../components/toolbar';
import Colors from '../constants/colors';
import Destinations from '../components/destinations';

const Home = () => {
    return(
      <View style={styles.container}>
            <Toolbar/>
            <ScrollView style={styles.scroller}>
              <CustomImage/>
              <Icon/>
              <Destinations/>
            </ScrollView>
          </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: Colors.background,
       flex: 1
    },
    scroller: {
     
      }
});

export default Home;