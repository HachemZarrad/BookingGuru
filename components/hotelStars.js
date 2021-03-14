import React from 'react';
import { StyleSheet, View } from 'react-native';

import IconLibrary from '../constants/iconLibrary';
import Icon from './icon';

const HotelStars = props => {

    const starsNumber = props.rating;
    const Rating = () => {
        let starts=[];
        let integer = starsNumber % 1 === 0;
        let starType;
        for(let x=1; x<=5; x++){
            if(x <= starsNumber) {
                 starType = "star"  
            }
            else{
                if(!integer && (x === parseInt(starsNumber + 1))){
                    starType = "star-half";
                }
                else{
                    starType = "star-o";
                }
                
            }
           
            starts.push(
                <View key={x}>
                    <Icon library={IconLibrary.FontAwesome}
                          name={starType} 
                          size={30} 
                          color="gold" 
                    />
                </View>
            )
        }
        return starts;
        
    }


    return(
        <View style={styles.container}><Rating/></View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 10
    }
});

export default HotelStars;