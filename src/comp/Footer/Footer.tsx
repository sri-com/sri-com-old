import './Footer.css'
import FooterLogo from './FooterLogo';
import MadeWithLove from './MadeWithLove';
import RefLink from './RefLink';

function Footer() {
    return (
        <section className='Footer absolute h-[50%] w-[100%] bg-c-crust top-[calc(550vh_-_50%_-_3.5rem)] '>
            <FooterLogo />
            <RefLink />
            <MadeWithLove />
        </section>
    );
}

export default Footer;
