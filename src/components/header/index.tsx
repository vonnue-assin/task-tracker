import React, { useState } from "react";

import { Task } from "../../types";
import Modal from "../modal";
import NewTaskForm from "../newTasksForm";
import AvatarDropdown from "../profileDropdown";
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
          <AvatarDropdown avatar={avatarImage} />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NewTaskForm onCreate={handleCreateTask} />
      </Modal>
    </header>
  );
};

export default Header;
