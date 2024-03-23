import Bets from "@/components/Bets";
import Header from "@/components/Header";
import Live from "@/components/Live";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";

export default function LivePlay() {
    return (
        <>
            <MobileNav />
            <section id="heading">
                <Header page="/play" />
            </section>
            <section id="navigation">
                <Nav value="play" />
            </section>
            <section id="_bets">
                <Live />
            </section>
        </>
    )
}