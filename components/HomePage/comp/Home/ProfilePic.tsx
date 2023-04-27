import Image from 'next/image'
import pic from './../../assets/profile.png'

function ProfilePic() {
    return (
        <div className='ImageContainer flex items-center justify-center'>
            <Image src={pic} alt='Profile Picture of Srivarshan' />
        </div>
    )
}

export default ProfilePic
