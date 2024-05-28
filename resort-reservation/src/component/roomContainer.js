import React from 'react'
import {RoomConsumer} from '../component/context'
import RoomFilter from './roomFilter'
import Loading from '../component/loading'
import RoomList from './roomList'
function roomContainer() {
    return (
        <RoomConsumer>
            {
                value =>{
                    const {sortedRooms,rooms,loading} = value;
                    if(loading){
                        return(
                            <Loading />
                        )
                    }
                    return(
                        <div>
                        <RoomFilter room={rooms} />
                        <RoomList room={sortedRooms} />
                        </div>
                    )
                }
            }
        </RoomConsumer>
    )
}

export default roomContainer
