import React from 'react'
//import { graphql } from 'gatsby'

import Layout from '../components/Layout/layout'

/*export const query = graphql`
    query ($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
        frontmatter {
            title
            date
        }
        html
        }
    }
`*/


const Blog = (props) => {
    return (
        <Layout>
            <h1>banani</h1>
            
        </Layout>
    )
}

export default Blog;