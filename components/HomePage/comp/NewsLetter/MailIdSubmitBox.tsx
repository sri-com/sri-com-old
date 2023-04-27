function MailIdSubmitBox() {

    return (
        <div className="w-[50%] ">
            <div className="MailIdSubmitContainer border-c-base border-[3px] rounded-[4rem] items-center p-[5%] justify-around">
                <form className="FormBox flex justify-around items-center place-items-center w-[100%]" action="/submit" method="POST">
                    <label htmlFor="email" ></label>
                    <input className="InputBox bg-c-text m-1 outline-none w-[90%]" placeholder="Email Address" type="email" id="email" name="email" required />
                    <button className="bg-c-base h-9 text-xl px-3 font-semibold rounded-2xl text-center text-c-text font-jetbrains flex items-center justify-center w-[10%]">&gt;</button>
                </form>

            </div>
        </div >
    )
}

export default MailIdSubmitBox
