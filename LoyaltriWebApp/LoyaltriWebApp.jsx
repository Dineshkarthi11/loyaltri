import React from "react";
import UserInfo from "./UserInfo";
import DurationBadge from "./DurationBadge";
import RequestMoreUsers from "./RequestMoreUsers";

function LoyaltriWebApp() {
  return (
    <article className="flex overflow-hidden flex-col w-full h-full bg-white rounded-2xl border border-dashed border-violet-600 border-opacity-20 relative">
      <header className="flex relative flex-col gap-10 items-start px-5 pt-2.5 pb-6 w-full rounded-none aspect-[1.817]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf0906a5e1e0de50f0d74c8c7037d35d66bc651cf3509f75065b17d14b75bb7d?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <UserInfo />
        <div className="absolute top-2 right-4">
          <DurationBadge /> {/* Top-right corner */}
        </div>
        <div className="absolute bottom-4 right-4">
          <RequestMoreUsers /> {/* Bottom-right corner */}
        </div>
      </header>
    </article>
  );
}

export default LoyaltriWebApp;