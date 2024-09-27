import Link from "next/link";
import Image from "next/image";
import profile from "./../src/img/IMG20230625134208.jpg";

export default function Table() {
    return (
        <div className="hero min-h-screen bg-base-100 w-full mb-8">
            <div className="hero-content flex flex-col">
                <div className="flex flex-col lg:flex-row items-center lg:items-start">
                    <div className="flex-shrink-0 lg:mr-8">
                        <Image
                            src={profile}
                            alt="Profile"
                            width={160} // Ukuran gambar lebih kecil
                            height={160} // Ukuran gambar lebih kecil
                            className="rounded-full shadow-xl"
                        />
                    </div>
                    <div className="lg:text-left text-center flex flex-col justify-center lg:mt-0">
                        <h1 className="text-4xl font-bold">About Me</h1> {/* Ukuran teks lebih kecil */}
                        <p className="py-4 text-base lg:text-lg max-w-prose lg:max-w-3xl">
                            I am a 7th-semester student at Dian Nusantara University with a GPA of 3.61, skilled in UI/UX design and frontend development. I have experience working with Hotel Pinangsia on creating a company profile and a hotel management system. My expertise lies in interface design and frontend development.
                        </p>
                    </div>
                </div>
                <div className="flex w-full flex-col">
                    <h1 className="text-xl font-bold pb-2 pt-6">Education</h1> {/* Ukuran teks lebih kecil */}
                    <div className="card bg-base-300 rounded-box p-3 mb-4"> {/* Padding dikurangi */}
                        <div className="overflow-x-auto">
                            <table className="table w-full text-xs sm:text-sm"> {/* Ukuran teks lebih kecil */}
                                <thead>
                                    <tr className="font-bold">
                                        <th className="px-3 py-2">Major</th>
                                        <th className="px-3 py-2">University</th>
                                        <th className="px-3 py-2">Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-3 py-2">Information Technology</td>
                                        <td className="px-3 py-2">Dian Nusantara</td>
                                        <td className="px-3 py-2">West Jakarta</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <h1 className="text-xl font-bold pb-2 pt-6">Work Experience</h1> {/* Ukuran teks lebih kecil */}
                    <div className="card bg-base-300 rounded-box p-3"> {/* Padding dikurangi */}
                        <div className="overflow-x-auto">
                            <table className="table w-full text-xs sm:text-sm"> {/* Ukuran teks lebih kecil */}
                                <thead>
                                    <tr>
                                        <th className="px-3 py-2">Position</th>
                                        <th className="px-3 py-2">Company</th>
                                        <th className="px-3 py-2">Location</th>
                                        <th className="px-3 py-2">Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-3 py-2">Frontend Web Developer</td>
                                        <td className="px-3 py-2">Hotel Pinangsia</td>
                                        <td className="px-3 py-2">Central Jakarta</td>
                                        <td className="px-3 py-2">Internship</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
