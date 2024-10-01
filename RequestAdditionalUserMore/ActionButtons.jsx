
import React from "react";
import { useNavigate } from "react-router-dom";

function ActionButtons() {
  const navigate = useNavigate(); // Initialize navigate hook

  const handleApplyClick = () => {
    // Navigate to RequestAdditionalUserMore page
    navigate("/making-payments-request");
  };


  return (
    <div className="flex z-0 gap-3 items-start mt-4 max-w-full text-sm font-semibold leading-6 w-[405px]">
      <button className="flex flex-1 shrink items-start whitespace-nowrap rounded-lg basis-0 text-stone-900">
        <span className="overflow-hidden flex-1 shrink gap-2 self-stretch px-5 py-2.5 w-full bg-white rounded-lg border border-solid shadow-sm border-black border-opacity-10">
          Request
        </span>
      </button>
      <button onClick={handleApplyClick} className="flex flex-1 shrink items-start text-white rounded-lg basis-0">
        <span className="overflow-hidden flex-1 shrink gap-2 self-stretch px-5 py-2.5 w-full bg-violet-600 rounded-lg border border-violet-600 border-solid shadow-sm">
          Make Payment
        </span>
      </button>
    </div>
  );
}

export default ActionButtons;
