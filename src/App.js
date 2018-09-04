import React, { Component } from 'react';
import { Modal, TouchableHighlight, Text, View } from 'react-native';
import { name as appName } from './app.json';

export default class HelloWorldApp extends Component {
    state = {
        modalVisibility: false,
        modalId: 0,
    };

    setModalVisible(visibility){
        this.setState({
            modalVisibility: visibility
        });
    }

    SwitchModalContent(modalId, visibility){
        this.setState({
            modalVisibility: visibility
        });
        switch(modalId){
            default: {
                return (
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisibility}
                        onRequestClose={() => {
                            alert('Modal has been closed.');
                        }}>
                        <View style={{ marginTop: 22 }}>
                            <View>
                                <Text>default to {appName} inside a modal!</Text>

                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisibility);
                                    }}>
                                    <Text>Hide Modal</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
                )
            }
            case 0: {
                return (
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisibility}
                        onRequestClose={() => {
                            alert('Modal has been closed.');
                        }}>
                        <View style={{ marginTop: 22 }}>
                            <View>
                                <Text>1 to {appName} inside a modal!</Text>

                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisibility);
                                    }}>
                                    <Text>Hide Modal</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
                )
            }
            case 1: {
                return (
                )
            }
        }
    }

    render() {
        return (
            <View style={{ marginTop: 22 }}>
                <Text>Welcome to {appName}</Text>

                <TouchableHighlight
                    onPress={() => {
                        this.SwitchModalContent('default', true);
                    }}>
                    <Text>Show default Modal</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => {
                        this.SwitchModalContent(0, true);
                    }}>
                    <Text>Show first Modal</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => {
                        this.SwitchModalContent(1, true);
                    }}>
                    <Text>Show Second Modal</Text>
                </TouchableHighlight>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisibility}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Text>2 to {appName} inside a modal!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisibility);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

            </View>
        );
    }
}