import React, { useState } from "react";

import Modal from "../modal";
import NewTaskForm, { Task } from "../newTasksForm";
import SearchBar from "../searchBar";

import avatarImage from "../../assets/images/icons8-user-50.png";

import "./styles.css";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCreateTask = (task: Task) => {
    console.log("New Task:", task);
    setIsModalOpen(false);
  };

  return (
    <header className="header">
      <SearchBar />

      <div className="header-card">
        <button
          className="new-tasks-button"
          onClick={() => setIsModalOpen(true)}
        >
          ➕ New Task
        </button>

        <div className="header-right">
          <img
            src={avatarImage}
            alt="User Avatar"
            width={40}
            height={40}
            className="avatar"
          />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NewTaskForm onCreate={handleCreateTask} />
      </Modal>
    </header>
  );
};

export default Header;