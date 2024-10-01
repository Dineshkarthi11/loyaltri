
import React from "react";

function DiscountCode() {
  return (
    <div className="flex flex-col mt-3.5 w-full min-h-[53px]">
      <div className="flex overflow-hidden gap-10 justify-between items-center px-3.5 py-4 w-full rounded-lg border border-gray-300 border-dashed bg-zinc-50 min-h-[53px]">
        <div className="flex gap-2 items-center self-stretch my-auto text-sm font-medium leading-none whitespace-nowrap text-neutral-700">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5653e4ed3276583e5c9cc598df3770b980fca4b554e1b17b3615f51291b5fc0d?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            alt=""
          />
          <span className="gap-2 self-stretch my-auto">LT-34352</span>
        </div>
        <div className="flex gap-1 items-center self-stretch my-auto">
          <div className="flex overflow-hidden gap-2.5 items-center self-stretch p-0.5 my-auto w-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b1f639b67046daa64bbc87082ff5e2e39787effbb8904a9b834dff7fcabd788?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39"
              className="object-contain self-stretch my-auto w-4 aspect-[0.94]"
              alt=""
            />
          </div>
          <span className="self-stretch my-auto text-xs font-medium leading-loose text-violet-600">
            Applied!
          </span>
        </div>
      </div>
    </div>
  );
}

export default DiscountCode;
