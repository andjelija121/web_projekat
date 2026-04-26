import { useEffect, useRef, useState } from "react";

export default function SearchWithStatus() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("Филтер");

  const options = ["Назив", "Жанр", "Све"];

  const handleSelect = (value) => {
    setStatus(value);
    setOpen(false);
  };

  return (
    <div className="w-[50%]">
      <div className="relative mt-2">

        <div className="absolute top-1 left-1 flex items-center">

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="rounded px-4 py-3 text-sm flex gap-2 items-center text-dark-coffee-800 hover:bg-dark-coffee-100 transition cursor-pointer"
          >
            <span>{status}</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>

          </button>

          <div className="h-6 border-1 border-dark-coffee-200 ml-1" />

          {open && (
            <div className="absolute left-0 w-full mt-10 bg-bela border border-dark-coffee-200 rounded-md shadow-lg z-10">
              <ul>
                {options.map((opt) => (
                  <li
                    key={opt}
                    onClick={() => handleSelect(opt)}
                    className="px-4 py-2 text-dark-coffee-800 hover:bg-dark-coffee-100 text-sm cursor-pointer"
                  >
                    {opt}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <input
          type="text"
          placeholder={
            status === "Назив"
              ? "Претрага по називу..."
              : status === "Жанр"
              ? "Претрага по жанру..."
              : "Претрага књига..."
          }
          className="w-full bg-bela text-dark-coffee-900 placeholder:text-dark-coffee-400 text-sm
                     border border-dark-coffee-200 rounded-md px-35 py-4
                     focus:outline-none focus:border-dark-coffee-500 hover:border-dark-coffee-300
                     shadow-sm focus:shadow"
        />

        <button
          type="button"
          className="absolute top-1 right-1 flex rounded-md items-center gap-2 cursor-pointer
                     bg-dark-coffee-800 text-bela py-3 px-3 text-sm
                     hover:bg-dark-coffee-700 transition shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              className="w-2 h-2 mr-2"
            />
          </svg>

          <span>
            Претражи
          </span>
        </button>

      </div>
    </div>
  );
}