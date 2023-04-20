import './Footer.css'
import FooterLogo from './FooterLogo';
import MadeWithLove from './MadeWithLove';
import RefLink from './RefLink';

function Footer() {
    return (
        <div className='absolute bottom-0 w-full h-[50%] bg-ccrust top-[292rem]'>
            <FooterLogo />
            <RefLink />
            <MadeWithLove />
        </div>
    );
}

export default Footer;
