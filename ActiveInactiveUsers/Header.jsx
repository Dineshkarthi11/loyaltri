import React from "react";

function Header() {
  return (
    <header className="flex flex-wrap gap-2 items-center w-full">
      <div className="flex items-center p-2 my-auto rounded-3xl bg-zinc-100 h-[43px] w-[43px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/361c6498671a08dbbd07d2e419c1ef5cbe302666fadc6e4575adad92c9bfc33c?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39"
          alt=""
          className="object-contain w-[30px]"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h1 className="text-xl font-semibold text-black">
          Active and Inactive Users
        </h1>
        <p className="mt-1 text-base text-gray-500">
          View and manage the status of all active and inactive users
        </p>
      </div>
    </header>
  );
}

export default Header;