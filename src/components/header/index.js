import React from "react";

import "./index.css";

const Header = () => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const handleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className="head">
      <div>
        <h3>EMPLOYEES RECORD</h3>
      </div>
      { (
        <>
          <span className="right-top">
            <img
              className="profile-button"
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1677147369~exp=1677147969~hmac=3a567688b5a47c4e1ddfeb47f05b8eee9f11a81c4568b5bf2b7bb0429e8f9b59"
              onClick={handleDropdown}
            />
            Shreya
          </span>
          {showDropdown && (
                        <div className="dropdown">
                            <img
                                className="profile-photo"
                                
                                onClick={handleDropdown}
                            />
                            <span className="name">
                                shreya sati
                            </span>
                            <span>shreya@gmail.com</span>
                            <button className="update" >
                                Update
                            </button>
                            <button
                                className="update logout"
                                
                            >
                                Log out
                            </button>
                        </div>
                    )}
        </>
      )}
    </div>
  );
};

export default Header;
