
import React from "react";

function UserCountInput() {
  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor="userCount"
        className="text-xs font-medium leading-loose text-black"
      >
        User Count
      </label>
      <div className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-sm font-bold leading-none whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid text-zinc-800">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ba959d8b967b3c2524a24f0e241eec0661ddb2506e8a941c02abbc34b52d74c?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39"
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          alt=""
        />
        <input
          type="number"
          id="userCount"
          className="flex-1 shrink gap-2 self-stretch my-auto min-w-[240px] bg-transparent border-none"
          value="30"
          aria-label="User Count"
        />
      </div>
    </div>
  );
}

export default UserCountInput;
