import Home from "../components/Home";
import Contact from "../components/Contact";
import Services from "../components/Services";

const AppRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/services",
        element: <Services />
    }
];

export default AppRoutes;