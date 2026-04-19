import { createBrowserRouter } from "react-router";
import { RootLayout } from "../common/layouts/root-layout";
import { Board } from "../app/board/board";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Board,
            },
        ],
    },
]);
