import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Hero from '../files/Styledhero'
import Banner from '../component/banner'
import {RoomContext} from '../component/context'
export default class SingleRoom extends Component {

  constructor(props){
      super(props);
      console.log(this.props)
      this.state = {
          slug:this.props.match.params.slug
      }
  }




  static contextType = RoomContext;
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug)
        if(!room){
            return <div className='error'>
                <h3>No Such Page Found...</h3>
                <Link className="btn-primary" to='/'>Back to Home</Link>
            </div>
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room
        console.log(images[0])
        return (
            <>
            <Hero img={images[0]}>
                <Banner title={`${name} room`} >
                <Link to="/" className="btn-primary">back to home</Link>
                    </Banner>
                
            </Hero>
            <section className="single-room">
                <div className="single-room-images">
                    {images.map((item,index)=>(
                        <img key={index} src={item} alt="" />
                    ))}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
                    <p>{description}</p>
                    </article>
                    <article className="info">
                    <h3>Info</h3>
                    <h6>Price: ${price}</h6>
                    <h6>size:{size}</h6>
                    <h6>capacity:{capacity>1?`${capacity} people`:`${capacity} person`}</h6>
                    <h6>{pets?"pets allowed":'Pets not allowed'}</h6>
                    <h6>{breakfast?'free breakfast' :"no free breakFast"}</h6>
                    </article>
                    <section className="room-extras">
                        <h6>extras</h6>
                        <ul className="extras">
                            {
                                extras.map((item,index)=>{
                                    return(
                                        <li key={index}> -- {item} </li>
                                    )
                                })
                            }
                        </ul>
                    </section>
                </div>
            </section>
            </>
        )
    }
}

