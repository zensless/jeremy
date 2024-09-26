import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full z-50 left-0 bottom-0 mt-10">
            <aside className="p-4 text-center ">
                <p>Copyright © {new Date().getFullYear()} - Create by <span className="font-bold">Jeremy Sagala</span></p>
                <p>build with <span className="font-bold">next.js</span> and <span className="font-bold">tailwindcss</span></p>
            </aside>
        </footer>
    );
}