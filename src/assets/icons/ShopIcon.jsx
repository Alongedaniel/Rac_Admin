import React from 'react'

const ShopIcon = ({ color = "#938F99", width = "24", height = "24" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0598 10.9395C15.3098 13.1895 15.3098 16.8295 13.0598 19.0695C10.8098 21.3095 7.16985 21.3195 4.92985 19.0695C2.68985 16.8195 2.67985 13.1795 4.92985 10.9395"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.59 13.4109C8.24996 11.0709 8.24996 7.27086 10.59 4.92086C12.93 2.57086 16.73 2.58086 19.08 4.92086C21.43 7.26086 21.42 11.0609 19.08 13.4109"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ShopIcon
