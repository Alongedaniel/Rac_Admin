import React from "react";

const NewShipmentIcon = ({ color = "white" }) => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.2223 11.4966L15.9148 12.8916C15.3823 15.2916 13.4998 17.0016 10.7848 17.0016H7.2148C4.4998 17.0016 2.6173 15.2916 2.0848 12.8916L1.7773 11.4966C1.6273 10.8141 2.0323 10.0416 2.6848 9.77906L3.7498 9.35156L7.8823 7.69406C8.2423 7.55156 8.6248 7.47656 8.9998 7.47656C9.3748 7.47656 9.7573 7.55156 10.1173 7.69406L14.2498 9.35156L15.3148 9.77906C15.9673 10.0416 16.3723 10.8141 16.2223 11.4966Z"
        fill={color}
      />
      <path
        d="M14.25 6.5V7.58C14.25 7.8425 13.98 8.03 13.7325 7.925L10.53 6.6425C9.5475 6.26 8.4525 6.26 7.4625 6.65L4.2675 7.9325C4.02 8.0375 3.75 7.85 3.75 7.5875V6.5C3.75 5.2625 4.7625 4.25 6 4.25H12C13.2375 4.25 14.25 5.2625 14.25 6.5Z"
        fill={color}
      />
      <path
        d="M10.875 4.25H7.125V2.75C7.125 2.3375 7.4625 2 7.875 2H10.125C10.5375 2 10.875 2.3375 10.875 2.75V4.25Z"
        fill={color}
      />
    </svg>
  );
};

export default NewShipmentIcon;
