import { Timer } from "../timer/timer";
import { Link } from "react-router";

export function Sidebar() {
    return (
        <aside className="w-full lg:w-68 h-fit lg:h-full border-b lg:border-b-0 lg:border-r border-bgDarkGray/50 flex flex-col sm:flex-row lg:flex-col items-center justify-between lg:justify-start py-2.5 lg:py-8 px-6 bg-white/50 lg:bg-transparent">
            <div className="flex items-center lg:flex-col w-full lg:w-auto justify-between lg:justify-start gap-4">
                <Timer />
                <nav className="flex flex-row lg:flex-col gap-2 lg:mt-8 lg:space-y-4 w-full justify-between">
                    <Link
                        className="rounded-full flex items-center justify-center lg:justify-start gap-2 w-22 lg:px-0 lg:w-52 h-8 lg:h-11 bg-bgDarkGray/70 text-white border border-transparent hover:border-pink-200 hover:bg-bgDarkGray transition-all hover:-translate-y-1 shadow-sm"
                        to="/"
                    >
                        <span className="text-[10px] lg:text-xs lg:ml-8 font-bold hidden sm:inline">
                            ⋆｡֒✧˚ ♡
                        </span>
                        <span className="text-xs font-bold">Home</span>
                    </Link>

                    <Link
                        className="rounded-full flex items-center justify-center lg:justify-start gap-2 w-22 lg:px-0 lg:w-52 h-8 lg:h-11 bg-bgDarkGray/70 text-white border border-transparent hover:border-pink-200 hover:bg-bgDarkGray transition-all hover:-translate-y-1 shadow-sm"
                        to="stats"
                    >
                        <span className="text-[10px] lg:text-xs lg:ml-8 font-bold hidden sm:inline">
                            ⋆｡֒✧˚ ♡
                        </span>
                        <span className="text-xs font-bold">Stats</span>
                    </Link>

                    <Link
                        className="rounded-full flex items-center justify-center lg:justify-start gap-2 w-22 lg:px-0 lg:w-52 h-8 lg:h-11 bg-bgDarkGray/70 text-white border border-transparent hover:border-pink-200 hover:bg-bgDarkGray transition-all hover:-translate-y-1 shadow-sm"
                        to="settings"
                    >
                        <span className="text-[10px] lg:text-xs lg:ml-8 font-bold hidden sm:inline">
                            ⋆｡֒✧˚ ♡
                        </span>
                        <span className="text-xs font-bold">Settings</span>
                    </Link>
                </nav>
            </div>
            <div className="lg:flex hidden lg:mt-auto lg:justify-center w-full text-center p-4 border-t border-dotted border-bgDarkGray/60">
                <p className="text-[12px] text-bgDarkGray italic tracking-widest">
                    <a
                        href="https://github.com/elynzx/beary-focused-app"
                        target="_blank"
                        className="hover:underline hover:text-black underline-offset-4 transition-colors"
                    >
                        ‧₊˚♡ by @elynzx ♡‧₊˚
                    </a>
                </p>
            </div>
        </aside>
    );
}
