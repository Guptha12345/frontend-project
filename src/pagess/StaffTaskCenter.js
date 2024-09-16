import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './StaffTaskCenter.css';
import { TaskContext } from '../pagess/TaskContext';

const StaffTaskCenter = () => {
  const navigate = useNavigate();
  const { addTask } = useContext(TaskContext);
  const [weeklyTask, setWeeklyTask] = useState('');
  const [labTask, setLabTask] = useState('');
  const [weeklyTaskImage, setWeeklyTaskImage] = useState(null);

  const handleWeeklyTaskSubmit = () => {
    addTask({ id: Date.now(), type: 'Weekly Test', content: weeklyTask, imageUrl: weeklyTaskImage });
    setWeeklyTask('');
    setWeeklyTaskImage(null);
  };

  const handleLabTaskSubmit = () => {
    addTask({ id: Date.now(), type: 'Lab Task', content: labTask });
    setLabTask('');
  };

  return (
    <div className="staff-task-center">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <h2>Task Center</h2>
      <div className="task-card weekly-task-card">
        <h3>Weekly Test Task</h3>
        <textarea 
          value={weeklyTask}
          onChange={(e) => setWeeklyTask(e.target.value)}
          placeholder="Write the task here..."
        />
        <input 
          type="file"
          accept="image/*"
          onChange={(e) => setWeeklyTaskImage(URL.createObjectURL(e.target.files[0]))}
        />
        <button onClick={handleWeeklyTaskSubmit}>Send</button>
      </div>
      <div className="task-card lab-task-card">
        <h3>Lab Task</h3>
        <textarea 
          value={labTask}
          onChange={(e) => setLabTask(e.target.value)}
          placeholder="Write the task here..."
        />
        <button onClick={handleLabTaskSubmit}>Send</button>
      </div>
    </div>
  );
};

export default StaffTaskCenter;
