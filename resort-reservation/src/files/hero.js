import React from 'react'

function hero({hero,children}) {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}

hero.defaultProps = {
    hero:"defaultHero"
}

export default hero
