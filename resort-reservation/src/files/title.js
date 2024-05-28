import React from 'react'
function title({Title}) {
    return (
        <div className="section-title">
            <h4 style={{fontWeight:"bold"}}>{Title}</h4>
            <div style={{marginTop:"-12px"}}></div>
        </div>
    )
}

export default title
