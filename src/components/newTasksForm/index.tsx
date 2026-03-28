import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Task } from "../../types";

import addtaskImage from "../../assets/images/add-file.png";

import "./styles.css";

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

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      onCreate(task);
      setIsLoading(false);

      toast.success("New task added successfully!");

      setTask({
        title: "",
        days: "",
        priority: "Medium",
        notification: "",
        tags: "",
        assignee: "",
        description: "",
      });
    }, 1500);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="task-modal">
        <div className="ts-card">
          <img src={addtaskImage} alt="addtaskImage" width={30} height={30} />
          <h2 className="task-title-name">Create Task</h2>
        </div>

        <input
          type="text"
          name="title"
          placeholder="Task Title"
          onChange={handleChange}
          value={task.title}
          required
          className="task-title"
        />

        <input
          name="days"
          placeholder="Days"
          onChange={handleChange}
          value={task.days}
          className="task-title"
        />

        <select
          name="priority"
          onChange={handleChange}
          value={task.priority}
          className="priority-card"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <input
          name="notification"
          placeholder="Notification"
          onChange={handleChange}
          value={task.notification}
          className="task-title"
        />
        <input
          name="assignee"
          placeholder="Assigned To"
          onChange={handleChange}
          value={task.assignee}
          className="task-title"
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          value={task.description}
          className="task-title"
        />

        <button type="submit" className="create-task" disabled={isLoading}>
          {isLoading ? (
            <TailSpin
              height={20}
              width={20}
              color="#ffffff"
              ariaLabel="loading"
            />
          ) : (
            "Create Task"
          )}
        </button>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
};

export default NewTaskForm;
