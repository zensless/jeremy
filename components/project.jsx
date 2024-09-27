import Link from "next/link";
import Image from "next/image";
import cpImg from "./../src/img/company_profile.jpg";
import hmsImg from "./../src/img/login page.png";
import clc from "./../src/img/project3.jpg";
import GadgetKu from "./../src/img/gadgetKu.jpg";
import figma from "./../src/img/figma.png";
import php from "./../src/img/php.png";
import tw from "./../src/img/tailwindcss.png";
import wp from "./../src/img/wordpress.png";
import html from "./../src/img/html.png";
import css from "./../src/img/css.png";
import js from "./../src/img/js.png";

export default function Project() {
    return (
        <div className="hero min-h-screen flex flex-col items-center justify-center pb-12">
            {/* Judul Project */}
            <h1 className="text-3xl font-bold mb-4 mt-12">My Project</h1> {/* Ukuran teks lebih kecil */}

            {/* Grid layout untuk card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="card bg-base-300 w-3/4 md:w-64 mx-auto"> {/* Lebar card diperkecil */}
                    <figure className="px-4 pt-4"> {/* Padding dalam card dikurangi */}
                        <Image src={GadgetKu} alt="GadgetKu" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg">GadgetKu</h2> {/* Ukuran font lebih kecil */}
                        <p className="text-xs pt-1 pb-1">
                            This is a UI/UX project for the Gadgetku application design that I developed
                        </p>
                        <Image src={figma} alt="figma" className="pb-1" />
                        <div className="card-actions">
                            <Link href="https://medium.com/@411211148/gadgetku-e70926470cf2" passHref>
                                <button className="btn btn-primary btn-xs">Medium</button> {/* Tombol lebih kecil */}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="card bg-base-300 w-3/4 md:w-64 mx-auto">
                    <figure className="px-4 pt-4">
                        <Image src={clc} alt="Calculator" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg">Calculator</h2>
                        <p className="text-xs pt-1 pb-1">
                            I built a simple calculator using JavaScript for the functionality and HTML and CSS for the design
                        </p>
                        <figure className="flex justify-center px-4 pt-1 pb-1">
                            <Image src={html} alt="html" className="pr-1" />
                            <Image src={css} alt="css" className="pr-1" />
                            <Image src={js} alt="js" />
                        </figure>
                        <div className="card-actions">
                            <Link href="https://github.com/zensless/kalkulator.git" passHref>
                                <button className="btn btn-primary btn-xs">GitHub</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="card bg-base-300 w-3/4 md:w-64 mx-auto">
                    <figure className="px-4 pt-4">
                        <Image src={hmsImg} alt="website manajemen sistem hotel pinangsia" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg">Hotel Management System</h2>
                        <p className="text-xs pt-1">
                            I built the hotel Pinangsia management system website using native PHP programming language and tailwindcss
                        </p>
                        <figure className="flex justify-center px-4 pt-1 pb-1">
                            <Image src={php} alt="php" className="rounded-xl pr-1" />
                            <Image src={tw} alt="tailwindcss" className="rounded-xl pr-1" />
                        </figure>
                        <div className="card-actions">
                            <Link href="https://github.com/zensless/manajemen-hotel.git" passHref>
                                <button className="btn btn-primary btn-xs">GitHub</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="card bg-base-300 w-3/4 md:w-64 mx-auto">
                    <figure className="px-4 pt-4">
                        <Image src={cpImg} alt="website hotel pinangsia" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg">Hotel Pinangsia Company Profile</h2>
                        <p className="text-xs pt-1 pb-1">
                            This company profile website was developed by me using WordPress
                        </p>
                        <figure className="flex justify-center px-4 pt-1 pb-2">
                            <Image src={wp} alt="wordpress" className="rounded-xl" />
                        </figure>
                        <div className="card-actions">
                            <Link href="http://pinangsia.rf.gd/" passHref>
                                <button className="btn btn-primary btn-xs">Website</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
