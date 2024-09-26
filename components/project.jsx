import Link from "next/link";
import Image from "next/image";
import cpImg from "./../src/img/company_profile.jpg";
import hmsImg from "./../src/img/login page.png"
import clc from "./../src/img/project3.jpg"
import GadgetKu from "./../src/img/gadgetKu.jpg"
import figma from "./../src/img/figma.png"
import php from "./../src/img/php.png"
import tw from "./../src/img/tailwindcss.png"
import wp from "./../src/img/wordpress.png"
import html from "./../src/img/html.png"
import css from "./../src/img/css.png"
import js from "./../src/img/js.png"

export default function Project() {
    return (
        <div className="hero min-h-screen flex flex-col items-center justify-center pb-44">
            {/* Judul Project */}
            <h1 className="text-5xl font-bold mb-8 mt-40 pb-16">My Project</h1>

            {/* Baris pertama: Card 1 dan Card 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="card bg-base-300 w-96">
                    <figure className="px-10 pt-10">
                        <Image src={GadgetKu} alt="GadgetKu" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">GadgetKu</h2>
                        <p className="text-sm pt-3 pb-1">This is a UI/UX project for the Gadgetku application design that I developed</p>
                        <Image src={figma} alt="figma" className="pb-3" />
                        <div className="card-actions">
                            <Link href="https://medium.com/@411211148/gadgetku-e70926470cf2" passHref>
                                <button className="btn btn-primary">Medium</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="card bg-base-300 w-96">
                    <figure className="px-10 pt-10">
                        <Image src={clc} alt="Calculator" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Calculator</h2>
                        <p className="text-sm pt-3 pb-3">I built a simple calculator using JavaScript for the functionality and HTML and CSS for the design</p>
                        <figure className="px-10 pt-3 pb-3">
                            <Image src={html} alt="html" className="pr-3" />
                            <Image src={css} alt="css" className="pr-3" />
                            <Image src={js} alt="js" />
                        </figure>
                        <div className="card-actions">
                            <Link href="https://github.com/zensless/kalkulator.git" passHref>
                                <button className="btn btn-primary">GitHub</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Baris kedua: Card 3 dan Card 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5">
                {/* Card 3 */}
                <div className="card bg-base-300 w-96">
                    <figure className="px-10 pt-10">
                        <Image src={hmsImg} alt="website manajemen sistem hotel pinangsia" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Hotel Management System</h2>
                        <p className="text-sm pt-3">I built the hotel Pinangsia management system website using native PHP programming language and tailwindcss</p>
                        <figure className="px-10 pt-3 pb-3">
                            <Image src={php} alt="php" className="rounded-xl pr-3" />
                            <Image src={tw} alt="tailwindcss" className="rounded-xl pr-3" />
                        </figure>
                        <div className="card-actions">
                            <Link href="https://github.com/zensless/manajemen-hotel.git" passHref>
                                <button className="btn btn-primary">GitHub</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="card bg-base-300 w-96">
                    <figure className="px-10 pt-10">
                        <Image src={cpImg} alt="website hotel pinangsia" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Hotel Pinangsia Company Profile</h2>
                        <p className="text-sm pt-3 pb-3">This company profile website was developed by me using WordPress</p>
                        <figure className="px-10 pt-3 pb-5">
                            <Image src={wp} alt="wordpress" className="rounded-xl" />
                        </figure>
                        <div className="card-actions">
                            <Link href="http://pinangsia.rf.gd/" passHref>
                                <button className="btn btn-primary">Website</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}