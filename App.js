import React from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

export default class App extends React.Component {
  state = {
    todo: ["Learn React Native", "Build Apps"],
    text: ""
  };
  addTodo = () => {
    this.setState({ todo: this.state.text });
  };

  renderTodos = () => {
    return this.state.todo.map(t => {
      return <Text key={t}>{t}</Text>;
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>My Todo App</Text>

        <TextInput
          style={styles.inputStyle}
          onChangeText={text => this.setState({ text })}
        />
        <Button title="Add New Todo" onPress={this.addTodo} />
        {this.renderTodos()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  inputStyle: {
    height: 40,
    width: "80%",
    borderColor: "green",
    borderWidth: 1
  }
});
