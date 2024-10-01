import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function UserCount() {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleUserCountClick = () => {
    // Navigate to ActiveInactiveUsers page
    navigate("/active-inactive-users");
  };

  return (
    <>
      <p className="self-start mt-12 text-gray-500">Users</p>
      <p
        className="self-start mt-2.5 text-base font-extrabold cursor-pointer" // Add cursor-pointer to indicate clickability
        onClick={handleUserCountClick} // Trigger navigation on click
      >
        <span className="text-violet-600">25/</span>
        <span className="text-sm text-violet-600">50</span>{" "}
        <span className="text-sm text-violet-600">active users</span>
      </p>
    </>
  );
}

export default UserCount;