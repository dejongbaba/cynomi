import * as React from "react";
import Footer from "./footer";
import Header from "./header";
import { RiMenu2Line } from "@remixicon/react";

export const metadata = {
    title: "Sendbox | Business | Login",
    description: "",
};

export default function Layout({ children }: { children: React.ReactNode }): React.ReactNode {
    return (
        <div className='grid gap-4 grid-cols-2'>
            {/*Mobile header */}
            {/*<header className="h-[64px] pl-2 border-b w-full sticky top-0 z-50 flex flex-row items-center">*/}
            {/*    <Header />*/}
            {/*</header>*/}
            <div></div>
            <div className="">{children}</div>
            {/* <div className="py-2 border-slate-100">
                <Footer />
            </div> */}
        </div>
    );
}
