import React, { Component } from 'react';
import { 
    TouchableHighlight, 
    Text, 
    View
 } from 'react-native';
import { name as appName } from './app.json';
import { Modal, emailModal, locModal } from './components';

export default class HelloWorldApp extends Component {
    state = {
        modalVisibility: true,
        isVisibleEmailModal: true,
        isVisibleLocModal: true,
        notVerified: true,
        locOFf: true,
    };

    checkModal(){
        if (this.state.notVerified === true) {
            this.state.isVisibleEmailModal = true;
        } else {
            this.state.isVisibleEmailModal = false;
            if (this.state.locOFf === true){
                this.state.isVisibleLocModal = true;
            }else{
                this.state.isVisibleLocModal = false;
            }
        }
    }

    setModalVisible(visibility){
        this.setState({
            modalVisibility: visibility,
        });
    }

    setEmailVisible(visibility){
        this.setState({
            isVisibleEmailModal: visibility,
        });
    }
    setLocVisible(visibility){
        this.setState({
            isVisibleLocModal: visibility,
        });
    }

    render() {
        return (
            <View style={{ marginTop: 22 }}>
                <Text>Welcome to {appName}</Text>

                <TouchableHighlight
                    onPress={() => {
                        this.setEmailVisible(!this.state.isVisibleEmailModal)
                    }}>
                    <Text>Show email not verified.</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => {
                        this.setLocVisible(!this.state.isVisibleLocModal)
                    }}>
                    <Text>Show location services not turned on.</Text>
                </TouchableHighlight>

                <Modal>This is a normal modal.</Modal>
                <emailModal>Email is not verified</emailModal>
                <locModal>Location services is turned off.</locModal>
            </View>
        );
    }
}