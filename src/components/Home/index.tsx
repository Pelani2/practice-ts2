import NavigationBar from "../Nav";
import HeroBanner from "../HeroBanner";


const Home = () => {
    return (
        <div className="home">
            <NavigationBar />
            <HeroBanner 
                title="Welcome to our website"
                subtitle="Discover amazing products and services"
                backgroundImageUrl="https://th.bing.com/th/id/OIG.kgfJtXq_qSWS2D_3PUvZ?pid=ImgGn"
                ctaText="Get Started"
                ctaLink="/get-started"
            />
        </div>
    );
};

export default Home;