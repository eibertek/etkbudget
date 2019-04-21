import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';

export default class Main extends Component {
    static navigationOptions = {
      title: 'Home',
    };
    
    componentWillMount(){
        this.props.initStore('Mariano');
    }

    render() { 
      const { name, instructions } = this.props;
      return (
          <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to aaa {name}!</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
            <Card title='HELLO WORLD'>
                    <Text style={styles.instructions}>{instructions}</Text>
            </Card>
          </View>
        );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

