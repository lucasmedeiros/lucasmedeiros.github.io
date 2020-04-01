import React from "react";

export default ({ name, description, url, image, tags }) => {
  return (
    <a href={url} className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={image}
        alt="Project"
        style={{ maxHeight: "40vh" }}
      />
      <div className="px-4 py-4">
        <div className="font-bold text-xl mb-2">
          <p>{name}</p>
        </div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-4 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 mb-1 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </a>
  );
};
