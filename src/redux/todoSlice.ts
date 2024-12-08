import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  title: string;
  description: string;
  deadline: Date;
  completed: boolean; 
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    markAsCompleted: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = true; // Mark the task as completed in the state
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo, markAsCompleted } = todoSlice.actions;
export default todoSlice.reducer;
