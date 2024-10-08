import React from "react";
import Header from "./HeaderActive";
import UserSearch from "./UserSearch";
import UserList from "./UserList";
import ActionButtons from "./ActionButtons";
import HeaderActive from "./HeaderActive";

function ActiveInactiveUsers() {
  return (
    <section className="relative flex justify-end h-screen backdrop-blur-md">
      {/* Free left-side width for free view */}
      <div className="flex-grow"></div>
      
      {/* Main container for header and card */}
      <div className="w-[550px] flex flex-col items-end mr-6"> 
        {/* Header */}
        <div className="w-full">
          <HeaderActive />
        </div>

        {/* Divider under header */}
        <div className="w-full z-10 shrink-0 mt-4 rounded-3xl bg-zinc-300 h-[5px] shadow-[0px_1px_2px_rgba(0,0,0,0.02)]" />

        {/* Main card */}
        <main className="flex flex-col px-6 pt-4 pb-8 w-full bg-white shadow-[0px_24px_100px_rgba(0,0,0,0.15)] rounded-lg mt-4">
          <UserSearch />
          <UserList />
          <ActionButtons />
        </main>
      </div>
    </section>
  );
}

export default ActiveInactiveUsers;
