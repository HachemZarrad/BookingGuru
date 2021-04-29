import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView, BackHandler, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native'

import CustomImage from '../components/customImage';
import Title from '../components/title';
import ServicesMenu from '../components/servicesMenu';
import Toolbar from '../components/toolbar';

import Colors from '../constants/colors';
import Destinations from '../components/destinations';

const Home = () => {

  const navigation = useNavigation()

  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) Alert.alert("That's All !", "Exit App?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      if (navigation.isFocused()) return true
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Toolbar />
      <ScrollView>
        <CustomImage source={require('../assets/vacation.jpg')} />
        <Title title='Pick Up Your Plan Here' style={styles.title} />
        <View style={styles.servicesMenu}>
          <ServicesMenu />
        </View>
        <Title title='Popular Destinations' style={styles.title} />
        <Destinations />
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
  },
  title: {
    marginBottom: 15,
  }
});

export default Home;