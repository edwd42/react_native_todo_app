import React from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

export default class App extends React.Component {
  state = {
    todo: [],
    text: ""
  };
  addTodo = () => {
    let newTodo = this.state.text;
    let arr = this.state.todo;
    arr.push(newTodo);
    this.setState({ todo: arr, text: "" });
  };

  deleteTodo = t => {
    let arr = this.state.todo;
    let pos = arr.indexOf(t);
    arr.splice(pos, 1);
    this.setState({ todo: arr });
  };
  renderTodos = () => {
    return this.state.todo.map(t => {
      return (
        <Text
          onPress={() => {
            this.deleteTodo();
          }}
          key={t}
        >
          {t}
        </Text>
      );
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>My Todo App</Text>

        <TextInput
          style={styles.inputStyle}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
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
