import React from "react";
import UserInfo from "./UserInfo";
import DurationBadge from "./DurationBadge";
import RequestMoreUsers from "./RequestMoreUsers";
import UserInfoDetails from "./UserInfoDetails";

function LoyaltriWebApp() {
  return (
    <article className="relative flex flex-col w-full h-full min-w-[320px] min-h-[250px] bg-white rounded-2xl border border-dashed border-violet-600 border-opacity-20 overflow-hidden">
      {/* Background Image */}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf0906a5e1e0de50f0d74c8c7037d35d66bc651cf3509f75065b17d14b75bb7d?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Top-left: User Info */}
      <div className="absolute top-4 left-5 z-10">
        <UserInfoDetails />
      </div>

      {/* Top-right: Duration Badge */}
      <div className="absolute top-4 right-5 z-10">
        <DurationBadge />
      </div>

      {/* Bottom-left: User Count */}
      <div className="absolute bottom-5 left-5 z-10">
        <UserInfo />
      </div>

      {/* Bottom-right: Request More Users */}
      <div className="absolute bottom-4 right-5 z-10">
        <RequestMoreUsers />
      </div>
    </article>
  );
}

export default LoyaltriWebApp;
