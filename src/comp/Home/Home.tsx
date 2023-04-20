import ProfilePic from './ProfilePic';
import Welcome from './Welcome';
import './Home.css'

function Home() {
    return (
        <div className="Home w-full h-screen bg-transparent">
            <ProfilePic />
            <Welcome />
        </div>
    );
}

export default Home
