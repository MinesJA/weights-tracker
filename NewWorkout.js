import React from 'react';
import { StyleSheet, Picker, View, Button, Text, TextInput, CheckBox } from 'react-native';

export default class NewWorkout extends React.Component {
  state = {
    exerciseOptions: [
      {
        label: "Bench Press",
        value: "benchPress"
      },
      {
        label: "Overhead Press",
        value: "overheadPress"
      },
      {
        label: "Deadlift",
        value: "deadlift"
      },
      {
        label: "Squats",
        value: "squats"
      },
      {
        label: "Barbell Curls",
        value: "barbellCurls"
      }
    ],
    exercises: [],
    newExercise: null,
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

  addExercise = () => {
    this.setState({
      newExercise: {
        exercise: null,
        user: null,
        reps: null,
        barIncluded: false,
        addedWeight: null
      }
    })
  }


  render() {

    return (
      <View style={styles.container}>
        <Button onPress={this.addExercise} title="Add New Exercise"/>
        {this.state.newExercise ?
          <View>
            <Text>Pick an exercise:</Text>
            <Picker
              selectedValue={this.state.selectedExercise}
              style={{ height: 50, width: 100 }}
              onValueChange={(itemValue, itemIndex) => this.setState({selectedExercise: itemValue})}>
              {this.state.exerciseOptions.map( (exercise) =>
                <Picker.Item label={exercise.label} value={exercise.value} key />
              )}
            </Picker>
          </View>
          :
          null
        }
        
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
