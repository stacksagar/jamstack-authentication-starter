import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  upload_text?: string;
  accept_format_text?: string;
}

export const InputForUploadSkeleton = () => (
  <div className="w-full h-40 flex items-center justify-center relative">
    <div className="w-full h-40 bg-black animate-pulse rounded"></div>
    <p className="absolute inset-0 m-auto text-base font-medium w-fit h-fit text-white">
      Uploading...
    </p>
  </div>
);

export default function InputForUpload({
  upload_text,
  accept_format_text,
  ...all
}: Props) {
  return (
    <label
      htmlFor={all.id || all.name}
      className="mt-2 flex flex-col w-full h-32 rounded border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-50"
    >
      <div className="flex flex-col justify-center items-center pt-5 pb-6">
        <svg
          className="w-10 h-10 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          ></path>
        </svg>
        <p className="py-1 text-sm text-gray-600">
          {upload_text || "Upload a thumbnail or drag and drop"}
        </p>
        <p className="text-xs text-gray-500">
          {accept_format_text || "PNG, JPG, GIF up to 10MB"}
        </p>
      </div>
      <input type="file" {...all} />
    </label>
  );
}
