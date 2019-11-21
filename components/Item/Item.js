import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, Button } from 'react-native';
import styles from './ItemStyles';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {CheckBox} from 'native-base';

const item = (props) => {

    let inputField = (

        <TouchableOpacity onPress={() => props.onToggleTextInput(props.itemElement)}>
            <Image source={require('../../assets/edit-icon.png')} style={styles.img}/>    
        </TouchableOpacity>

    );

    if(props.itemElement.displayTextInput) {

        inputField = (

            <View style={styles.textInput}>
                <TextInput onChangeText={props.onHandleChangeText} defaultValue={props.itemElement.text} maxLength={20}/> 
                <Button title='Confirm' onPress={ () => props.onEditItemText(props.itemElement) } />
            </View>

        );

    }
     
    return (

        <View style={styles.body}>
        
            <Text>{props.text} </Text>
            <Text>{props.date}</Text>
            
            <TouchableOpacity onPress={() => props.onRemoveFromList(props.itemElement)}>
                <Image source={require('../../assets/delete-icon.png')} style={styles.img}/>    
            </TouchableOpacity>

           {inputField}

            <TouchableOpacity onPress={() => props.onShowPickerInItem(props.itemElement) }>
                <Image source={require('../../assets/calendar-icon.png')} style={styles.img}/>    
            </TouchableOpacity>

            <DateTimePicker
                isVisible={props.itemElement.pickerVisible}
                onConfirm={props.onHandlePicker}
                onHideAfterConfirm={() => props.onEditItemDate(props.itemElement)}
                onCancel={() => props.onHidePickerInItem(props.itemElement)}
                mode= { 'datetime' } />

            <CheckBox checked={props.itemElement.completed} onPress={() => props.onEditItemStatus(props.itemElement)} />

        </View>

    );

   

};

export default item;