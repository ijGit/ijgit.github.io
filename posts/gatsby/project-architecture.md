---
title: Gatsby project architecture
date: 2020-12-02
tags: [gatsby, how to]
category: dev
---

## gatsby 프로젝트 구조

```text
|-- /.cache
|-- /plugins
|-- /public
|-- /src
    |-- /pages
    |-- /templates
    |-- html.js
|-- /static
|-- gatsby-config.js
|-- gatsby-node.js
|-- gatsby-ssr.js
|-- gatsby-browser.js
```

- `gatsby-config.js` — 프로젝트 제목, 설명, 플러그인 등에 대한 메타 데이터와 함께 Gatsby 사이트에 대한 옵션을 구성합니다.
- `gatsby-node.js` — Gatsby의 Node.js API를 구현하여 빌드 프로세스에 영향을 미치는 기본 설정을 사용자 정의하고 확장합니다.
- `gatsby-browser.js` — Gatsby의 브라우저 API를 사용하여 브라우저에 영향을 미치는 기본 설정을 사용자 정의하고 확장합니다.
- `gatsby-ssr.js` — Gatsby의 서버 측 렌더링 API를 사용하여 서버 측 렌더링에 영향을 미치는 기본 설정을 사용자 정의합니다.