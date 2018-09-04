import React, { Component } from 'react';
import { Modal, TouchableHighlight, Text, View } from 'react-native';
import { name as appName } from './app.json';

export default class HelloWorldApp extends Component {
    state = {
        locOff: true,
        emailNotVerified: true
    };

    toggleLocOff(visible){
        this.setState({
            locOff: visible,
        });
    }

    toggleEmailOff(visible){
        this.setState({
            emailNotVerified: visible,
        });
    }

    switchModal(modal){
        switch(modal){

            case 1: {
                this.setState({
                    locOff: true, 
                });
            }
            case 2: {
                this.setState({
                    emailNotVerified: true,
                });
            }

            case 3: {
                this.setState({
                    locOff: false,
                });
            }
            case 4: {
                this.setState({
                    emailNotVerified: false,
                });
            }
            default: {
                this.setState({
                    locOff: false,
                    emailNotVerified: false,
                });
            }
        }
    }

    render() {
        return (
            <View style={{ marginTop: 22 }}>
                <Text>Welcome to {appName}</Text>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.locOff}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Text>Location is off!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.toggleLocOff(!this.state.locOff);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.emailNotVerified}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Text>Email not verified</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.toggleEmailOff(!this.state.emailNotVerified);
                                }}>
                                <Text>Click me to hide</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.toggleLocOff(!this.state.locOff);
                    }}>
                    <Text>Location</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => {
                        this.toggleEmailOff(!this.state.emailNotVerified);
                    }}>
                    <Text>Email</Text>
                </TouchableHighlight>
            </View>
        );
    }
}