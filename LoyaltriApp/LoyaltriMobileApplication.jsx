import React, { useState } from "react";
import ExpiryNotification from "./ExpiryNotification";
import UserCount from "./UserCount";
import RequestMoreUsers from "./RequestMoreUsers";
import ModalAnt from "../../../common/ModalAnt";
import RequestAdditionalUser from "../RequestAdditionalUser/RequestAdditionalUser";
import RequestAdditionalUserMore from "../RequestAdditionalUserMore/RequestAdditionalUserMore";

function LoyaltriMobileApplication() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAdditionalUser, setShowAdditionalUser] = useState(false);
  const [showAdditionalUserMore, setShowAdditionalUserMore] = useState(false);

  // Handle the Apply button click in RequestAdditionalUser
  const handleApplyClick = () => {
    setShowAdditionalUserMore(true);
    setShowAdditionalUser(false);
  };

  // Handle the Request More Users button click
  const handleRequestMoreUsersClick = () => {
    setShowAdditionalUser(true);
  };

  return (
    <article className="relative flex flex-col w-[380px] h-[250px] min-w-[320px] min-h-[250px] bg-white rounded-2xl border-violet-600 border-opacity-20 overflow-hidden">
      <div className="relative flex flex-col h-full w-full p-5">
        {/* Background Image */}
        <img
          loading="lazy"
          src="https://github.com/Dineshkarthi11/loyaltri/blob/main/assets/Frame%201321316357.png?raw=true"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Top-left: Title and Validity */}
        <div className="absolute top-4 left-5 z-10">
          <h1 className="text-xl w-[150px] font-semibold text-violet-600">Loyaltri Web Application</h1>
          <p className="mt-1 text-gray-500">Valid till 06 Jan, 2025</p>
        </div>

        {/* Top-right: Expiry Notification */}
        <div className="absolute top-4 right-3 z-10">
          <ExpiryNotification />
        </div>

        {/* Bottom-left: User Count */}
        <div className="absolute bottom-4 left-5 z-10">
          <UserCount />
        </div>

        {/* Bottom-right: Request More Users */}
        <div className="absolute bottom-4 right-5 z-10">
          <RequestMoreUsers onsubmit={handleRequestMoreUsersClick} />
        </div>
      </div>

      {/* Modal to show RequestAdditionalUser or RequestAdditionalUserMore */}
      <ModalAnt
        isVisible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        showOkButton={false}
        cancelButtonClass="w-[190px]"
        showCancelButton={false}
        showTitle={false}
        centered={true}
        padding="8px"
      >
        {showAdditionalUser && (
          <RequestAdditionalUser
            onApply={handleApplyClick} // Pass function to handle "Apply" button
          />
        )}

        {showAdditionalUserMore && <RequestAdditionalUserMore />}
      </ModalAnt>
    </article>
  );
}

export default LoyaltriMobileApplication;
