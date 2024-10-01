import React from "react";
import { useNavigate } from "react-router-dom";

function UserCount() {
  const navigate = useNavigate();

  const handleUserCountClick = () => {
    navigate("/active-inactive-users");
  };

  return (
    <div>
      <p className="text-gray-500">Users</p>
      <p
        className="text-base font-extrabold cursor-pointer mt-1"
        onClick={handleUserCountClick}
      >
        <span className="text-violet-600">25/</span>
        <span className="text-sm text-violet-600">50</span>{" "}
        <span className="text-sm text-violet-600">active users</span>
      </p>
    </div>
  );
}

export default UserCount;
