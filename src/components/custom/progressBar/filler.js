import React from "react";

export default ({
  color = "black",
  textColor = "white",
  percentage = 0,
  showPercentage = false
}) => (
  <div
    className={`bg-${color} text-xs leading-none py-4 text-center text-${textColor}`}
    style={{ width: `${percentage}%` }}
  >
    {showPercentage ? `${percentage}%` : null}
  </div>
);
