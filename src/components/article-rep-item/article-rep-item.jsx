import { Link } from "gatsby"
import React from "react"

export const ArticleRepItem = ({ node }) =>(
  <div className="article-rep-item" key={ node.fields.slug }>
    <div className="article-rep-meta">
      <Link to={ node.fields.slug }><h3>{node.frontmatter.title}</h3></Link>
      <div>
        <span>{node.frontmatter.date}</span>
        <span>{node.frontmatter.category}</span>
        <span>{node.frontmatter.tags}</span>
      </div>
    </div>
    <div className="article-rep-excerpt">
      {node.excerpt}
    </div>
  </div>
)
