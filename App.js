import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import NewWorkout from './NewWorkout'

export default class App extends React.Component {
  state = {
    currentWorkout: null,
    workouts: []
  }

  handlePress = () => {
    let workoutId = this.state.workouts.length + 1
    let newWorkout = {id: workoutId, date: new Date()}

    this.setState({
      currentWorkout: newWorkout,
      workouts: [...this.state.workouts, newWorkout]
    }, console.log(this.state.workouts))
  }


  render() {
    const newWorkout = <NewWorkout workout={this.state.currentWorkout}/>;
    const addWorkoutButton = <Button onPress={this.handlePress} title="Add New Workout"/>;

    return (
      <View style={styles.container}>
        {this.state.currentWorkout ? newWorkout : addWorkoutButton}
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
