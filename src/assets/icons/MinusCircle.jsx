import React from 'react'

const MinusCircle = ({left = '-10px'}) => {
  return (
    <svg
      style={{ position: "relative", left: left }}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 2C6.99 2 2.5 6.49 2.5 12C2.5 17.51 6.99 22 12.5 22C18.01 22 22.5 17.51 22.5 12C22.5 6.49 18.01 2 12.5 2ZM16.42 12.75H8.42C8.01 12.75 7.67 12.41 7.67 12C7.67 11.59 8.01 11.25 8.42 11.25H16.42C16.83 11.25 17.17 11.59 17.17 12C17.17 12.41 16.84 12.75 16.42 12.75Z"
        fill="#CAC4D0"
      />
    </svg>
  );
}

export default MinusCircle
