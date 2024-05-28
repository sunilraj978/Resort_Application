import React, { Component } from 'react'
import items from '../files/data'
const RoomContext = React.createContext();

class RoomProvider extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        minSize:0,
        maxSize:0,
        maxPrice:0,
        breakFast:false,
        pets:false
    }

    handleChange = event =>
    {
        const target = event.target;
        const name = event.target.name;
        const value = target.type === 'checkbox'?target.checked:target.value

        this.setState({
            [name] : value
        },this.filterRooms)
    }

    filterRooms = ()=>{
        let {
            rooms,type,price,capacity,minSize,maxSize,breakFast,pets
        } = this.state;
        
        let tempRooms = [...rooms];
        //filter by type
        if(type!=='all'){
            tempRooms = tempRooms.filter(room=>room.type === type)
        }
        //filter by capacity
        capacity = parseInt(capacity)
        if(capacity!==1){
            tempRooms = tempRooms.filter(room=>room.capacity >= capacity)
        }
         //filter by price
         price = parseInt(price)
         tempRooms = tempRooms.filter(room=>room.price<=price)


         //filter by size
         tempRooms = tempRooms.filter(room=>room.size>=minSize&&room.size<=maxSize)

         //filter by comforts
         if(breakFast){
            tempRooms = tempRooms.filter(room=>room.breakFast === true)
         }

         if(pets){
            tempRooms = tempRooms.filter(room=>room.pets === true)
         }
        this.setState({
            sortedRooms:tempRooms,
            
        })

       
    }
    
    componentDidMount(){
        let rooms = this.formatData(items)
        let featuredRooms = rooms.filter(room=>room.featured === true);
        let maxPrice = Math.max(...rooms.map(item=>item.price))
        let maxSize =  Math.max(...rooms.map(item=>item.size))
        this.setState({
            rooms,sortedRooms:rooms,featuredRooms,loading:false,price:maxPrice,maxSize,maxPrice
        })
    }


    formatData(items){
        let tempdata = items.map(item=>{
            let id = item.sys.id;
            let images = item.fields.images.map(image=>image.fields.file.url);
            let room = {...item.fields,images,id}
            return room
        })
        return tempdata
    }
    getRoom = slug =>{
        let tempRooms = [...this.state.rooms]
        const room = tempRooms.find(room=>room.slug === slug)
        return room
    }


    render() {
        return (
            <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;


export {RoomProvider,RoomContext,RoomConsumer}