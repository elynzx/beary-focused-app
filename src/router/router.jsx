import { createBrowserRouter } from "react-router";
import { RootLayout } from "../common/layouts/root-layout";
import { Board } from "../app/board/board";
import { Focus } from "../app/focus/focus";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Board,
            },
            {
                path: "focus/:quadrant",
                Component: Focus,
            },
        ],
    },
]);
