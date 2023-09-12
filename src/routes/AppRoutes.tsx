import Home from "../components/Home";
import Contact from "../components/Contact";

const AppRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/contact",
        element: <Contact />
    }
];

export default AppRoutes;