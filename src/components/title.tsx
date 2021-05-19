// post title

import React, { ReactNode } from "react"
import {TagList} from './tag-list'

type TitleProps = {
  title: string
  date: string
  tags?: []
}


const Title = ({title, date, tags}: TitleProps) => (

  <div 
    style={{
      borderBottomStyle: `solid`,
      borderBottomWidth: `1px`,
      borderBottomColor: `divide`,
      
      paddingBottom: `1em`,
      marginBottom: `2em`
    }}
  >

    <div>
      <h1 
        style={{
          fontSize: `calc(18px + 1.5vh)`
        }}
        >  
        {title}
      </h1>
    </div>

    <div style={{
      display: `flex`,
      justifyContent: `flex-start`,
      alignContent: `center`,
      alignItems: `center`,
    }}>
      <div>{date}</div>
      <div className='tags' style={{marginLeft: `1em`}}><TagList tags={tags} /></div>
    </div>


  </div>
)

export default Title