import React,{useContext} from 'react'
import Title from '../files/title'
import {RoomContext} from './context'

function RoomFilter() {
    const context = useContext(RoomContext)
    const {
        handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,pets
    } = context
    return (
        <section className='filter-container'>
            <Title Title="Search rooms" />
            <form className='filter-form'>
                <div className="form-group">
                <label htmlFor="type">
                    room type
                </label>
                <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                <option value="all">all</option>
                <option value="single">single</option>
                <option value="double">double</option>
                <option value="family">family</option>
                <option value="presidential">presidential</option>
                </select>
                </div>
                <div className="form-group">
                <label htmlFor="type">
                    Guest
                </label>
                <select name="capacity" id="type" value={capacity} className="form-control" onChange={handleChange}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
                </div>
                <div className="form-group">
                <label htmlFor="price">
                    room price:${price}
                </label>
                <input name="price" className='form-control' min={minPrice} max={maxPrice} value={price} onChange={handleChange} type='range' />
                </div>
                <div className="form-group">
                <label htmlFor="size">
                    room size
                </label>
                <input name="minSize"  value={minSize} onChange={handleChange} type='minSize' className="size-input" />
                <input name="maxSize"  value={maxSize} onChange={handleChange} type='maxSize' className="size-input" />
                </div>
                <div className='single-extra'>
                    <input type="checkbox" name="pets" checked={pets} onChange={handleChange} />
                    <label>Pets</label>
                </div>
                
            </form>
        </section>
    )
}

export default RoomFilter
