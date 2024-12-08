import React, { useState } from 'react';

interface TodoFormProps {
  onAddTodo: (title: string, description: string, deadline: Date) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const deadlineDate = new Date(deadline);
    onAddTodo(title, description, deadlineDate);
    setTitle('');
    setDescription('');
    setDeadline('');
  };

  const handtitle =(e: { target: { value: any; }; })=>{
    setTitle(e.target.value)
  }

  const handledescription =(e: { target: { value: React.SetStateAction<string>; }; })=>{
    setDescription(e.target.value)
  }

  const handledeadline = (e: { target: { value: React.SetStateAction<string>; }; })=>{
    setDeadline(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={handtitle}
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={ handledescription}
      />
      <input
        type="datetime-local"
        value={deadline}
        onChange={handledeadline}
      />
      <button type="submit">Add Task</button>
       
    </form>
  );
};

export default TodoForm;
