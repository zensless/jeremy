import Link from "next/link";
import Image from "next/image";
import gm from "./../src/img/gmail.png";
import wa from "./../src/img/wa.png";

export default function kontak() {
    return (
        <div className="hero h-1/2 mb-20">
            <div className="hero-content text-center">
                <div className="max-w-md mx-auto"> {/* Tambahkan mx-auto untuk memusatkan secara horizontal */}
                    <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"> {/* flex-col untuk mode mobile, flex-row untuk desktop */}
                        {/* Wrapper untuk logo Gmail dan teks email */}
                        <div className="flex items-center">
                            <Image src={gm} alt="gmail" className="pl-3" />
                            <Link href="mailto:jeremy.sgl99@gmail.com" passHref>
                                <p className="ml-2">jeremy.sgl99@gmail.com</p>
                            </Link>
                        </div>
                        <div className="sm:hidden">OR</div> {/* OR akan tersembunyi di desktop, muncul di mobile */}
                        <div className="flex items-center">
                            <Image src={wa} alt="whatsapp" className="pl-3" />
                            <Link href="https://wa.me/6285893489996" passHref>
                                <p className="ml-2">085893489996</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
