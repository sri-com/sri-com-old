import ProfilePic from './ProfilePic';
import Welcome from './Welcome';

function Home() {
    return (
        <section className="Home w-full h-screen bg-transparent">
            <Welcome />
            <ProfilePic />
        </section>
    );
}

export default Home
