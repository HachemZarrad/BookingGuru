import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProfileAvatar = props => {
    return (
        <View style={styles.avatar}>
            <Text style={styles.name}>HZ</Text>
        </View>
    )
}

export default ProfileAvatar

const styles = StyleSheet.create({
    avatar: {
        backgroundColor: 'orange',
        borderRadius: 60,
        width: 70,
        height: 70,
        marginTop: 10,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontWeight:'bold',
        fontSize: 30        
    }
});
