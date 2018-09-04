import React, { Component } from 'react';
import { 
    Modal,
    TouchableHighlight,
    Text,
    StyleSheet,
    View
 } from 'react-native';
import { name as appName } from './app.json';

export default class HelloWorldApp extends Component {
    state = {
        locOff: true,
        emailNotVerified: true,
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

    switchEmail(a){
        switch (a){
            case true: {
                this.setState({
                    emailNotVerified: false, 
                });
            }
            case false: {
                this.setState({
                    emailNotVerified: true,
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

    switchLocOff(a){
        switch(a){
            case true: {
                this.setState({
                    locOff: false,
                });
            }
            case false: {
                this.setState({
                    locOff: true,
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

    // AHYA RR
    switchCaseModal(caseNum){
        switch(caseNum){
            case 1: {
                this.setState({
                    locOff: true,
                    emailNotVerified: true,
                })
            }
            case 2: {
                this.setState({
                    locOff: true,
                    emailNotVerified: false,
                })
            }
            case 2: {
                this.setState({
                    locOff: false,
                    emailNotVerified: true,
                })
            }
            default:{
                this.setState({
                    locOff: false,
                    emailNotVerified: false,
                })
            }
        }
    }

    render() {
        return (
            <View style={{ marginTop: 22 }}>
                <Text style={styles.appTitle}>Welcome to {appName}</Text>

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

                {/* <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.sampleLoc}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Text>Sample Turn Location Services On!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.toggleLocOff(!this.state.sampleLoc);
                                }}>
                                <Text>Click me to hide</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.sampleEmail}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Text>Sample Email not verified</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.toggleEmailOff(!this.state.sampleEmail);
                                }}>
                                <Text>Click me to hide</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal> */}

                <TouchableHighlight style={styles.modalBtn}
                    onPress={() => {
                        this.switchCaseModal(1);
                    }}>
                    <Text>Turn on location modal and turn on email not verified</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.modalBtn}
                    onPress={() => {
                        this.switchCaseModal(2);
                    }}>
                    <Text>Turn location modal on and turn off email not verified</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.modalBtn}
                    onPress={() => {
                        this.switchCaseModal(3);
                    }}>
                    <Text>Turn off location modal and turn on email verification</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.modalBtn}
                    onPress={() => {
                        this.switchCaseModal(4);
                    }}>
                    <Text>Turn off location modal and turn off email verification</Text>
                </TouchableHighlight>

                {/* <TouchableHighlight
                    onPress={() => {
                        // this.toggleEmailOff(!this.state.emailNotVerified);
                        this.toggleLocOff(!this.state.sampleLoc);
                    }}>
                    <Text>Turn Location Off. </Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => {
                        // this.toggleEmailOff(!this.state.emailNotVerified);
                        this.toggleEmailOff(!this.state.sampleEmail);
                    }}>
                    <Text>Unset email. </Text>
                </TouchableHighlight> */}

            </View>
        );
    }
}

var styles = StyleSheet.create({
    appTitle:{
        marginTop: 5,
        marginRight: 10,
        marginLeft: 25,
        marginBottom: 2,
    },
    modalBtn:{
        marginTop: 5,
        marginRight: 10,
        marginLeft:50,
        marginBottom: 2,
        height: 20,
        width: 100,
    },
    modalView:{

    },

})