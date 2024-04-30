import React from 'react'

const CloseCircle = ({ color = "white" }) => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 2C4.8675 2 1.5 5.3675 1.5 9.5C1.5 13.6325 4.8675 17 9 17C13.1325 17 16.5 13.6325 16.5 9.5C16.5 5.3675 13.1325 2 9 2ZM11.52 11.225C11.7375 11.4425 11.7375 11.8025 11.52 12.02C11.4075 12.1325 11.265 12.185 11.1225 12.185C10.98 12.185 10.8375 12.1325 10.725 12.02L9 10.295L7.275 12.02C7.1625 12.1325 7.02 12.185 6.8775 12.185C6.735 12.185 6.5925 12.1325 6.48 12.02C6.2625 11.8025 6.2625 11.4425 6.48 11.225L8.205 9.5L6.48 7.775C6.2625 7.5575 6.2625 7.1975 6.48 6.98C6.6975 6.7625 7.0575 6.7625 7.275 6.98L9 8.705L10.725 6.98C10.9425 6.7625 11.3025 6.7625 11.52 6.98C11.7375 7.1975 11.7375 7.5575 11.52 7.775L9.795 9.5L11.52 11.225Z"
        fill={color}
      />
    </svg>
  );
};

export default CloseCircle
