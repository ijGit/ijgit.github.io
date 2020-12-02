---
title: use static query
date: 2020-12-02
tags: 
  - gatsby
  - react
---

https://www.gatsbyjs.com/docs/use-static-query/


```shell
npm install react@^16.8.0 react-dom@^16.8.0
```


Header (사이트 제목)을 쿼리하는 구성 요소

```jsx
//header.js
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Header() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header>
      <h1>{data.site.siteMetadata.title}</h1>
    </header>
  )
}
```


```jsx
// hooks/metadata.jsx
import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            siteUrl
            headline
            description
            image
            video
            twitter
            name
            logo
          }
        }
      }
    `
  )
  return site.siteMetadata
}
```


후크 가져오기

```jsx
// src/pages/index.js
import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default function Home() {
  const { title, siteUrl } = useSiteMetadata()
  return <h1>welcome to {title}</h1>
}
```