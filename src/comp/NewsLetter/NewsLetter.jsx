import SubscribeTextBox from './SubscribeTextBox';
import MailIdSubmitBox from './MailIdSubmitBox';
import './NewsLetter.css'

function NewsLetter() {
    return (
        <div className='bg-transparent flex justify-center items-center absolute top-[4525px] w-[100%] h-80'>
            <div className='bg-ctext w-[60%] h-[90%] rounded-[60px] flex items-center justify-center'>
                <SubscribeTextBox />
                <MailIdSubmitBox />
            </div>
        </div>
    )
}

export default NewsLetter;
