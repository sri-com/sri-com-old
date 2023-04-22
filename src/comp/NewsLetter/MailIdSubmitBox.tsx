function MailIdSubmitBox() {

    return (
        <div className="w-[50%] ">
            <div className="border-c-base border-[3px] w-[90%] h-20 rounded-[4rem] ml-20 items-center flex p-[5%]">
                <form className=" FormBox grid gap-3 grid-flow-col place-items-center w-[100%] " action="/submit" method="POST">
                    <label htmlFor="email" ></label>
                    <input className="InputBox bg-c-text m-1 outline-none col-span-3" placeholder="Email Address" type="email" id="email" name="email" required />
                    <button className="bg-c-base h-9 text-xl px-3 font-semibold rounded-2xl text-center text-c-text font-jetbrains" type="submit">Submit</button>
                </form>

            </div>
        </div >
    )
}

export default MailIdSubmitBox
