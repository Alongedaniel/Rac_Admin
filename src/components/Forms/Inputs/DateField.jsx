/* eslint-disable react/prop-types */
import { useRef } from "react";



const DateInput = ({ id, label, value, onChange }) => {
  const ref = useRef(null);

  const handleFocusInput = () => {
    if (!ref.current) return;
    ref.current.focus();
  };

  return (
    <div className="relative flex w-full flex-col">
      <div className="relative z-0">

        <input
          ref={ref}
          type="date"
          step="0.01"
          aria-label={label}
          name={id}
          id={id}
          className="peer relative block h-14 w-full overflow-x-auto rounded-[20px] border border-gray-500 bg-neutral-10 py-2 pl-4 pr-4 leading-5 focus:border-2 focus:border-primary-600 focus:outline-none focus:ring-0"
          placeholder=" "
          value={value}
          onChange={onChange}
        />

        <label
          onClick={handleFocusInput}
          className="bg-white absolute left-14 top-4 z-10 max-w-[170px] origin-[0] -translate-y-7 scale-75 transform overflow-hidden whitespace-nowrap bg-neutral-10 px-1 tracking-[.03125em] text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-invalid:text-error-600 peer-focus:left-4 peer-focus:w-max peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:overflow-visible peer-focus:bg-neutral-10 peer-focus:text-primary-600 min-[500px]:max-w-[500px] sm:w-max"
        >
          {label}
        </label>
      </div>
      <div className="hidden px-4 pt-1 text-xs tracking-[0.4px]">
        Supporting text
      </div>
    </div>
  );
};

export default DateInput;
