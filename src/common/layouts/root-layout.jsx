import { Outlet } from "react-router";

export function RootLayout() {
    return (
        <div className="min-h-screen bg-bgLightPink text-bgGray">
            <div className="flex min-h-screen flex-col lg:flex-row">
                <Outlet />
            </div>
        </div>
    );
}
