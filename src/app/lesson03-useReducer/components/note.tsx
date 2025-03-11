import { useReducer } from 'react';

const initialState = { count: 0 };

type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' };
const reducer = (state: typeof initialState, action: Action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return initialState;
        default:
            return state;
    }
};

export default function Note() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="flex flex-col items-center p-4 border rounded-lg shadow-md w-64 mx-auto">
            <h2 className="text-xl font-bold mb-2">Note: {state.count}</h2>
            <div className="flex gap-2">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    onClick={() => dispatch({ type: 'increment' })}
                >
                    +
                </button>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    onClick={() => dispatch({ type: 'decrement' })}
                >
                    -
                </button>
                <button
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                    onClick={() => dispatch({ type: 'reset' })}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}