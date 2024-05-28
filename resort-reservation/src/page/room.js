import React from 'react'
import Hero from '../files/hero'
import Banner from '../component/banner'
import Room from '../component/roomContainer'
import {Link} from 'react-router-dom'

function room() {
    return (
        <div>
            <Hero hero="roomsHero">
            <Banner title="Our rooms">
                <Link to='/' className='btn-primary'>our rooms</Link>
            </Banner>
                 </Hero>
                 <Room />
        </div>
    )
}

export default room
