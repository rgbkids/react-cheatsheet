import { useState } from "react";

export default function Note() {

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>
                Clicked {count}
            </button>
        </div>
    );
}