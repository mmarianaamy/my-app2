import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-row justify-around items-center w-full h-20 m-30 bg-gray-800">
            <p>Logo</p>
            <Link href="/">Home</Link>
            <Link href="/page1">Page 1</Link>
            <Link href="/page2">Page 2</Link>
        </div>
    );
}