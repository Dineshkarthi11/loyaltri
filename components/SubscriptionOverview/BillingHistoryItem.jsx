import React, { useState } from "react";

function BillingHistoryItem({ date, orderId, isLatest, planDetails }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={`flex overflow-hidden flex-col p-3.5 mt-6 w-full rounded-xl border border-solid ${isLatest ? 'bg-slate-50' : 'bg-slate-50'} border-gray-500 border-opacity-10 max-md:max-w-full cursor-pointer`} 
      onClick={toggleExpand}
    >
      <div className="flex flex-wrap gap-5 justify-between ml-2.5 w-full max-md:max-w-full">
        <div className="flex gap-4 items-center">
          <div className="font-bold text-black text-sm">{date}</div>
          {isLatest && <div className="text-gray-500 text-xs">Latest Payment</div>}
        </div>
        <div className="flex gap-4 font-medium">
          <div className="grow my-auto text-sm text-black">
            Order ID: {orderId}
          </div>
          <div className="flex items-center gap-4">
            <button
              className="flex overflow-hidden gap-2 justify-center items-center px-5 py-3.5 text-base bg-white rounded-lg border border-solid shadow-sm border-black border-opacity-10 text-stone-950"
              onClick={(e) => {
                e.stopPropagation(); // Prevents click on the card from triggering this button's toggle
              }}
            >
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b3b7455ecc2bee1ff5de5599bb5048ea19225d62ea463ed49e29fd9833642f4?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
              Download Invoice
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevents the entire card's toggle
                toggleExpand();
              }}
            >
              <img
                src={isExpanded ? "https://github.com/Dineshkarthi11/loyaltri/blob/main/assets/up.png?raw=true" : "https://github.com/Dineshkarthi11/loyaltri/blob/main/assets/down.png?raw=true"}
                alt="Toggle"
                className="w-8"
              />
            </button>
          </div>
        </div>
      </div>
      {isLatest && isExpanded && planDetails && (
        <div className="relative w-full  p-3 rounded-lg overflow-hidden h-40"> {/* Set a fixed height here */}
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/268a331e469e7b69cbc1623fb4b697faa30bd7c616cf79fdc1905b2415f697d0?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39" 
            alt="Plan Details Background" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="relative ml-6 z-10 text-gray-500 text-xs">Plan details</div>
          <div className="border-t border-gray-200 mx-5 my-2 z-10 relative" />
          <div className="max-h-36 overflow-y-auto relative z-10"> {/* Set a max height for scrolling */}
            {planDetails.map((detail, index) => (
              <div key={index} className="flex justify-between text-sm mx-6 mt-2">
                <div className="truncate">{detail.label}</div>
                <div className="truncate">{detail.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BillingHistoryItem;






/* import React from 'react';

function BillingHistoryItem({ date, orderId, isLatest, planDetails }) {
  return (
    <div className={flex overflow-hidden flex-col p-3.5 mt-6 w-full rounded-xl border border-solid ${isLatest ? 'bg-slate-50' : 'bg-slate-50'} border-gray-500 border-opacity-10 max-md:max-w-full}>
      <div className="flex flex-wrap gap-5 justify-between ml-2.5 w-full max-md:max-w-full">
        <div className="flex gap-8 my-auto text-sm">
          <div className="font-bold text-black">{date}</div>
          {isLatest && <div className="leading-none text-gray-500 basis-auto">Latest Payment</div>}
        </div>
        <div className="flex gap-4 font-medium">
          <div className="grow my-auto text-sm text-black">
            Order ID: {orderId}
          </div>
          <button className="flex overflow-hidden gap-2 justify-center items-center px-5 py-3.5 text-base bg-white rounded-lg border border-solid shadow-sm border-black border-opacity-10 text-stone-950">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b3b7455ecc2bee1ff5de5599bb5048ea19225d62ea463ed49e29fd9833642f4?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            <span className="self-stretch my-auto">Download Invoice</span>
          </button>
          <img loading="lazy" src={isLatest ? "https://cdn.builder.io/api/v1/image/assets/TEMP/4c8be16d5324d60db4446b360a9a05bf03c36353c6f11144636d5612bbe3f956?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39" : "https://cdn.builder.io/api/v1/image/assets/TEMP/5a5a18a86b9eac145233b3ab49c1bb9b0922d285020da40c4fc391d6bf0bd1f6?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39"} alt="" className="object-contain shrink-0 rounded-lg aspect-[1.06] w-[55px]" />
        </div>
      </div>
      {isLatest && planDetails && (
        <div className="flex relative flex-col px-8 py-5 mt-3.5 w-full text-sm font-medium min-h-[206px] shadow-[0px_56px_16px_rgba(106,75,252,0)] max-md:px-5 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/268a331e469e7b69cbc1623fb4b697faa30bd7c616cf79fdc1905b2415f697d0?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39" alt="" className="object-cover absolute inset-0 size-full" />
          <div className="relative self-start text-gray-500">Plan details</div>
          <div className="relative shrink-0 mt-5 h-px border border-gray-200 border-dashed bg-zinc-300 max-md:max-w-full" />
          <div className="flex relative flex-wrap gap-5 justify-between mt-6 text-black max-md:max-w-full">
            <div className="flex flex-col max-md:max-w-full">
              {planDetails.map((detail, index) => (
                <div key={index} className="flex flex-wrap gap-10 justify-between items-start mt-7 max-md:max-w-full">
                  <div>{detail.label}</div>
                  <div className="leading-none">{detail.value}</div>
                </div>
              ))}
            </div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/19865f23267272269dec0c274ac2834038ccc0cdec3769d0edef7018e431418e?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39" alt="" className="object-contain shrink-0 self-end mt-14 aspect-[1.2] w-[55px] max-md:mt-10" />
          </div>
        </div>
      )}
    </div>
  );
}

export default BillingHistoryItem;*/
