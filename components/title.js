import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Title = props => {
    return (
        <View>
            <Text {...props} style={{...styles.title, ...props.style}}>{props.title}</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontWeight:'bold',
        fontStyle:'italic',
        color: 'black',
        fontSize: 20,
        marginLeft: 10,
        marginBottom: 15,
      }
})
