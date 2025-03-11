import { Suspense } from 'react';

// 非同期データを取得する関数
async function fetchData(): Promise<string> {
    return new Promise(resolve =>
        setTimeout(() => resolve('Fetched Data Successfully'), 2000)
    );
}

// データを取得して表示するコンポーネント
async function DataLoader() {
    const data = await fetchData(); // `await` でデータを取得
    return <p className="text-green-600">{data}</p>;
}

export default function Note() {
    return (
        <div className="flex flex-col items-center p-4 border rounded-lg shadow-md w-64 mx-auto">
            <h2 className="text-xl font-bold mb-2">Suspense Example</h2>
            <Suspense fallback={<p className="text-gray-500">Loading...</p>}>
                <DataLoader />
            </Suspense>
        </div>
    );
}
