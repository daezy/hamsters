"use client"

import { store } from "@/store";
import clsx from "clsx";
import Link from "next/link";
import { useContext } from "react";

export default function Nav({ value }) {
    const { state, dispatch } = useContext(store)
    const { showSideBar } = state

    const handleSideBar = e => {
        e.preventDefault()

        dispatch({
            type: "Display/Hide SideBar",
            payload: {
                showSideBar: false
            }
        })
    }

    return (
        <div id="nav" className="bg-[#0052FE]">
            <div className="hidden sm:grid grid-cols-6 gap-4 container mx-auto px-4 pt-4">
                <div onClick={handleSideBar} className={clsx("text-center", value == "hamsters" ? "bg-[#142632] border-t-4" : "bg-[#0F212E]", "hover:bg-[#142632]", "rounded-lg", "px-2", "py-6", "border-solid border-[#DE8508]")}>
                    <Link href="/hamsters" className={clsx(value == "hamsters" ? "text-white" : "text-[#7A848B]", "hover:text-[#7A848B]", "font-black", "text-lg")}>HAMSTERS</Link>
                </div>
                <div onClick={handleSideBar} className={clsx("text-center", value == "bet" ? "bg-[#142632] border-t-4" : "bg-[#0F212E]", "hover:bg-[#142632]", "rounded-lg", "px-2", "py-6", "border-solid border-[#DE8508]")}>
                    <Link href="/bet" className={clsx(value == "bet" ? "text-white" : "text-[#7A848B]", "hover:text-[#7A848B]", "font-black", "text-lg")}>LIVE BET</Link>
                </div>
                <div onClick={handleSideBar} className={clsx("text-center", value == "play" ? "bg-[#142632] border-t-4" : "bg-[#0F212E]", "hover:bg-[#142632]", "rounded-lg", "px-2", "py-6", "border-solid border-[#DE8508]")}>
                    <Link href="/play" className={clsx(value == "play" ? "text-white" : "text-[#7A848B]", "hover:text-[#7A848B]", "font-black", "text-lg")}>STREAM</Link>
                </div>
                <div onClick={handleSideBar} className={clsx("text-center", value == "bets" ? "bg-[#142632] border-t-4" : "bg-[#0F212E]", "hover:bg-[#142632]", "rounded-lg", "px-2", "py-6", "border-solid border-[#DE8508]")}>
                    <Link href="/bets" className={clsx(value == "bets" ? "text-white" : "text-[#7A848B]", "hover:text-[#7A848B]", "font-black", "text-lg")}>BETS</Link>
                </div>
                <div onClick={handleSideBar} className={clsx("text-center", value == "withdraw" ? "bg-[#142632] border-t-4" : "bg-[#0F212E]", "hover:bg-[#142632]", "rounded-lg", "px-2", "py-6", "border-solid border-[#DE8508]")}>
                    <Link href="/withdraw" className={clsx(value == "withdraw" ? "text-white" : "text-[#7A848B]", "hover:text-[#7A848B]", "font-black", "text-lg")}>WITHDRAW</Link>
                </div>
                <div onClick={handleSideBar} className={clsx("text-center", value == "support" ? "bg-[#142632] border-t-4" : "bg-[#0F212E]", "hover:bg-[#142632]", "rounded-lg", "px-2", "py-6", "border-solid border-[#DE8508]")}>
                    <Link href="/support" className={clsx(value == "support" ? "text-white" : "text-[#7A848B]", "hover:text-[#7A848B]", "font-black", "text-lg")}>SUPPORT</Link>
                </div>
            </div>
        </div>
    )
}