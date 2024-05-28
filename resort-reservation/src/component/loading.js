import React from 'react'
import loadinggif from '../files/images/gif/loading-arrow.gif';
function loading() {
    return (
        <div className="loading">
            <h4>room data loading...</h4>
            <img src={loadinggif} alt="" />
        </div>
    )
}

export default loading
