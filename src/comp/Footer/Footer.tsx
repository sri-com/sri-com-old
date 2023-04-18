import './Footer.css'
import FooterLogo from './FooterLogo';
import RefLink from './RefLink';

function Footer() {
    return (
        <div className='absolute bottom-0 w-full h-[50%] bg-ccrust top-[4690px]'>
            <FooterLogo />
            <RefLink />
        </div>
    );
}

export default Footer;
