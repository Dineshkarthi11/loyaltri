import React from "react";
import Header from "./Header";
import UserCountInput from "./UserCountInput";
import CouponCodeInput from "./CouponCodeInput";
import ActionButtons from "./ActionButtons";

function RequestAdditionalUser() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center backdrop-blur-md bg-white/30">
      {/* Full-page background with blur */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/30 z-0"></div>

      {/* Card container */}
      <main className="relative z-10 flex flex-col justify-center py-1.5 bg-gradient-to-b from-blue-100 to-white to-[20%] rounded-3xl border border-solid border-zinc-100 max-w-[447px] shadow-[0px_31px_60px_rgba(59,55,75,0.1)]">
        <section className="flex overflow-hidden relative flex-col items-center py-5 w-full rounded-2xl max-w-[437px] shadow-[0px_10px_15px_rgba(182,181,254,0.19)]">
          <Header />
          <UserCountInput />
          <CouponCodeInput />
          <ActionButtons />
          <button
            className="flex overflow-hidden absolute z-0 justify-center items-center self-start px-2 w-8 h-8 bg-white rounded-2xl border border-solid border-black border-opacity-10 right-[17px] top-[19px]"
            aria-label="Close"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b828ea14f3e06e30832d2ce6a8360ec188de026c4a0c1761f948c52421a41ab?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39"
              alt=""
              className="object-contain self-stretch my-auto aspect-square w-[18px]"
            />
          </button>
        </section>
      </main>
    </div>
  );
}

export default RequestAdditionalUser;