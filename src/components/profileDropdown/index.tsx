import React, { useState, useRef, useEffect } from "react";

import "./styles.css";

type Props = {
  avatar: string;
};

const AvatarDropdown: React.FC<Props> = ({ avatar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="avatar-dropdown" ref={dropdownRef}>
      <img
        src={avatar}
        alt="User Avatar"
        className="avatar"
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <div className="dropdown-menu-avatar">
          <p className="dropdown-item">👤 Profile</p>
          <p className="dropdown-item">⚙️ Settings</p>
          <p className="dropdown-item logout">🚪 Logout</p>
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;
