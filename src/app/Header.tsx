import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-row justify-around w-full m-30">
            <p>Logo</p>
            <Link href="/">Home</Link>
            <Link href="/page1">Page 1</Link>
            <Link href="/page2">Page 2</Link>
        </div>
    );
}