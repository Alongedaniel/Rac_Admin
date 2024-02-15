import React from 'react'

const StyledArrowRight = ({color="#21005D"}) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9.82919V15.1692C6 18.4892 8.35 19.8392 11.22 18.1892L12.5 17.4492C12.81 17.2692 13 16.9392 13 16.5792V8.41919C13 8.05919 12.81 7.72919 12.5 7.54919L11.22 6.80919C8.35 5.15919 6 6.50919 6 9.82919Z"
        fill={color}
      />
      <path
        d="M14 9.29152V15.7215C14 16.1115 14.42 16.3515 14.75 16.1515L15.85 15.5115C18.72 13.8615 18.72 11.1415 15.85 9.49152L14.75 8.85152C14.42 8.66152 14 8.90152 14 9.29152Z"
        fill={color}
      />
    </svg>
  );
}

export default StyledArrowRight
