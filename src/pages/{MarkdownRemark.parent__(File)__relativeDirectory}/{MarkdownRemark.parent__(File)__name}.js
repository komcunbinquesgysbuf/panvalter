import React from "react"
import {graphql} from "gatsby"
import {GatsbyImage} from "gatsby-plugin-image";

export default function Template({data}) {
    const {markdownRemark} = data // data.markdownRemark holds your post data
    const {frontmatter, html} = markdownRemark
    return (
        <div className="blog-post-container">
            {frontmatter.featured
                && <GatsbyImage alt={''} image={frontmatter.featured.childImageSharp.gatsbyImageData} />
            }
            <div className="blog-post">
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.date}</h2>
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{__html: html}}
                />
            </div>
        </div>
    )
}
export const pageQuery = graphql`
    query($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                extra
                title
                featured {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`