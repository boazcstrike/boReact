import React, { Component } from 'react';
import {
    Modal,
    TouchableHighlight,
    Text,
    View
} from 'react-native';

const emailModal = () => {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.isVisibleEmailModal}
            onRequestClose={() => {
                alert('Modal has been closed.');
            }}>
            <View style={{ marginTop: 22 }}>
                <View>
                    <Text>{children}</Text>

                    <TouchableHighlight
                        onPress={() => {
                            this.setEmailVisible(!this.state.isVisibleEmailModal);
                        }}>
                        <Text>Hide EmailModal</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    )
}

export { emailModal };