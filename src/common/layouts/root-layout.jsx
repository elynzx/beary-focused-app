import { Outlet } from "react-router";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Header } from "../components/header/header";

export function RootLayout() {
    return (
        <div className="h-screen w-full bg-white text-bgGray flex items-center justify-center py-12">
            <div className="flex h-full w-full max-w-7xl flex-col bg-bgLightPink rounded-4xl overflow-hidden border border-black shadow-lg">

                <div className="flex flex-1 overflow-hidden">
                    <Sidebar />

                    <main className="w-full h-full flex-1">
                        <section>
                            <Outlet />
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
}
