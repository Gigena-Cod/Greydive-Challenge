import { createBrowserRouter } from "react-router-dom";
import HomeView from "../pages/Home.view";
import ResponsesView from "../pages/Responses.view";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeView />,
    },
    {
        path: "/responses",
        element: <ResponsesView />,
    }
]);

export default router