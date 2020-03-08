import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/layout'

const NotFound =() => {
    return (
        <Layout>
            <h2>Page not Found!</h2>
            <p><Link to="/">Head home</Link></p>
        </Layout>
    )
}

export default NotFound