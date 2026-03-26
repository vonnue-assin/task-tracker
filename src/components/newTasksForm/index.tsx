import React, { useState } from "react";

import "./styles.css";

export type Task = {
  title: string;
  days: string;
  priority: "Low" | "Medium" | "High";
  notification: string;
  tags: string;
  assignee: string;
  description: string;
};

type TasksProps = {
  onCreate: (task: Task) => void;
};

const NewTaskForm: React.FC<TasksProps> = ({ onCreate }) => {
  const [task, setTask] = useState<Task>({
    title: "",
    days: "",
    priority: "Medium",
    notification: "",
    tags: "",
    assignee: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate(task);
  };

  return (
    <form onSubmit={handleSubmit} className="task-modal">
      <h2 className="task-title-name">Create Task</h2>
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        onChange={handleChange}
        required
        className="task-title"
      />
      <input
        name="days"
        placeholder="Days"
        onChange={handleChange}
        className="task-title"
      />

      <select
        name="priority"
        onChange={handleChange}
        value={task.priority}
        className="priority-card"
      >
        <option value="low">Low</option>
        <option value="Meduim">Medium</option>
        <option value="High">High</option>
      </select>

      <input
        name="notification"
        placeholder="Notification"
        onChange={handleChange}
        className="task-title"
      />
      <input
        name="assigned"
        placeholder="Assigned To"
        onChange={handleChange}
        className="task-title"
      />

      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        className="task-title"
      />

      <button type="submit" className="create-task"> Create Task</button>
    </form>
  );
};

export default NewTaskForm;
