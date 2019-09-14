import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  TouchableOpacity
} from "react-native";

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
        <TouchableOpacity key={t}>
          <Text
            style={{ fontSize: 18 }}
            onPress={() => {
              this.deleteTodo(t);
            }}
          >
            {t}
          </Text>
        </TouchableOpacity>
      );
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>My Todo App</Text>

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
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  inputStyle: {
    height: 40,
    width: "80%",
    borderColor: "green",
    borderWidth: 1
  },
  title: {
    fontSize: 30,
    color: "green",
    fontWeight: "bold"
  }
});
