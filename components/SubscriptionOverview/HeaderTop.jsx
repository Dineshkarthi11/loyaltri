
import React from "react";

function HeaderTop() {
  return (
    <header className="flex overflow-hidden flex-col justify-center px-6 py-3 w-full bg-white border-b border-black border-opacity-10 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
        <h1 className="self-stretch my-auto text-lg font-bold leading-none text-violet-600 uppercase">
          Loyaltri
        </h1>
        <form className="flex overflow-hidden gap-10 items-center self-stretch px-4 py-2.5 my-auto bg-zinc-100 min-w-[240px] rounded-[43px]">
          <label htmlFor="search" className="sr-only">
            Search or command
          </label>
          <div className="flex gap-3.5 items-center self-stretch my-auto text-xs font-medium leading-none text-black text-opacity-70">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/14d5eb72cfca0d46f0460177689431bd20ef13aede96eb3d97a61d1313d34353?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[17px]"
            />
            <input
              id="search"
              type="text"
              placeholder="Search or command"
              className="bg-transparent border-none outline-none"
            />
          </div>
          <div className="flex flex-col self-stretch my-auto rotate-[-1.570796370506285rad]">
            <div className="overflow-hidden gap-2.5 self-stretch px-0.5 text-xs font-medium leading-none text-black whitespace-nowrap rounded bg-neutral-200 h-[18px] min-h-[18px] rotate-[1.570796370506285rad] w-[18px]">
              K
            </div>
            <div className="flex overflow-hidden gap-2.5 justify-center items-center self-end px-0.5 mt-1 rounded bg-neutral-200 h-[18px] rotate-[1.570796370506285rad] w-[18px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce83cf33c84e7f904e34d9a8afa5f8709e948df5ed0c9715e1bff0ef696febb2?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39"
                alt=""
                className="object-contain self-stretch my-auto w-3.5 aspect-square"
              />
            </div>
          </div>
        </form>
        <div className="flex gap-10 items-start self-stretch my-auto leading-none text-black min-w-[240px] w-[341px]">
          <div className="flex gap-4 justify-between items-center min-w-[240px] w-[341px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccba7370cccbebf4d27c5eef1e7f15707e40ca71dc20c9fc8ce8bc17943d6a8b?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto aspect-[2.6] w-[99px]"
            />
            <div className="flex gap-4 items-start self-stretch my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f2c8067819075cd34bd12caa908e0dd2df89eef78a14c65be31cce9152ff750?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39"
                alt=""
                className="object-contain shrink-0 aspect-square w-[37px]"
              />
              <div className="flex overflow-hidden gap-5 py-1 pr-3.5 pl-1 bg-zinc-100 rounded-[34px] w-[175px]">
                <div className="flex gap-1.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/21e14dcf8359f3ed5cb30eca76987133b68c26c022f127989a9113654579482c?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39"
                    alt="Khadija Ahmed"
                    className="object-contain shrink-0 w-8 rounded-full aspect-square"
                  />
                  <div className="flex flex-col my-auto">
                    <div className="self-start text-xs font-medium tracking-tight">
                      Khadija Ahmed
                    </div>
                    <div className="text-xs tracking-normal">
                      khadija@loyaltri.com
                    </div>
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f643c1b0b6d6de4fcdccca54a4e4614b69d1008d89f55211437cb94d3d2757b?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39"
                  alt=""
                  className="object-contain shrink-0 my-auto w-2 aspect-[1.6]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderTop;
