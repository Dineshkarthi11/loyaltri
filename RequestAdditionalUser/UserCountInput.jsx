import React from "react";

function UserCountInput() {
  return (
    <div className="flex z-0 flex-col mt-4 max-w-full w-[405px]">
      <div className="flex flex-col w-full">
        <label htmlFor="userCount" className="text-xs font-medium leading-loose text-black">
          User Count
        </label>
        <div className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-sm leading-none text-gray-500 bg-white rounded-lg border border-gray-300 border-solid">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a8704c613b2eb67b394ac25cb57c42908708cff13ffcee2699516d44c5b23ce?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" alt="" />
          <input
            type="text"
            id="userCount"
            className="flex-1 shrink gap-2 self-stretch my-auto min-w-[240px] bg-transparent border-none outline-none"
            placeholder="Enter count here.."
          />
        </div>
      </div>
    </div>
  );
}

export default UserCountInput;