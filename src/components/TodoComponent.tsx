import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../redux/todoSlice'; 
import { Todo } from '../types/TodoTypes'; 

const TodoComponent: React.FC = () => {
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const dispatch = useDispatch();

  const handleUpdateTodo = (title: string, description: string, deadline: Date) => {
    if (editingTodo) {
      dispatch(updateTodo({
        ...editingTodo, 
        title,
        description,
        deadline,
        completed: editingTodo.completed, 
      }));
      setEditingTodo(null);
    }
  };

  return (
    <div>

    </div>
  );
};

export default TodoComponent;



