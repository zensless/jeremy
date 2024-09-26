import Link from "next/link";
import Image from "next/image";
import profile from "./../src/img/IMG20230625134208.jpg"

export default function Table() {
    return (
        <div className="hero min-h-screen w-full mb-8">
            <div className="hero-content flex flex-col">
                <div className="flex flex-col lg:flex-row items-center lg:items-start">
                    <Image src={profile} alt="Profile" className="max-w-xs rounded-full shadow-xl mb-4 lg:mb-0" />
                    <div className="lg:ml-8 lg:text-left text-center flex flex-col justify-center lg:mt-20">
                        {/* Menambahkan lg:mt-12 untuk margin atas lebih besar pada layar besar */}
                        <h1 className="text-5xl font-bold">About me</h1>
                        <p className="text-content py-8 lg:max-w-3xl">
                            I am a 7th-semester student at Dian Nusantara University with a GPA of 3.61, skilled in UI/UX design and frontend development. I have experience working with Hotel Pinangsia on creating a company profile and a hotel management system. My expertise lies in interface design and frontend development.
                        </p>
                    </div>
                </div>
                {/* Konten berada di luar flex-row */}
                <div className="flex w-full flex-col">
                    <h1 className="text-2xl font-bold pb-3 pt-9">Education</h1>
                    <div className="card bg-base-300 rounded-box p-4 mb-4">
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr className="font-bold">
                                        <th className="px-4 py-2">Major</th>
                                        <th className="px-4 py-2">University</th>
                                        <th className="px-4 py-2">Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <td className="px-4 py-2">Information Technology</td>
                                        <td className="px-4 py-2">Dian Nusantara</td>
                                        <td className="px-4 py-2">West Jakarta</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <h1 className="text-2xl font-bold pb-3 pt-9">Work Experience</h1>
                    <div className="card bg-base-300 rounded-box p-4">
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">Position</th>
                                        <th className="px-4 py-2">Company</th>
                                        <th className="px-4 py-2">Location</th>
                                        <th className="px-4 py-2">Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <td className="px-4 py-2">Frontend Web Developer</td>
                                        <td className="px-4 py-2">Hotel Pinangsia</td>
                                        <td className="px-4 py-2">Central Jakarta</td>
                                        <td className="px-4 py-2">Internship</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
