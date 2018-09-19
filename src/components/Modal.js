import React, { Component } from 'react';
import { 
    Modal,
    TouchableHighlight, 
    Text, 
    View
 } from 'react-native';

 const Modal = () => {
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
                            <Text>{children}</Text>

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

 export {Modal};