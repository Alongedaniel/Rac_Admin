/* eslint-disable react/prop-types */
import { ExportCurve } from "iconsax-react";

const FileInput = ({ id, label, value, onChange }) => {
  let filename;
  if (value) {
    if (value.length > 0) {
      filename = value;
    }
  }

  const shortenFileName = (filename, length) => {
    return (
      filename &&
      `${filename.slice(0, length)}...${filename.slice(
        filename.length - length,
      )}`
    );
  };

  return (
    <div className="relative flex w-full flex-col">
      <label
        htmlFor={id}
        className="body-sm mb-1 pl-[11px] tracking-[.03125em] text-gray-500"
      >
        {label}
      </label>
      <div className="btn-segmented inline-flex w-full flex-row items-center">
        <div className="segmented-item active btn-outline relative inline-flex h-10 w-1/2 flex-row items-center justify-center gap-x-2 !rounded-l-[4px] border border-gray-500 bg-primary-100 py-2.5 [&.active]:bg-secondary-100">
          <input
            type="file"
            aria-label={label}
            name={id}
            id={id}
            onChange={onChange}
            className="absolute inset-0 z-10 cursor-pointer opacity-0"
          />
          <div className="label-lg flex items-center gap-[8px] text-secondary-900">
            <ExportCurve size={18} color="#292d32" variant="Outline" />
            <span>Choose file</span>
          </div>
        </div>
        <div className="segmented-item label-lg relative inline-flex h-10 w-1/2 flex-row items-center justify-center gap-x-2 border border-gray-500 py-2.5 text-neutral-900">
          <div className="sm:hidden">
            {shortenFileName(filename, 5) ?? "No file chosen"}
          </div>
          <div className="hidden sm:block">
            {shortenFileName(filename, 10) ?? "No file chosen"}
          </div>
        </div>
      </div>
      <div className="hidden px-4 pt-1 text-xs tracking-[0.4px]">
        Supporting text
      </div>
    </div>
  );
};

export default FileInput;
