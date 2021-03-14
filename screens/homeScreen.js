import React from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import CustomImage from '../components/customImage';
import Title from '../components/title';
import ServicesMenu from '../components/servicesMenu';
import Toolbar from '../components/toolbar';
import Colors from '../constants/colors';
import Destinations from '../components/destinations';

const Home = () => {
    return(
      <View style={styles.container}>
            <Toolbar/>
            <ScrollView>
              <CustomImage/>
              <Title title={'Pick Up You Plan Here'}/>
              <View style={styles.servicesMenu}>
                <ServicesMenu/>
              </View>
              <Title title={'Popular Destinations'}/>
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
    servicesMenu: {
      width: '100%',
      alignItems: 'center',
      paddingBottom: 40
    }
});

export default Home;