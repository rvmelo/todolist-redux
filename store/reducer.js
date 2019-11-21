import * as actionTypes from './actions';
import moment from 'moment';
import { ActionSheet } from 'native-base';

const initialState = {

    itemList: [],
    idCount: 0,
    text: 'Write your to do item!',
    chosenDate: 'no-date',
    activeItems: 0,
    showCompletedList: false

}

const reducer = (state = initialState, action) => {

    let oldItemList = [];
    let index = 0;

    switch(action.type){

        case actionTypes.ADDTOLIST:

            const objItem = { 'id': state.idCount+1, 'text': state.text, 'date': state.chosenDate, 'completed': false, 'displayTextInput': false, 'pickerVisible': false };
            return {
                ...state, 
                itemList: [...state.itemList, objItem],
                idCount: state.idCount+1,
                activeItems: state.activeItems+1
            }

        case actionTypes.REMOVEFROMLIST:

            oldItemList = [...state.itemList];
            index = oldItemList.indexOf(action.item);
    
            if( index !== -1) oldItemList.splice(index, 1);
        
            return {
                ...state,
                itemList: [...oldItemList],
                activeItems: action.item.completed ?  state.activeItems : state.activeItems-1
            }

        case actionTypes.EDITITEMDATE:

            oldItemList = [...state.itemList];
            index = oldItemList.indexOf(action.item);

            if(index !== -1){
                oldItemList[index].date = state.chosenDate;
                oldItemList[index].pickerVisible = false;
                return {
                    ...state,
                    itemList: [...oldItemList]
                }
            }

            return state;

        case actionTypes.EDITITEMSTATUS:

            oldItemList = [...state.itemList];
            index = oldItemList.indexOf(action.item);

            if(index !== -1){
                oldItemList[index].completed = !oldItemList[index].completed;
                return {
                    ...state,
                    itemList: [...oldItemList],
                    activeItems: action.item.completed ?  state.activeItems-1 : state.activeItems+1
                }
            }

            return state;
        
        case actionTypes.EDITITEMTEXT:

            oldItemList = [...state.itemList];
            index = oldItemList.indexOf(action.item);
            
            if(index !== -1){
                oldItemList[index].text = state.text;
                oldItemList[index].displayTextInput = false;
                return {
                    ...state,
                    itemList: [...oldItemList]
                }
            }
            
            return state;
        
        case actionTypes.TOGGLETEXTINPUT:

            oldItemList = [...state.itemList];
            index = oldItemList.indexOf(action.item);

            if(index !== -1){
                oldItemList[index].displayTextInput = !oldItemList[index].displayTextInput;
                return {
                    ...state,
                    itemList: [...oldItemList]
                }
            }

            return state;

        case actionTypes.FILTERACTIVEITEMS:
            return {
                ...state,
                showCompletedList: false
            }

        case actionTypes.FILTERCOMPLETEDITEMS:
            return {
                ...state,
                showCompletedList: true
            }
        
        case actionTypes.HANDLECHANGETEXT:
            return {
                ...state,
                text: action.text
            }
        
        case actionTypes.HIDEPICKERINITEM:
        
            oldItemList = [...state.itemList];
            index = oldItemList.indexOf(action.item);

            if(index !== -1){
                oldItemList[index].pickerVisible = false;
                return {
                    ...state,
                    itemList: [...oldItemList]
                }
            }

        case actionTypes.SHOWPICKERINITEM:
    
            oldItemList = [...state.itemList];
            index = oldItemList.indexOf(action.item);

            if(index !== -1){
                oldItemList[index].pickerVisible = true;
                return {
                    ...state,
                    itemList: [...oldItemList]
                }
            }

            return state;
            
        case actionTypes.HANDLEPICKER:

            return{
                ...state,
                chosenDate: moment(action.datetime).format('MMM, Do YYYY HH:mm') 
            }
                
    }

    return state;

}

export default reducer;