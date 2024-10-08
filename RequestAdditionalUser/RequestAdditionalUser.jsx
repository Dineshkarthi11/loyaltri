import React, { useState } from "react";
import Header from "./Header";
import UserCountInput from "./UserCountInput";
import CouponCodeInput from "./CouponCodeInput";
import ActionButtons from "./ActionButtons";
import ModalAnt from "../../../common/ModalAnt";
import HeaderThird from "../RequestAdditionalUserMore/HeaderThird";
import UserCountInputOne from "../RequestAdditionalUserMore/UserCountInputOne";
import DiscountCode from "../RequestAdditionalUserMore/DiscountCode";
import TotalAmount from "../RequestAdditionalUserMore/TotalAmount";

function RequestAdditionalUser() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative h-screen w-full flex items-center justify-center backdrop-blur-md bg-white/30">
      {/* Card container */}
      <main className="relative z-10 flex flex-col justify-center py-1.5 bg-gradient-to-b from-blue-100 to-white to-[20%] rounded-3xl border border-solid border-zinc-100 max-w-[447px] shadow-[0px_31px_60px_rgba(59,55,75,0.1)]">
        <section className="flex overflow-hidden relative flex-col items-center py-5 w-full rounded-2xl max-w-[437px] shadow-[0px_10px_15px_rgba(182,181,254,0.19)]">
          {/* Header */}
          <Header />

          {/* User Count Input */}
          <UserCountInput />

          {/* Coupon Code Input */}
          <CouponCodeInput onsubmit={() => {
            setIsModalOpen(true);
          }} />

          {/* Action Buttons */}
          <ActionButtons />
        </section>
      </main>

      {/* Modal for Payment */}
      <ModalAnt
        isVisible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        showOkButton={true}
        cancelText="Request"
        okText="Make Payment"
        okButtonClass="mx-[15px] w-[190px]"
        cancelButtonClass="w-[190px]"
        showCancelButton={true}
        showTitle={false}
        centered={true}
        padding="8px"
        customButton={false}
      >
        <section className="flex overflow-hidden relative flex-col items-center py-5 w-[437px] h-[320px] rounded-2xl max-w-[437px]">
          <HeaderThird />
          <UserCountInputOne />
          <DiscountCode />
          <TotalAmount />
        </section>
      </ModalAnt>
    </div>
  );
}

export default RequestAdditionalUser;
