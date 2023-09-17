import Home from "../components/Home";
import Contact from "../components/Contact";
import Services from "../components/Services";
import About from "../components/About";
import Login from "../components/Login";
import Signup from "../components/Signup";

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
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    }
];

export default AppRoutes;