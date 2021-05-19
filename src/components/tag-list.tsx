import React from "react";
import { Link } from "gatsby";
import { Badge } from "theme-ui";

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
          <>
            <Badge variant="tag" key={tag}>
              <Link to={`/?tag=${tag.split(" ").join("")}`}>{tag}</Link>
            </Badge>
          </>
        );
      })}
    </div>
  );
};
