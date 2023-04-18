import ProfilePic from './ProfilePic';
import Welcome from './Welcome';

function Home() {
    return (
        <div className="Home w-full h-screen bg-transparent">
            <ProfilePic />
            <Welcome />
        </div>
    );
}

export default Home
