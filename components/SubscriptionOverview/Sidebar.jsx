import React from "react";

const menuItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0df2b822bc758e2be7fcabbb5f86d63e990f23fc74e3d2a9f21fa425106c0720?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39",
    label: "Discover",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8cf8936778172f30b7d577d3649606cd47e54b61ae8dc77a43ac141a3615a811?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39",
    label: "Company",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d2edda3ca971e96e5a1774d277b1a5bd2b59509b1df0b5cccb3edaf42356181?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39",
    label: "Time",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/17ebc8ad7be25f49fc2229663eb47af7a95f32475e4af7b5b13dc41951c1f3f3?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39",
    label: "Payroll",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e7c929e610d8fa50a33061c0374f94a40d89183568424fb64d299902b6dbe1f8?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39",
    label: "Recruitment",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/88ca4e7290440af68435fed36923179acc887b7e99e364cc2771ffaa1cdad581?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39",
    label: "Reports",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/931aafab2824281edbe0aee89f0272d6e19bc1539d21327e14b3656ef887adcf?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39",
    label: "Settings",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f12e39db01225b9b90de44bf4630c8ee65617ab0a3b9bd922d37e4a25f7890f8?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39",
    label: "Help",
  },
];

function Sidebar() {
  return (
    <nav className="flex overflow-hidden text-xs whitespace-nowrap">
      <div className="flex flex-col justify-between items-center py-5 px-2.5 bg-violet-600 w-auto md:w-20 lg:w-24 max-md:hidden"> {/* Adjust width for md and lg screens */}
        <div className="flex flex-col items-center font-medium text-white">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/967b4fffbd232c54d7a8b73aecd098a48067ff361743e9dd5b8eb003495f3feb?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39"
            alt=""
            className="object-contain aspect-[1.17] w-[41px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a39c84d691589f9edba35dc80a0747c32548a753f80b57e63f8f02fb9cadd609?placeholderIfAbsent=true&apiKey=740fe41628444c68b4015f1a2abbfb39"
            alt=""
            className="object-contain mt-6 w-full rounded-lg aspect-[1.34]"
          />
          {menuItems.slice(0, 6).map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center mt-3.5 w-auto"  
            >
              <img
                loading="lazy"
                src={item.icon}
                alt=""
                className="object-contain w-full aspect-square"
              />
              <div className="mt-1.5">{item.label}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center mt-auto w-full text-white"> {/* Using mt-auto to push to bottom */}
          {menuItems.slice(6).map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center mt-3.5 w-auto font-semibold"
            >
              <img
                loading="lazy"
                src={item.icon}
                alt=""
                className="object-contain w-full aspect-square"
              />
              <div className="mt-1.5">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;