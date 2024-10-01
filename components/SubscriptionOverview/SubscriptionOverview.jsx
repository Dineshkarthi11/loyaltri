import React from "react";
import Sidebar from "./Sidebar";
import HeaderTop from "./HeaderTop";
import SubscriptionDetails from "./SubscriptionDetails";
import BillingHistory from "./BillingHistory";

function SubscriptionOverview() {
  return (
    <div className="flex flex-col md:flex-row w-full h-full bg-white">
      <Sidebar />
      <div className="flex flex-col w-full px-6 max-md:px-4">
        <HeaderTop />
        <main className="flex flex-col">
          <SubscriptionDetails />
          <BillingHistory />
        </main>
      </div>
    </div>
  );
}

export default SubscriptionOverview;