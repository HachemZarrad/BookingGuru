import React from 'react';
import { View, StyleSheet, TextInput} from 'react-native';

const SearchBar = () => {
    <View>
        <TextInput
              onChangeText={(term) => { setSearchTerm(term); showHeroes(true) }} 
              placeholder = "filter your needs" style = {searchBar}
              value = {searchTerm}>
        </TextInput>
    </View>
}

const styles = StyleSheet.create({
    searchBar:  {
     width: 300,
     height:50,
     backgroundColor: "#e4e6eb",
     borderRadius: 20,
     marginLeft: 16
    }
});

export default SearchBar;