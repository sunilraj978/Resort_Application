import React from 'react'
import Rooms from '../page/rooms'
function roomList({room}) {
    if(room.length === 0){
        return(
            <div className='empty-search'>
                <h3>there is no room for your confort</h3>
            </div>
        )
    }
    return (
        <section className="roomslist">
            <div className='roomslist-center'>
                {room.map(item=>{
                    return(
                        <Rooms key={item.id} room={item} />
                    )
                })}
            </div>
        </section>
    )
}

export default roomList
