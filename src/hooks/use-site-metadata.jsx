import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            url
            language
            description
            name
            author
          }
        }
      }
    `
  )
  return site.siteMetadata
}