import Home from "./Home/Home";
import About from "./About/About"
import Skills from "./Skills/Skills";
import Blogs from "./Blogs/Blogs";
import Footer from "./Footer/Footer";
import NewsLetter from './NewsLetter/NewsLetter';

function Content() {
    return (
        <div className="ContentContainer w-full h-full top-14 absolute">
            <Home />
            <About />
            <Skills />
            <Blogs />
            <Footer />
            <NewsLetter />
        </div>
    );
}

export default Content
