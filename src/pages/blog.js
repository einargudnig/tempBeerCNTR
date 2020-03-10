import React from 'react'

import Layout from '../components/Layout/layout'
// import { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import blogStyles from './blog.module.scss'

const BlogPage = () => {
    

    return (
            <Layout>
                <h1>Blog</h1>
                <ol className={blogStyles.posts}>

                </ol>
            </Layout>
    )
}

export default BlogPage