import Home from "../components/Home";
import Contact from "../components/Contact";
import Services from "../components/Services";
import About from "../components/About";

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
    },
    {
        path: "/about",
        element: <About />
    }
];

export default AppRoutes;