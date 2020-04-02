import React from "react";

export default ({ name, description, url, image, tags }) => {
  return (
    <div className="rounded shadow-lg overflow-hidden bg-red-blue">
      <a href={url}>
        <img
          className="w-full"
          src={image}
          alt="Project"
          style={{ maxHeight: "45vh" }}
        />
        <div className="p-3">
          <div className="font-bold text-xl mb-2">
            <p>{name}</p>
          </div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="p-3">
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
    </div>
  );
};
