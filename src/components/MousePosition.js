import React from "react";
import { useEffect, useState } from "react";
function MousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleMove(e) {
        setPosition({ x: e.clientX, y: e.clientY });
        console.log("Updating state");
      }
      window.addEventListener("pointermove", handleMove);
      return () => {
        console.log("Unmounted");
        window.removeEventListener("pointermove", handleMove);
      };
    }
  }, []);

  return (
    <div className="space-y-5">
      <div
        className="absolute bg-gray-600 border-2 rounded-md text-white p-5 opacity-50 border-gray-900 shadow-toolkit"
        style={{ left: `${position.x + 20}px`, top: `${position.y + 20}px` }}
      >
        <div>
          X position: <strong>{position.x.toFixed(2)}</strong>
        </div>
        <div>
          Y position: <strong>{position.y.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
}

export default MousePosition;
