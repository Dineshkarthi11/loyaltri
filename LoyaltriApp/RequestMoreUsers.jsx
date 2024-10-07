import React from "react";
import { useNavigate } from "react-router-dom";

function RequestMoreUsers({onsubmit= ()=>{}}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/request-additional-user");
  };

  return (
    <button
      className="flex items-center gap-2 text-sm font-medium text-gray-500"
      aria-label="Request More Users"
      onClick={onsubmit}
    >
      <div className="w-6 h-6 bg-neutral-300 rounded-2xl flex items-center justify-center">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca096d1b98ba628a450f6b24f974c2a023ebce77af0be0e61c529557ea400de7?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39"
          alt=""
          className="w-4"
        />
      </div>
      <span>Request More Users</span>
    </button>
  );
}

export default RequestMoreUsers;
