import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ data, size = "2x", color = "white" }) =>
  data.map((social, index) => (
    <a
      key={index}
      href={social.url}
      style={{ margin: "0 10px 0 10px" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={["fab", social.icon]} color={color} size={size} />
    </a>
  ));
