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
        
        var tagColor = [0, 0, 0];
        var tagColorIdx = 0;
        for (var i=0; i<tag.length; i++){
          tagColor[tagColorIdx] += tag.charCodeAt(i);
          tagColor[tagColorIdx] %= 256;
          tagColorIdx = (tagColorIdx+1)%3; 
        }

        for (var i=0; i<tag.length; i++){
          if(tagColor[i] < 100){
            tagColor[i] += 120;
            break;
          } 
        }

        var newColor = `rgb(${tagColor[0]}, ${tagColor[1]}, ${tagColor[2]})`;
        console.log(newColor);
        
                

        return (
          <>

            <Badge variant="tag"
              style={{
                background: newColor,
                color: '#000000'
              }} 
              
            
              key={tag}>
              <Link to={`/?tag=${tag.split(" ").join("")}`}>{tag}</Link>
            </Badge>
          </>
        );
      })}
    </div>
  );
};
