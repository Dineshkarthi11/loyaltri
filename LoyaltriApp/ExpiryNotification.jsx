import React from "react";

function ExpiryNotification() {
  return (
    <div className="flex items-center gap-1.5 text-sm font-semibold text-orange-700">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/caaff835d2a743e3a70644cd163a83fa490c0acfc0c0ef58541269a92e2853f3?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39"
        alt=""
        className="w-6 h-6 rounded-2xl"
      />
      <p>Expiry in 20 days</p>
    </div>
  );
}

export default ExpiryNotification;
