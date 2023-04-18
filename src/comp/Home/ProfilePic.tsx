import pic from './../../assets/profile.png'

function ProfilePic() {
    return (
        <div className='ImageContainer w-[40%] h-full float-right top-14'>
            <img src={pic} className="w-full h-[80%]" />
        </div>
    )
}

export default ProfilePic
