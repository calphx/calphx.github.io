import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, pageHeading }) => {
    return (
        <main> 
            <title>{pageTitle}</title>
            <nav></nav>
            <h1>{pageHeading}</h1>
        </main>
    )
}

export default Layout 