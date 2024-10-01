
import React from "react";

function Header() {
  return (
    <header className="flex z-0 flex-col items-center max-w-full w-[357px]">
      <div className="flex flex-col items-center text-base font-semibold leading-snug text-black">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf26de07fd2a079739d7cbdc044935a47f81a8862581a1a8c6e864900e3d5598?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39"
          alt="User avatar"
          className="object-contain aspect-square rounded-[91px] shadow-[0px_4px_4px_rgba(102,112,133,0.1)] w-[60px]"
        />
        <h1 className="mt-2.5">Request Additional User</h1>
      </div>
      <p className="mt-1 text-xs leading-4 text-center text-gray-500">
        Need more user slots? Easily expand your current plan by requesting
        additional users for your team.
      </p>
    </header>
  );
}

export default Header;
