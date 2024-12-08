import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { markAsCompleted } from '../redux/todoSlice'; 
import '../style/TaskDetail.css';

const TaskDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  
  // Retrieving the todo item from Redux store
  const todo = useSelector((state: RootState) =>
    state.todo.todos.find((todo) => todo.id === id)
  );

  if (!todo) {
    return <div>Task not found</div>;
  }

  const handleCompleteTask = () => {
    dispatch(markAsCompleted(todo.id)); 
    alert('"Great work! Every step you take brings you closer to your goals. Keep going!"');
  };

  return (
    <div className="task-detail-container">
      <div className="task-detail-header">
        {/* Add the 'completed' class if the task is completed */}
        <h1 className={todo.completed ? 'completed' : ''}>{todo.title}</h1>
      </div>
      <div className="task-detail-content">
        <p>{todo.description}</p>
        <p>Deadline: {todo.deadline.toLocaleString()}</p>
        {/* Button to mark the task as complete */}
        <button className="task-detail-button" onClick={handleCompleteTask} disabled={todo.completed}>
          {todo.completed ? 'Completed' : 'Mark as Complete'}
        </button>
      </div>  
    </div>
  );
};

export default TaskDetail;

