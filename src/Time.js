import React from 'react';

const Time = () => {
    const [time, setTime] = React.useState(0);

    return (
        <div>
            <button onClick={() => setTime(5)}>5 minutes</button>
            <button onClick={() => setTime(10)}>10 minutes</button>
            <button onClick={() => setTime(20)}>20 minutes</button>
            <h2>{time}</h2>
        </div>
    )
}

export default Time; 