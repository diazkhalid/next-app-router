"use client";

import { useState } from "react";

export default function AdminProductsPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const url = `http://localhost:3000/api/revalidate?tag=products&secret=${process.env.NEXT_PUBLIC_REVALIDATE_CODE}`;
    const res = await fetch(url, {
      method: "POST",
    });

    if (!res.ok) {
      setStatus("Failed to revalidate");
      return;
    }
    const response = await res.json();
    if (response.revalidate) {
      setStatus("Revalidated successfully");
    }
  };
  return (
    <>
      <h1>{status}</h1>
      <button
        className="p-5 bg-slate-700 text-white m-5 hover:bg-slate-500"
        onClick={() => revalidate()}
      >
        Revalidate
      </button>
    </>
  );
}
