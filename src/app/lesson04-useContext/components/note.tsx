import { createContext, useContext, useState } from 'react';

// Contextの作成
const NoteContext = createContext({ note: '', setNote: (note: string) => { } });

export default function Note() {
    const [note, setNote] = useState('');

    // NoteContext.Providerという記述方法はv19から非推奨になりました？
    return (
        <NoteContext value={{ note, setNote }}>
            <div className="flex flex-col items-center p-4 border rounded-lg shadow-md w-64 mx-auto">
                <h2 className="text-xl font-bold mb-2">Note</h2>
                <NoteInput />
                <NoteDisplay />
            </div>
        </NoteContext>
    );
}

// 子コンポーネント: 入力エリア
function NoteInput() {
    const { note, setNote } = useContext(NoteContext);
    return (
        <textarea
            className="w-full p-2 border rounded-lg"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Enter your note here..."
        />
    );
}

// 子コンポーネント: 表示エリア
function NoteDisplay() {
    const { note } = useContext(NoteContext);
    return (
        <p className="mt-2 p-2 border rounded-lg w-full bg-gray-100">{note}</p>
    );
}