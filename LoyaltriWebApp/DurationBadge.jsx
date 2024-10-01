
import React from "react";

function DurationBadge() {
  return (
    <div className="flex gap-1.5 items-center self-center text-sm font-semibold leading-none text-center text-violet-600">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/caaff835d2a743e3a70644cd163a83fa490c0acfc0c0ef58541269a92e2853f3?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-6 rounded-2xl aspect-square"
      />
      <p className="self-stretch my-auto">1 year duration</p>
    </div>
  );
}

export default DurationBadge;
