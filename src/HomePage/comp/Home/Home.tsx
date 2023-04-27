import ProfilePic from './ProfilePic';
import Welcome from './Welcome';
import "./Home.css";

function Home() {
    return (
        <section className="Home w-full h-screen bg-transparent">
            <Welcome />
            <ProfilePic />
        </section>
    );
}

export default Home
