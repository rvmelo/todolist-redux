import React from 'react';
import { 
    Text, Button, 
    View, Image, TextInput, 
    TouchableOpacity
     } from 'react-native';

import styles from './AddScreenStyles';   
import DateTimePicker from 'react-native-modal-datetime-picker';
import { CheckBox } from 'native-base';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';   

const addScreen = (props) => (

    <View style={styles.addContainerStyle}>

        <Text>Item: </Text><TextInput onChangeText={props.onHandleChangeText} style={styles.inputStyle} maxLength={20} />
            
        <TouchableOpacity onPress={props.showPicker}>
            <Image style={styles.imageStyle} source={require('../../assets/calendar-icon.png')}/>
        </TouchableOpacity>

        <DateTimePicker
            isVisible={props.pickerVisible}
            onConfirm={props.onHandlePicker} 
            onHideAfterConfirm={props.hidePicker}
            onCancel={props.hidePicker}
            mode= { 'datetime' } />
        
        <Text style={styles.textStyle}>Items to be completed: {props.actItems}</Text>

        <View style={styles.btnStyle}>
            <Button title='Add Items' onPress={props.onAddItemToList} />
        </View>

        <View style={styles.checkBoxContainer}>

            <CheckBox checked={!props.showCompList} onPress={props.onFilterActiveItems}/>
            <Text>Active Items</Text>

            <CheckBox checked={props.showCompList} onPress={props.onFilterCompletedItems} />
            <Text>Completed Items</Text>

        </View>

    </View>


);

mapStateToProps = state => {

    return {
        actItems: state.activeItems,
        showCompList: state.showCompletedList
    }

}

mapDispatchToProps = dispatch => {

    return {
        onHandleChangeText: (text) => dispatch({ type: actionTypes.HANDLECHANGETEXT, text: text }),
        onHandlePicker: (datetime) => dispatch({ type: actionTypes.HANDLEPICKER, datetime: datetime }),
        onAddItemToList: () => dispatch({ type: actionTypes.ADDTOLIST }),
        onFilterActiveItems: () => dispatch({ type: actionTypes.FILTERACTIVEITEMS }),
        onFilterCompletedItems: () => dispatch({ type: actionTypes.FILTERCOMPLETEDITEMS })
    }

}

export const AddScreenContainer = connect(mapStateToProps, mapDispatchToProps)(addScreen);