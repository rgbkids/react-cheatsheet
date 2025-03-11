import { useState, useCallback } from 'react';

export default function Note() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    // useCallback を使用して関数をメモ化
    const handleIncrement = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

    return (
        <div className="flex flex-col items-center p-4 border rounded-lg shadow-md w-64 mx-auto">
            <h2 className="text-xl font-bold mb-2">useCallback Example</h2>
            <p className="mb-2">Count: {count}</p>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={handleIncrement}
            >
                Increment Count
            </button>
            <input
                className="mt-4 p-2 border rounded-lg w-full"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type something..."
            />
        </div>
    );
}