import Image from "next/image";

const features = [
  { name: "useState", href: "/lesson01-useState/", path: "src/app/lesson01-useState" },
  { name: "useEffect", href: "/lesson02-useEffect/", path: "src/app/lesson02-useEffect" },
  { name: "useReducer", href: "/lesson03-useReducer/", path: "src/app/lesson03-useReducer" },
  { name: "useContext", href: "/lesson04-useContext/", path: "src/app/lesson04-useContext" },
  { name: "useMemo", href: "/lesson05-useMemo/", path: "src/app/lesson05-useMemo" },
  { name: "useCallback", href: "/lesson06-useCallback/", path: "src/app/lesson06-useCallback" },
  { name: "useRef", href: "/lesson07-useRef/", path: "src/app/lesson07-useRef" },
  { name: "useTransition", href: "/lesson08-useTransition/", path: "src/app/lesson08-useTransition" },
  { name: "Suspense", href: "/lesson09-Suspense/", path: "src/app/lesson09-Suspense" },
  { name: "Server Components", href: "/lesson10-ServerComponents/", path: "src/app/lesson10-ServerComponents" }
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {features.map(({ name, href, path }) => (
            <li key={href} className="mb-2">
              <a
                className="hover:underline hover:underline-offset-4"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}{" "}
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                  {path}
                </code>
              </a>
            </li>
          ))}
        </ol>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/rgbkids/react-19-examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          React Cheatsheet Code Examples
        </a>
      </footer>
    </div>
  );
}
