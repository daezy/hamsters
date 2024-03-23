"use client"
import { FaTelegram, FaWeebly, FaXTwitter } from "react-icons/fa6"
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
import Link from "next/link";


export default function Home() {
    return (
        <div id="home" className="bg-[url('../../public/hamster.jpeg')] bg-cover bg-no-repeat bg-center">
            <div className="bg-slate-900 bg-opacity-60 h-fit">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3  container mx-auto px-4 py-12">
                    <div className="md:col-span-2">
                        <div className="hidden sm:block">
                            <div className="p-4">
                                <h1 className="text-white text-5xl mb-4">HAMSTER RACING</h1>
                                <p className="font-bold text-slate-200 mt-4 mb-4">Hamsters is a betting platform where you can bet on live hamsters. The hamsters are real and the bets are real. The hamsters are running on a track and the first hamster to cross the finish line wins.</p>
                                <p className="font-bold text-slate-200 mt-4">You can bet on the winning hamster and win money if you are right.</p>

                                <div className="flex items-center gap-6 mt-4">
                                    <div className="flex justify-center items-center">
                                        <Link href="https://t.me/crypto_hamster_betting_bot">
                                            <FaTelegram size={35} color="#fff" className="" />
                                        </Link>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <Link href="https://x.com/racinghamsters">
                                            <FaXTwitter size={35} color="#fff" className="" />
                                        </Link>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <Link href="https://www.racinghamsters.com/">
                                            <FaWeebly size={35} color="#fff" className="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-full sm:hidden flex justify-center items-center">
                            <div className="">
                                <h1 className="font-black text-center text-white text-2xl mb-4">HAMSTER RACING</h1>
                                <p className="font-bold text-center text-white text-sm mt-4 mb-4">Hamsters is a betting platform where you can bet on live hamsters. The hamsters are real and the bets are real. The hamsters are running on a track and the first hamster to cross the finish line wins.</p>
                                <p className="font-bold text-center text-white text-sm mt-4">You can bet on the winning hamster and win money if you are right.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:col-span-3 bg-slate-900 p-2 rounded">

                        <ReactTwitchEmbedVideo channel="hamsgolive" layout={"video"} width={"100%"} height={"100%"} />
                    </div>
                </div>
            </div>

        </div>
    )
}