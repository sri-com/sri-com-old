import Home from "./Home/Home";
import About from "./About/About"

function Content() {
    return (
        <div className="ContentContainer w-full top-14 absolute flex flex-col h-full">
            <Home />
            <About />
        </div>
    );
}

export default Content
