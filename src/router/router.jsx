import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootDashboard,
        children: [
            {
                index: true,
                Component: Board,
            },
            {
                path: "focus",
                Component: Quadrant,
            },
            {
                path: "stats",
                Component: Dashboard,
            },
            {
                path: "settings",
                Component: Settings,
            },
        ],
    },
]);
