import React, { useState } from "react";

function BillingHistoryItem({ date, orderId, isLatest }) {
  const [isOpen, setIsOpen] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggleDetails = async () => {
    if (isOpen) {
      // If it’s already open, just close it
      setIsOpen(false);
      return;
    }

    // If it's not open, fetch the API data
    setLoading(true);
    try {
      const response = await fetch("https://dev-api.loyaltri.com/api/main", {
        headers: {
          Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJMT1lBTFRSSSBTRVJWRVIiLCJhdWQiOiJMT1lBTFRSSSBDTElFTlQiLCJzdWIiOiJBVFRIRU5USUNBVElPTiIsImlhdCI6MTcyNDkzMDU5NCwidXNlck5hbWUiOiJhZG1pbiJ9.WftJvLCgEd9lJYfrjbBeKWdfn1g5FT_5HkOiYhJB8ds",
        },
      });
      const data = await response.json();

      // Assuming the API returns the billing history list and check the data structure
      setApiData(data); // Adjust this based on the actual response structure
    } catch (error) {
      console.error("Error fetching API data:", error);
    } finally {
      setLoading(false);
    }
    setIsOpen(true); // Open the details after fetching data
  };

  return (
    <div className={`flex flex-col p-3.5 mt-6 w-full rounded-xl border border-solid ${isLatest ? 'bg-slate-50' : 'bg-white'} border-gray-500 border-opacity-10 max-md:max-w-full`}>
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-4 text-sm">
          <div className="font-bold text-black">{date}</div>
          {isLatest && <div className="text-gray-500">Latest Payment</div>}
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm text-black">Order ID: {orderId}</div>
          <button
            onClick={toggleDetails}
            className="flex items-center justify-center w-8 h-8 bg-white rounded-full border border-gray-300 cursor-pointer transition-all duration-200"
          >
            <img
              src={isOpen 
                ? "https://cdn.builder.io/api/v1/image/assets/TEMP/upward-arrow" 
                : "https://cdn.builder.io/api/v1/image/assets/TEMP/downward-arrow"}
              alt="toggle arrow"
              className="object-contain w-4 h-4 transition-transform duration-200"
            />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 px-4 py-2 bg-gray-100 rounded-lg shadow-inner">
          {loading ? (
            <div>Loading API data...</div>
          ) : apiData && apiData.planDetails ? (
            <div>
              <h3 className="text-sm font-medium text-gray-600">Plan Details</h3>
              {apiData.planDetails.map((detail, index) => (
                <div key={index} className="flex justify-between mt-2">
                  <span>{detail.label}</span>
                  <span>{detail.value}</span>
                </div>
              ))}
            </div>
          ) : (
            <div>No additional data available</div>
          )}
        </div>
      )}
    </div>
  );
}

export default BillingHistoryItem;