import React, { Component } from 'react'
import {RoomContext} from './context'
import Title from '../files/title'
import Loading from './loading'
import Room from '../page/rooms'
export default class displayCOntext extends Component {
    static contextType = RoomContext
    render() {
        let {loading,featuredRooms} = this.context
        featuredRooms = featuredRooms.map(room=>{
            return(
                <Room key={room.id} room={room} />
            )
        })   
        console.log(featuredRooms);
        return (
            <section className="featured-rooms">
                <Title Title='featured rooms' />
                <div className='featured-rooms-center'>
                {
                    loading?<Loading /> : featuredRooms
                }
                </div>
            </section>
        )
    }
}
