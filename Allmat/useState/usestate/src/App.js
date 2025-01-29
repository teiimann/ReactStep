import React, { useState, useEffect } from 'react';
import Children from './Children';

const App = () => {
    const [state, setState] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const onClickHandler = () => {
        setState((currentState) => !currentState);
    };

    const incrementCounter = () => {
        setClickCount((prev) => prev + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='App-container'>
            <button onClick={onClickHandler} className='switchBTN'>Switch</button>
            <button onClick={incrementCounter} className='counterBTN'>Click me</button>
            <p>Click count: {clickCount}</p>
            <p>Current time: {time}</p>
            {state && <Children />}
        </div>
    );
};

export default App;
