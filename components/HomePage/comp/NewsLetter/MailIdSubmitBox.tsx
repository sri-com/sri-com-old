import handler from "@/pages/api/hello";
import { useState } from "react";

function MailIdSubmitBox() {

    const [formData, setFormData] = useState({
        email: '',
    });

    const handleInputChange = (event: any) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();

        // Convert form data to JSON
        const jsonData = JSON.stringify(formData);

        // Send POST request
        fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: jsonData,
        })
            .then((response) => {
                if (response.ok) {
                    // Redirect to another route after successful submission
                    window.location.href = '/';
                } else {
                    // Handle error
                    console.error('Error:', response.status);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="w-[50%] ">
            <div className="MailIdSubmitContainer border-c-base border-[3px] rounded-[4rem] items-center p-[5%] justify-around">
                <form className="FormBox flex justify-around items-center place-items-center w-[100%]" onSubmit={handleSubmit}>
                    <label htmlFor="email" ></label>
                    <input className="InputBox bg-c-text m-1 outline-none w-[90%]" placeholder="Email Address" type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                    <button className="bg-c-base h-9 text-xl px-3 font-semibold rounded-2xl text-center text-c-text font-jetbrains flex items-center justify-center w-[10%]" type="submit">&gt;</button>
                </form>

            </div>
        </div >
    )
}

export default MailIdSubmitBox
