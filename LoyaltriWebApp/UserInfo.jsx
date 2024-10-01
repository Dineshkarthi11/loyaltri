
import React from "react";

function UserInfo() {
  return (
    <div className="flex relative flex-col flex-1 items-start mt-4 text-sm font-medium text-white">
      <h1 className="text-xl w-[150px] font-semibold">Loyaltri Web Application</h1>
      <p className="self-stretch mt-3.5 text-zinc-100">
        Valid till 06 Jan, 2025
      </p>
      <p className="mt-12 text-zinc-100">Users</p>
      <p className="mt-2.5 text-base font-extrabold">
        25/<span className="text-sm">50</span>{" "}
        <span className="text-sm">active users</span>
      </p>
    </div>
  );
}

export default UserInfo;
