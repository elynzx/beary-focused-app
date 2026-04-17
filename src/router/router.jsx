import { createBrowserRouter } from "react-router";
import { RootLayout } from "../common/layouts/root-layout";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
    },
]);
