import React from "react";
import { Link } from "gatsby";
import "./../styles/components/tag/index.scss";

export const TagList = ({ tags }) => {
  return (
    <div
      style={{
        display: `inline-block`,
        fontSize: `0.85rem`,
      }}
    >
      {tags.map((tag) => {
        return (
            <span className="tag-item" key={tag}>
              <Link to={`/?tag=${tag.split(' ').join('')}`}>
              {tag}
              </Link>
            </span>
        );
      })}
    </div>
  );
};
