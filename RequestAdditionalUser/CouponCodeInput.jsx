import React, { useState } from "react";
import ModalAnt from "../../../common/ModalAnt";
import UserCountInputOne from "../RequestAdditionalUserMore/UserCountInputOne";
import DiscountCode from "../RequestAdditionalUserMore/DiscountCode";
import TotalAmount from "../RequestAdditionalUserMore/TotalAmount";
import HeaderThird from "../RequestAdditionalUserMore/HeaderThird";
import UserCountInput from "./UserCountInput";

function CouponCodeInput() {
  const [isModalOneOpen, setIsModalOneOpen] = useState(true); // First modal state
  const [isModaltwoOpen, setIsModaltwoOpen] = useState(false); // Second modal state

  // Handle "Apply" button click
  const handleApplyClick = () => {
    setIsModalOneOpen(false); // Close the first modal
    setIsModaltwoOpen(true);  // Open the second modal
  };

  return (
    <div className="flex flex-col mt-3.5 w-[410px] text-sm leading-none min-h-[53px]">

      {/* First Modal (RequestAdditionalUser) */}
      {isModalOneOpen && (
        <ModalAnt
          isVisible={isModalOneOpen}
          onClose={() => setIsModalOneOpen(false)}
          showOkButton={false}
          showCancelButton={false}
          showTitle={false}
          centered={true}
          padding="8px"
          customButton={false}
        >
          <section className="flex flex-col items-center py-5 w-[437px] h-[320px] rounded-2xl">
            <HeaderThird />
            <form className="flex flex-col mt-4 max-w-full w-[405px]">
              <UserCountInput />
              {/* Other form inputs */}
            </form>
          </section>
        </ModalAnt>
      )}

      {/* Coupon Code Input */}
      <div className="flex overflow-hidden gap-10 justify-between items-center px-2 py-2.5 w-full rounded-lg border border-gray-300 border-dashed bg-zinc-50 min-h-[53px]">
        <div className="flex gap-2 items-center text-gray-500">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8007e64ed713fef7bca1475766268dafc9bb68562b78e266a1af4a2ba01f188"
            className="w-6"
            alt=""
          />
          <input
            type="text"
            className="bg-transparent border-none outline-none"
            placeholder="Type coupon code here"
          />
        </div>
        <button
          onClick={handleApplyClick} // Handle the "Apply" button
          className="font-semibold rounded-lg text-zinc-800 px-3.5 py-2 bg-white border border-black border-opacity-10 shadow-sm"
        >
          Apply
        </button>
      </div>

      {/* Second Modal (RequestMoreUsersMore) */}
      <ModalAnt
        isVisible={isModaltwoOpen} // Show second modal when true
        onClose={() => setIsModaltwoOpen(false)}
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
        <section className="flex flex-col items-center py-5 w-[437px] h-[320px] rounded-2xl">
          <HeaderThird />
          <form className="flex flex-col mt-4 max-w-full w-[405px]">
            <UserCountInputOne />
            <DiscountCode />
            <TotalAmount />
          </form>
        </section>
      </ModalAnt>
    </div>
  );
}

export default CouponCodeInput;
