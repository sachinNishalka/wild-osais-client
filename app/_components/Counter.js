"use client";
import React, { useState } from "react";

export default function Counter({ users }) {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>There are {users.length} users.</p>
      <button
        onClick={() => {
          setCounter((c) => c + 1);
        }}
      >
        Count {counter}
      </button>
    </div>
  );
}
