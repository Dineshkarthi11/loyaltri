import React from "react";
import ExpiryNotification from "./ExpiryNotification";
import UserCount from "./UserCount";
import RequestMoreUsers from "./RequestMoreUsers";

function LoyaltriMobileApplication() {
  return (
    <article className="relative flex flex-col  h-full min-w-[320px] min-h-[250px] bg-white rounded-2xl border border-dashed border-violet-600 border-opacity-20 overflow-hidden">
      <div className="relative flex flex-col h-full w-full p-5">
        {/* Background Image */}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f725d06ded8b0b366880068fe2cc8e29b03c09aee3a3002cb232fa5ca9ab9354?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Top-left: Title and Validity */}
        <header className="absolute top-4 left-5 z-10">
          <h1 className="text-xl w-[150px] font-semibold text-violet-600">
            Loyaltri Mobile Application
          </h1>
          <p className="mt-1 text-gray-500">Valid till 06 Jan, 2025</p>
        </header>

        {/* Top-right: Expiry Notification */}
        <div className="absolute top-4 right-5 z-10">
          <ExpiryNotification />
        </div>

        {/* Bottom-left: User Count */}
        <div className="absolute bottom-4 left-5 z-10">
          <UserCount />
        </div>

        {/* Bottom-right: Request More Users */}
        <div className="absolute bottom-4 right-5 z-10">
          <RequestMoreUsers />
        </div>
      </div>
    </article>
  );
}

export default LoyaltriMobileApplication;
