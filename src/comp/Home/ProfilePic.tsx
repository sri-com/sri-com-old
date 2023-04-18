import pic from './../../assets/profile.png'

function ProfilePic() {
    return (
        <div className='ImageContainer w-[40%] float-right absolute top-[10%] right-7'>
            <img src={pic} className="h-[80%]" />
        </div>
    )
}

export default ProfilePic
