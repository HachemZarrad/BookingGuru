import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import DatePicker from 'react-native-datepicker'

import Colors from '../../constants/colors';
import InputBar from '../../components/inputBar';
import BookingButton from '../../components/bookingButton';
import CustomPicker from '../../components/customPicker';
import Title from '../../components/title';
import Caution from '../../components/caution';

const PickUpRoomScreen = ({ route }) => {

    const price = route.params;
    const minDate = new Date();
    const maxDate = new Date(`${minDate.getFullYear()+2}`);
    console.log('min',minDate);
    console.log('max',maxDate);
    const [selectedDate, setSelectedDate] = useState(null);
    return (
        <View style={styles.container}>
            <ScrollView >
                <Caution caution={'Extra Fees Will Be Added According To Your Choices'} />
                <Title title={'Arrival Date ?'} />
                <DatePicker
                    style={{width: 200, marginBottom: 15}}
                    date={selectedDate}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate={minDate}
                    maxDate={maxDate}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: -5,
                            marginLeft: 30,
                            width: 40,
                            height: 50
                        },
                        dateInput: {
                            marginLeft: 86,
                            backgroundColor: 'white',
                            borderRadius: 20,
                            borderColor: Colors.toolbarColor,
                            borderWidth: 2.5
                        }
                    }}
                    onDateChange={date => setSelectedDate(date)}
                />
                <Title title={'Single Or Twin Room ?'} />
                <CustomPicker style={styles.picker} firstValue={'1 Bed'} secondValue={'2 Beds'} />
                <Title title={'All Inclusive Or Half Board ?'} />
                <CustomPicker style={styles.picker} firstValue={'All Inclusive'} secondValue={'Half Board'} />
                <Title title={'Any Comments ?'} />
                <InputBar numberOfLines={4} style={styles.commentBox } />
            </ScrollView>
            <BookingButton price={price} nextStep={'ValidateReservationScreen'} title={'Pick Up Plan'} />
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
        marginBottom: 20,
        marginTop: -5
    },
    commentBox: {
        height: 90,
        marginBottom: 70
    }
})