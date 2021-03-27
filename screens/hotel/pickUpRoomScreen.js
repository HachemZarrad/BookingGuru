import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

import Colors from '../../constants/colors'

import InputBar from '../../components/inputBar'
import CustomButton from '../../components/customButton'
import CustomPicker from '../../components/customPicker'
import CustomDatePicker from '../../components/customDatePicker'
import Title from '../../components/title'
import Caution from '../../components/caution'


const RESIDENCECHOICE = ['All Inclusive', 'Half Board'] 
const BEDCHOICE = ['1 Bed', '2 Beds']

const PickUpRoomScreen = ({ route }) => {

    const price = route.params
    return (
        <View style={styles.container}>
            <ScrollView >
                <Caution type='standar' style={styles.caution} caution={'Extra Fees Will Be Added According To Your Choices'} />
                <Title title={'Arrival Date ?'} />
                <CustomDatePicker mode='date'/>
                <Title title={'Arrival Time ?'} />
                <CustomDatePicker mode='time'/>
                <Title title={'Single Or Twin Room ?'} />
                <CustomPicker style={styles.picker} list={BEDCHOICE} />
                <Title title={'All Inclusive Or Half Board ?'} />
                <CustomPicker style={styles.picker} list={RESIDENCECHOICE} />
                <Title title={'Any Comments ?'} />
                <InputBar numberOfLines={4} style={styles.commentBox } />
            </ScrollView>
            <CustomButton price={price} nextStep={'ValidateReservationScreen'} title={'Pick Up Plan'} />
        </View>
    )
}

export default PickUpRoomScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        flex: 1
    },
    picker: {
        alignSelf: 'center'
    },
    commentBox: {
        height: 90,
        alignSelf: 'center'
    },
    caution:{
        height: 50,
    }
})
