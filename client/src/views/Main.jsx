import React, { useState } from 'react'

import Test from '../components/Test';

const Main = () => {
    
    return (
        <div>
            <nav>
                <h1>What's the Tide?</h1>
            </nav>

            <h1>Go go GO, do what you want. Text from Main.jsx</h1>
            <div>
                <Test path="/" />
            </div>
            
        </div>
    )
}

export default Main;