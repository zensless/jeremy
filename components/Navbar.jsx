import Link from "next/link";


export default function Navbar() {
    return (
        <div className="navbar bg-base-200 fixed top-0 w-full z-50 left-0">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">zenyTech</a>
            </div>
            <div className="navbar-end">
                <Link href="https://wa.me/6285893489996" passHref>
                    <button className="btn btn-accent btn-outline">Contact me</button>
                </Link>
            </div>
        </div>
    );
}
