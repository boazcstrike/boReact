import React, { Component } from 'react';
import {
    Modal,
    TouchableHighlight,
    Text,
    View
} from 'react-native';

const locModal = () => {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.isVisibleLocModal}
            onRequestClose={() => {
                alert('Modal has been closed.');
            }}>
            <View style={{ marginTop: 22 }}>
                <View>
                    <Text>{children}</Text>

                    <TouchableHighlight
                        onPress={() => {
                            this.setLocVisible(!this.state.isVisibleLocModal);
                        }}>
                        <Text>Hide EmailModal</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    )
}

export { locModal };