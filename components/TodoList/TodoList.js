import React from 'react';
import { ScrollView } from 'react-native';
import Item from '../Item/Item';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

const todoList = (props) => {

    const items = props.itList.map(item => {

        if(item.completed && props.showCompList){

            return (
                <Aux key={item.id}>

                    <Item

                        key={item.id} 

                        itemElement={item} 
                        text={item.text} 
                        date={item.date}

                        onToggleTextInput={props.onToggleTextInput} 
                        onHandleChangeText={props.onHandleChangeText}
                        onEditItemText={props.onEditItemText}
                        onEditItemDate={props.onEditItemDate}
                        onEditItemStatus={props.onEditItemStatus}
                        onRemoveFromList={props.onRemoveFromList}
                        onShowPickerInItem={props.onShowPickerInItem}
                        onHidePickerInItem={props.onHidePickerInItem}
                        onHandlePicker={props.onHandlePicker}

                        />

                </Aux>
            ); 

        }

        else if(!item.completed && !props.showCompList){

            return (
                <Aux key={item.id}>

                    <Item 

                        key={item.id}

                        itemElement={item} 
                        text={item.text} 
                        date={item.date}

                        onToggleTextInput={props.onToggleTextInput} 
                        onHandleChangeText={props.onHandleChangeText}
                        onEditItemText={props.onEditItemText}
                        onEditItemDate={props.onEditItemDate}
                        onEditItemStatus={props.onEditItemStatus}
                        onRemoveFromList={props.onRemoveFromList}
                        onShowPickerInItem={props.onShowPickerInItem}
                        onHidePickerInItem={props.onHidePickerInItem}
                        onHandlePicker={props.onHandlePicker}

                        />
                        
                </Aux>
            ); 

        }

    });
        
    return(
        
        <ScrollView>
            {items}
        </ScrollView>
      
    );

}

mapStateToProps = state => {

    return{
        itList: state.itemList,
        showCompList: state.showCompletedList
    }

}

mapDispatchToProps = dispatch => {
    
    return {
        
        onToggleTextInput: (item) => dispatch({ type: actionTypes.TOGGLETEXTINPUT, item: item }),
        onHandleChangeText: (text) => dispatch({ type: actionTypes.HANDLECHANGETEXT, text: text }),
        onEditItemText: (item) => dispatch({ type: actionTypes.EDITITEMTEXT, item: item }),
        onEditItemDate: (item) => dispatch({ type: actionTypes.EDITITEMDATE, item: item }),
        onEditItemStatus: (item) => dispatch({ type: actionTypes.EDITITEMSTATUS, item: item }),
        onRemoveFromList: (item) => dispatch({ type: actionTypes.REMOVEFROMLIST, item: item}),
        onShowPickerInItem: (item) => dispatch({ type: actionTypes.SHOWPICKERINITEM, item: item }),
        onHidePickerInItem: (item) => dispatch({ type: actionTypes.HIDEPICKERINITEM, item: item }),
        onHandlePicker: (datetime) => dispatch({ type: actionTypes.HANDLEPICKER, datetime: datetime })

    }

}

export const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(todoList);