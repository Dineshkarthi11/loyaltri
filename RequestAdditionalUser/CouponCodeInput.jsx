import React, { useState } from "react";
import ModalAnt from "../../../common/ModalAnt";
import UserCountInputOne from "../RequestAdditionalUserMore/UserCountInputOne";
import DiscountCode from "../RequestAdditionalUserMore/DiscountCode";
import TotalAmount from "../RequestAdditionalUserMore/TotalAmount";
import HeaderThird from "../RequestAdditionalUserMore/HeaderThird";
import UserCountInput from "./UserCountInput";

function CouponCodeInput() {
  const [isModaltwoOpen, setIsModaltwoOpen] = useState(false); // Modal for RequestAdditionalUserMore
  const [isCouponValid, setIsCouponValid] = useState(false); // State for coupon validation (or any condition)

  // This function will handle the "Apply" button click logic
  const handleApplyClick = () => {
    // Assuming you have some logic here to validate the coupon or handle conditions
    // For example, let's assume the coupon is valid when a certain value is entered
    const couponCode = "VALIDCOUPON"; // Example hardcoded valid coupon
    const inputCode = document.querySelector("input").value; // Get the value from input

    if (inputCode === couponCode) {
      // Condition met, show the second popup (RequestMoreUsersMore page)
      setIsCouponValid(true);
      setIsModaltwoOpen(true); // Open the second popup
    } else {
      // Condition not met, close the first popup and don't show second popup
      setIsCouponValid(false);
      setIsModaltwoOpen(false); // Close first popup
      alert("Invalid Coupon!"); // Optional alert for invalid coupon
    }
  };

  return (
    <div className="flex flex-col mt-3.5 w-[410px] text-sm leading-none min-h-[53px]">
      <div className="flex overflow-hidden gap-10 justify-between items-center px-2 py-2.5 w-full rounded-lg border border-gray-300 border-dashed bg-zinc-50 min-h-[53px]">
        <div className="flex gap-2 items-center self-stretch my-auto text-gray-500">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8007e64ed713fef7bca1475766268dafc9bb68562b78e266a1af4a2ba01f188?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            alt=""
          />
          <input
            type="text"
            className="gap-2 self-stretch my-auto bg-transparent border-none outline-none"
            placeholder="Type coupon code here"
          />
        </div>
        <button
          onClick={handleApplyClick} // Handle apply click logic
          className="flex items-start self-stretch my-auto font-semibold whitespace-nowrap rounded-lg text-zinc-800 overflow-hidden gap-2 px-3.5 py-2 bg-white border border-solid shadow-sm border-black border-opacity-10"
        >
          Apply
        </button>
      </div>

      {/* Second modal (RequestMoreUsersMore page) */}
      <ModalAnt
        isVisible={isModaltwoOpen && isCouponValid} // Show only if coupon is valid
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
        <section className="flex overflow-hidden relative flex-col items-center py-5 w-[437px] h-[320px] rounded-2xl max-w-[437px]">
          <HeaderThird />
          <form className="flex z-0 flex-col mt-4 max-w-full w-[405px]">
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
