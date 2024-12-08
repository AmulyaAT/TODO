import React from 'react';
import { Link } from 'react-router-dom';
import '../style/TodoItem.css'

interface TodoItemProps {
  todo: {
    id: string;
    title: string;
    description: string;
    deadline: Date;
    completed: boolean;
  };
  onRemoveTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onRemoveTodo }) => {
  return (
    <li>
      <Link to={`/task/${todo.id}`}>{todo.title}</Link>
      <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
    </li>
  );
};

export default TodoItem;




