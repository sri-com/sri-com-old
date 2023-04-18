function MailIdSubmitBox() {

    var changeButtonShape = () => {
    }
    return (
        <div className="w-[50%]">
            <div className="border-cbase border-[3px] w-[90%] h-14 rounded-[4rem] ml-20">
                <form className="flex items-center" >
                    <label for="email" ></label>
                    <input className="bg-ctext w-[60%] m-1 mx-5 p-2 outline-none" placeholder="Email Address" type="email" id="email" name="email" required onChange={changeButtonShape} />
                    <button className="bg-cbase w-[25%] h-9 text-xl font-semibold rounded-2xl text-ctext font-jetbrains" type="submit">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default MailIdSubmitBox
