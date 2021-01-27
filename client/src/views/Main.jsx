import React, { useState } from 'react'

import Calendar from '../components/Calendar';

const Main = () => {
    
    return (
        <div>
            <nav>
                <h1>What's the Tide?</h1>
            </nav>

            <div className="calendarMain">
                <Calendar path="/" />
            </div>
        </div>
    )
}

export default Main;