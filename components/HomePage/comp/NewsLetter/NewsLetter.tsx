import SubscribeTextBox from './SubscribeTextBox';
import MailIdSubmitBox from './MailIdSubmitBox';

function NewsLetter() {
    return (
        <div className='NewsLetter bg-transparent flex justify-center items-center absolute top-[calc(550vh_-_75%)] w-[100%] h-80'>
            <div className='NewsLetterContainer bg-c-text w-[60%] h-[90%] rounded-[60px] flex items-center justify-center'>
                <SubscribeTextBox />
                <MailIdSubmitBox />
            </div>
        </div>
    )
}

export default NewsLetter;
