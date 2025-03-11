import { useState, useEffect } from 'react';

export default function Note() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        alert('Start')
    }, []);

    useEffect(() => {
        alert(count)
    }, [count]);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button
                onClick={handleClick}
            >
                Click
            </button>
        </div>
    );
}