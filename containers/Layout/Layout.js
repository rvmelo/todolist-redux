import React, { Component } from 'react';
import { Button, KeyboardAvoidingView } from 'react-native';
import { AddScreenContainer } from '../../components/AddScreen/AddScreen';
import { TodoListContainer } from '../../components/TodoList/TodoList';
import Header from '../../components/UI/Header/Header';

class Layout extends Component {

    state = {

        displayItems: false,
        pickerVisible: false

    }

    toggleItems = () => {
        this.setState({ displayItems: !this.state.displayItems });
    }

    showPicker = () => {
        this.setState({ pickerVisible: true });
    }

    hidePicker = () => {
        this.setState({ pickerVisible: false });
    }

    render () {

        let childComponent = <AddScreenContainer 
                                toggleItems={this.toggleItems}
                                showPicker={this.showPicker}
                                hidePicker={this.hidePicker}
                                pickerVisible={this.state.pickerVisible}

                                />;

        if(this.state.displayItems){

            childComponent = <TodoListContainer />;

        }

        return (
           <KeyboardAvoidingView style={{flex:1}} behavior="padding">
           
                <Header />

                {childComponent}

                <Button title='Toggle Items' onPress={this.toggleItems} /> 

           </KeyboardAvoidingView>
        );
    }

}

export default Layout;