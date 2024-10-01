import React from "react";
import { useNavigate } from "react-router-dom";

function RequestMoreUsers() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/request-additional-user");
  };

  return (
    <button
      className="flex gap-2 items-center mt-36"
      aria-label="Request More Users"
      onClick={handleNavigate} // Added this line
    >
      <div className="flex gap-3.5 items-center self-stretch my-auto w-6">
        <div className="flex gap-1 justify-center items-center self-stretch px-1 my-auto w-6 h-6 rounded-2xl bg-neutral-300 min-h-[24px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca096d1b98ba628a450f6b24f974c2a023ebce77af0be0e61c529557ea400de7?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39"
            alt=""
            className="object-contain self-stretch my-auto w-4 aspect-square"
          />
        </div>
      </div>
      <span className="self-stretch my-auto text-sm font-medium tracking-tight text-gray-500">
        Request More User
      </span>
    </button>
  );
}

export default RequestMoreUsers;