import React from 'react'
import Hero from '../files/hero'
import {Link} from 'react-router-dom'
import Banner from '../component/banner'
function error() {
    return (
        <div>
            <Hero>
            <Banner title="404" subtitle="Page Not Found">
                <Link to='/' className='btn-primary'>our rooms</Link>
            </Banner>
                </Hero>
        </div>
    )
}

export default error
