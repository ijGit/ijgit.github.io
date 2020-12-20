import React from "react";
import Select, { components } from "react-select";


export const TagSelect = ({data}) =>{
  var tags = [];
  
  data.map(item => {
    var node = {};
    node['value'] = item.fieldValue.toLowerCase();
    node['label'] = item.fieldValue;
    tags.push(node);
  });
  
  console.log(tags);


  return(
    <div className="container">
      <Select
        options={tags}
        isMulti
      />
    </div>
  )
}
