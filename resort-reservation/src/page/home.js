import React from 'react'
import Hero from '../files/hero'
import {Link} from 'react-router-dom'
import Service from '../files/service'
import Display from '../component/displayContext'
import Banner from '../component/banner'
function home() {
    return (
        <div>
            <Hero>
            <Banner title="Luxurious rooms" subtitle="deluxe rooms starting at $299">
                <Link to='/' className='btn-primary'>our rooms</Link>
            </Banner>
                </Hero>
            
                <Service />
                <Display />
        </div>
    )
}

export default home
