import React from 'react';
import { StyleSheet, Picker, View, Button, TextInput, CheckBox } from 'react-native';

export default class NewExercise extends React.Component {
  state = {
    users: [
      {
        label: "Jonathan",
        value: "jonathan"
      },
      {
        label: "Rachel",
        value: "rachel"
      }
    ],
    selectedExercise: null,
    selectedUser: null,
    reps: null,
    barIncluded: false,
    addedWeight: null
  }

  handleRepChange = (number) => {
    if (/^\d+$/.test(number)) {
      this.setState({
        reps: number
      });
    }
  }

  handleWeightChange = (number) => {
    if (/^\d+$/.test(number)) {
      this.setState({
        addedWeight: number
      });
    }
  }



  {
    this.state.selectedExercise ?
    <Picker
      selectedValue={this.state.selectedUser}
      style={{ height: 50, width: 100 }}
      onValueChange={(itemValue, itemIndex) => this.setState({selectedUser: itemValue})}>
      {this.state.users.map( (user) =>
        <Picker.Item label={user.label} value={user.value} key />
      )}
    </Picker>
    <TextInput
      keyboardType='numeric'
      name='reps'
      value={this.state.reps}
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      onChangeText={this.handleRepChange}
    />
    <TextInput
      keyboardType='numeric'
      name='weight'
      value={this.state.reps}
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      onChangeText={this.handleWeightChange}
    />
    <Checkbox
      name='bar'
      onChangeText={(text) => this.setState({text})}
      value={this.state.text}
    />
    <CheckBox
      center
      title='Using Bar?'
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      checked={this.state.barIncluded}
    />
    :
    null
  }



  render() {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.selectedExercise}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => this.setState({selectedExercise: itemValue})}>
          {this.state.exercises.map( (exercise) =>
            <Picker.Item label={exercise.label} value={exercise.value} key />
          )}
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
