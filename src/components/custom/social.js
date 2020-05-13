import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ data, size = "2x", color = "white" }) => (
  <div className="flex w-3/4 items-center justify-between">
    {data.map((social, index) => (
      <a
        key={index}
        href={social.url}
        className="mx-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={["fab", social.icon]}
          color={color}
          size={size}
        />
      </a>
    ))}
  </div>
);
