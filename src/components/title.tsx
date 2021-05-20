// post title

import React from "react";
import { TagList } from "./tag-list";

type TitleProps = {
  title: string;
  date: string;
  tags?: [];
};
const Title = ({ title, date, tags }: TitleProps) => (
  <div
    style={{
      borderBottom: `1px solid #8383837e`,
      paddingBottom: `1em`,
      marginBottom: `2em`,
    }}
  >
    <div>
      <h1
        style={{
          fontSize: `calc(18px + 1.5vh)`,
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
      <div style={{ marginLeft: `2em`, fontSize: `.85rem` }}>
        <TagList tags={tags} />
      </div>
    </div>
  </div>
);

export default Title;
