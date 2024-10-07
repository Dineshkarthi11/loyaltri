import React from "react";
import UserCountInput from "./UserCountInput";
import CouponCodeInput from "./CouponCodeInput";
import ActionButtons from "./ActionButtons";

function RequestAdditionalUser({ onApply }) {
  return (
    <div className="relative h-screen w-full flex items-center justify-center backdrop-blur-md bg-white/30">
      {/* Card container */}
      <main className="relative z-10 flex flex-col justify-center py-1.5 bg-gradient-to-b from-blue-100 to-white to-[20%] rounded-3xl border border-solid border-zinc-100 max-w-[447px] shadow-[0px_31px_60px_rgba(59,55,75,0.1)]">
        <section className="flex overflow-hidden relative flex-col items-center py-5 w-full rounded-2xl max-w-[437px] shadow-[0px_10px_15px_rgba(182,181,254,0.19)]">
          <h1>Request Additional User</h1>
          <UserCountInput />
          <CouponCodeInput />
          <ActionButtons onApply={onApply} />
        </section>
      </main>
    </div>
  );
}

export default RequestAdditionalUser;
