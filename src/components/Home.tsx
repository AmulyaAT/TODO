import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { addTodo, removeTodo } from '../redux/todoSlice';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import '../style/Home.css'; 

const Home = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (title: string, description: string, deadline: Date) => {
    const newTodo = {
      id: new Date().toISOString(),
      title,
      description,
      deadline,
      completed: false,
    };
    dispatch(addTodo(newTodo));
  };

  const handleRemoveTodo = (id: string) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1>Your To-do List</h1>
      </header>
      <main className="main-content">
        <TodoForm onAddTodo={handleAddTodo} />
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onRemoveTodo={handleRemoveTodo} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
