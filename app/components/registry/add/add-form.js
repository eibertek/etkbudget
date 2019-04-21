import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default class AddRegistry extends React.Component {
    static navigationOptions = ({ navigation}) => {
        const type = navigation.getParam('type', 1);
        return {
            title: type > 0 ? 'Nuevo Ingreso' : 'Nuevo Egreso',
        }
      };

    render() {
        return (
            <View>
                <View>
                    <Text>Moneda</Text>
                    <TextInput placeholder="00.00" />
                </View>
                <View>
                    <TextInput placeholder="Descripcion" />
                </View>
                <View>
                    <Text>Etiqueta</Text>
                    <TextInput placeholder="xxxxx" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});