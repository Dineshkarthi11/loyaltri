
import React from "react";

function ActionButtons() {
  return (
    <div className="flex z-0 gap-3 items-start mt-4 max-w-full text-sm font-semibold leading-6 w-[405px]">
      <button className="flex flex-1 shrink items-start whitespace-nowrap rounded-lg basis-0 text-stone-900 overflow-hidden gap-2 self-stretch px-5 py-2.5 w-full bg-white border border-solid shadow-sm border-black border-opacity-10">
        Request
      </button>
      <button className="flex flex-1 shrink items-start text-white rounded-lg basis-0 overflow-hidden gap-2 self-stretch px-5 py-2.5 w-full bg-violet-600 border border-violet-600 border-solid shadow-sm">
        Make Payment
      </button>
    </div>
  );
}

export default ActionButtons;
