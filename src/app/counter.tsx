"use client";

import React from "react";

import { useCounterStore } from "@/stores/counter";

const Counter = () => {
  const { count, increment, decrement } = useCounterStore((state) => state);
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-2xl font-semibold text-foreground">{count}</p>
      <div className="flex items-center gap-x-4">
        <button
          className="cursor-pointer rounded-xl border border-foreground/10 px-6 py-2 hover:bg-gray-50"
          onClick={() => decrement(5)}
        >
          Decrement
        </button>
        <button
          className="cursor-pointer rounded-xl border border-foreground/10 px-6 py-2 hover:bg-gray-50"
          onClick={() => increment(5)}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
