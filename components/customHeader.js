import React from "react"
import { StyleSheet, View, Platform } from "react-native"

import { useNavigation } from "@react-navigation/native"

import InputBar from "./inputBar"

import Colors from "../constants/colors"
import IconLibrary from "../constants/iconLibrary"

const CustomHeader = (props) => {
  const {searchBarHandler,backFromFilterList,showFilteredData} = props
  const navigation = useNavigation()

  const backHome = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <InputBar
          placeholder="   Search down here"
          default=""
          keyboardType="default"
          leftIconLibrary={IconLibrary.FontAwesome5}
          leftIconName="arrow-left"
          leftIconFeature={showFilteredData ? backFromFilterList : backHome}
          rightIconSize={20}
          onChangeText={searchBarHandler}
        />
      </View>
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  container: {
    backgroundColor: Platform.OS === "android" ? Colors.toolbarColor : "white",
    width: "100%",
    alignItems: "center",
    height: 60,
  },
  input: {
    paddingTop: Platform.OS === "ios" ? 30 : 0,
    width: "100%",
    alignItems: "center",
  },
})
