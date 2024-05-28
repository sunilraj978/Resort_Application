import React from 'react'

function banner({title,subtitle,children}) {
    return (
        <div>
            <div className="banner">
    <h1 style={{fontWeight:"bold"}}>{title}</h1>
    <div></div>
    <p>{subtitle}</p>
    {children}
            </div>
        </div>
    )
}

export default banner
