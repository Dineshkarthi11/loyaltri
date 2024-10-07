import React from "react";

function CouponCodeInput({ onApply }) {  // Receive the onApply function as a prop

  const handleApplyClick = () => {
    onApply();  // Call the function when Apply button is clicked
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
          onClick={handleApplyClick} // Trigger onApply when clicked
          className="flex items-start self-stretch my-auto font-semibold whitespace-nowrap rounded-lg text-zinc-800 overflow-hidden gap-2 px-3.5 py-2 bg-white border border-solid shadow-sm border-black border-opacity-10"
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default CouponCodeInput;
