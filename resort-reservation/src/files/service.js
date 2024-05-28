import React, { Component } from 'react'
import Title from '../files/title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'


export default class service extends Component {
    state={
        services : [
            {
                icons:<FaCocktail/>,
                title:"Free cocktails",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit Magni corporis!"
            },
            {
                icons:<FaHiking/>,
                title:"Endless Hiring",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit Magni corporis!"
            },
            {
                icons:<FaShuttleVan/>,
                title:"Free Shuttle",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit Magni corporis!"
            },
            {
                icons:<FaBeer/>,
                title:"Free Drinks",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit Magni corporis!"
            }
            
        ]
    }
    render() {
        return (
            <section className="services">
                <Title Title="service" />
                <div className="services-center">
                    {
                        this.state.services.map((item,index)=>{
                            return(
                                <article className='service' key={index}>
                                    <span>{item.icons}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                                </article>
                            )
                        })
                    }

                </div>
            </section>
        )
    }
}
