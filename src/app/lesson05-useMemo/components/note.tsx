import { useState, useMemo } from 'react';

export default function Note() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    // 計算コストの高い処理（ここでは単純な計算例）
    const expensiveCalculation = (num: number) => {
        console.log('Calculating...');
        return num * 2;
    };

    // useMemo を使用して計算結果をメモ化
    const computedValue = useMemo(() => expensiveCalculation(count), [count]);

    return (
        <div className="flex flex-col items-center p-4 border rounded-lg shadow-md w-64 mx-auto">
            <h2 className="text-xl font-bold mb-2">useMemo Example</h2>
            <p className="mb-2">Computed Value: {computedValue}</p>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={() => setCount(count + 1)}
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