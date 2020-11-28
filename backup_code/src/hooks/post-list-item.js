import { Link } from "gatsby"

export const blogListItem = (props) =>{
  return (
    <div className="blog-list-item">
      <h2><Link>{props.title}</Link></h2>
      <div className="blog-meta">
        <div className="date">
          {props.date}
        </div>
        <div className="tags">
          {props.tags}
        </div>
        <div className="categories">
          {props.categories}
        </div>
      </div>
      <div className="excerpt">
        <Link>
        {props.excerpt}
        </Link>
      </div>
      
    {/* 클래스에 태그랑 카태고리 지정 -> 활성 비활성에 따라 보이고 안보이고 */}

    </div>
  )
}