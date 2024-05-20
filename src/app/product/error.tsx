"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-center font-bold text-2xl">Something went wrong</h1>
      <button
        className="py-1 px-2 text-white bg-blue-600 rounded m-2"
        onClick={reset}
      >
        Try Again
      </button>
    </div>
  );
}
