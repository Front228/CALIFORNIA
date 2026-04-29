import logo from '../../assets/icons/CALIFORNIA.svg'
import './Footer.scss'

const Footer = () => {
     return (
        <footer className="Footer">
            <div className='footer-block'>
                <div className='FooterLogo'>
                    <a href="#">
                        <img src={logo} alt={'Logo'} />
                    </a>

                    <p>Sign up for texts to be notified about our best offers on the perfect gifts.</p>
                </div>
                <div className='footer-menu'>
                    <ul className='footer-menu-list'>
                        <li className='footer-menu-title'>All products</li>
                        <li className='footer-menu-item'>Phones</li>
                        <li className='footer-menu-item'>Watch</li>
                        <li className='footer-menu-item'>Tablet</li>
                        <li className='footer-menu-item'>Laptops</li>
                    </ul>
                    <ul className='footer-menu-list'>
                        <li className='footer-menu-title'>Company</li>
                        <li className='footer-menu-item'>About</li>
                        <li className='footer-menu-item'>Support</li>
                    </ul>
                    <ul className='footer-menu-list'>
                        <li className='footer-menu-title'>Support</li>
                        <li className='footer-menu-item'>Style Guide</li>
                        <li className='footer-menu-item'>Licensing</li>
                        <li className='footer-menu-item'>Change Log</li>
                        <li className='footer-menu-item'>Contact</li>
                    </ul>
                    <ul className='footer-menu-list'>
                        <li className='footer-menu-title'>Support</li>
                        <li className='footer-menu-item'>Style Guide</li>
                        <li className='footer-menu-item'>Licensing</li>
                        <li className='footer-menu-item'>Change Log</li>
                        <li className='footer-menu-item'>Contact</li>
                    </ul>
                </div>
            </div>
            <div className='line'></div>

            <div className='name-tag'>
                <p className='y3ktv'>Made By: <span className='d-4fmn5v'>Front228</span></p>
                <p className='y3ktv'>Powered By: <span className='d-4fmn5v'>FrontDev</span></p>
            </div>
        </footer>
     )
}

export default Footer