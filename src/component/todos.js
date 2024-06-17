import React from "react";
import "../component/todos.css";
import { Card, CardContent, Grid } from "@mui/material";
import {ListItemButton, ListItemText} from "@mui/material";

// 1. This component formats and returns the list of todos.
// 2. Treat the question mark like an if statement.
// If the todos array has items in the list [todos.length], we want to return the list
// Else, return a message saying "You have no todo's left"
// 3. The map function is called to assign each array item with a key
// 4. Think of lines 14-23 as a loop. For each todo in the todo list, we want to give the list item
// a key, and it's own card shown in the UI
const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <Grid key={todo.id}>
          <Card style={{ marginTop: 10 }}>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary={todo.content} secondary={todo.date} />
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </ListItemButton>
          </Card>
        </Grid>
      );
    })
  ) : (
    <p>You have no todo's left</p>
  );

  return (
    <div className="todoCollection" style={{ padding: "10px" }}>
      {todoList}
    </div>
  );
};

export default Todos;
