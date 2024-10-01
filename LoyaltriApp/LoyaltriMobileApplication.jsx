import React from "react";
import ExpiryNotification from "./ExpiryNotification";
import UserCount from "./UserCount";
import RequestMoreUsers from "./RequestMoreUsers";

function LoyaltriMobileApplication() {
  return (
    <article className="flex overflow-hidden flex-col w-full h-full bg-white rounded-2xl border border-dashed border-violet-600 border-opacity-20 relative">
      <div className="flex relative flex-col gap-10 px-5 pt-2.5 pb-6 w-full rounded-none aspect-[1.817]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f725d06ded8b0b366880068fe2cc8e29b03c09aee3a3002cb232fa5ca9ab9354?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <header className="flex relative flex-col flex-1 self-start mt-4 text-sm font-medium text-violet-600">
          <h1 className="text-xl w-[150px] font-semibold">Loyaltri Mobile Application</h1>
          <p className="mt-3.5 text-gray-500">Valid till 06 Jan, 2025</p>
          <UserCount />
        </header>
        <div className="absolute top-2 right-4">
          <ExpiryNotification /> {/* Top-right corner */}
        </div>
        <div className="absolute bottom-4 right-4">
          <RequestMoreUsers /> {/* Bottom-right corner */}
        </div>
      </div>
    </article>
  );
}

export default LoyaltriMobileApplication;