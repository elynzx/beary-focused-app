import { Timer } from "../timer/timer";
import { Link } from "react-router";

export function Sidebar() {
    return (
        <aside className="w-68 border-r items-center border-black hidden lg:flex flex-col p-6">
            <Timer />
            <nav className="mt-8 space-y-2 flex lg:flex-col">
                <Link
                    className="rounded-full flex items-center justify-center w-50 h-10 bg-bgGray text-white hover:bg-bgDarkGray"
                    to="/"
                >
                    Home
                </Link>
                <Link
                    className="rounded-full flex items-center justify-center w-50 h-10 bg-bgGray text-white hover:bg-bgDarkGray"
                    to="stats"
                >
                    Stats
                </Link>
                <Link
                    className="rounded-full flex items-center justify-center w-50 h-10 bg-bgGray text-white hover:bg-bgDarkGray"
                    to="settings"
                >
                    Settings
                </Link>
            </nav>
            <div className="mt-auto w-full text-center p-4 border-t border-bgDarkGray">
                <p className="text-[12px] text-bgDarkGray italic">
                    built with love ꒰ ˶• ༝ •˶꒱
                </p>
            </div>
        </aside>
    );
}
