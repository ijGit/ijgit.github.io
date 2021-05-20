// post title

import React from "react";
import { TagList } from "./tag-list";
import { Divider } from "theme-ui";

type TitleProps = {
  title: string;
  date: string;
  tags?: [];
};

const Title = ({ title, date, tags }: TitleProps) => (
  <div
    style={{
      paddingBottom: `1em`,
      marginBottom: `2em`,
    }}
  >
    <div>
      <h1
        style={{
          fontSize: `calc(22px + 2vh)`,
        }}
      >
        {title}
      </h1>
    </div>

    <div
      style={{
        display: `flex`,
        justifyContent: `flex-start`,
        alignContent: `center`,
        alignItems: `center`,
      }}
    >
      <div>{date}</div>
      <div className="tags" style={{ marginLeft: `1em` }}>
        <TagList tags={tags} />
      </div>
    </div>

    <Divider />
  </div>
);

export default Title;
