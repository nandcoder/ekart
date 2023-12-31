import React from 'react'
import { FiFacebook, AiOutlineHeart, AiOutlineInstagram, IoLogoYoutube, IoLogoGithub } from 'react-icons/all';
import { Input, Stack } from '@chakra-ui/react'
import './footercss.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="footerCmp">
            <footer>
                <div className="footerCategorie">
                    <h1>Categories</h1>
                    <ul>
                        <li><Link to='/shop/?cg=Women'>Women</Link></li>
                        <li><Link to='/shop/?cg=Men'>Men</Link></li>
                        <li><Link to='/shop/?cg=Shoes'>Shoes</Link></li>
                        <li><Link to='/shop/?cg=Watches'>Watches</Link></li>
                    </ul>
                </div>

                <div className="fooHelp">
                    <h1>Help</h1>
                    <ul>
                        <li>Track Order</li>
                        <li>Returns</li>
                        <li>Shipping</li>
                        <li>FAQs</li>
                    </ul>
                </div>

                <div className="footerGetInTouch">
                    <h1>Get in touch</h1>
                    <ul>
                        <p>Any questions? Let us know in store at aur github</p>
                        <li className="footerIcons">
                            <a href='https://github.com/nandcoder/ekart'><IoLogoGithub size="25" /></a>
                        </li>
                        <li className="footerIcons">
                            <FiFacebook size="25" />
                        </li>
                        <li className="footerIcons">
                            <AiOutlineInstagram size="25" />
                        </li>
                        <li className="footerIcons">
                            <IoLogoYoutube size="25" />
                        </li>
                    </ul>
                </div>

                <div className="footerNews">
                    <h1>Newsletter</h1>
                    <ul>
                        <li>
                            <Stack spacing={3}>
                                <Input variant="flushed" placeholder="email@example.com" size="10" width="200px" />
                            </Stack>
                        </li>
                        <li>
                            <button className="footerBtn">Subscribe</button>
                        </li>
                    </ul>
                </div>

                <div className="creditsIcons">
                    <ul>
                        <li><img src="https://i.imgur.com/JZRipBg.png" className="img1" /></li>
                        <li><img src="https://i.imgur.com/AHCoUZO.png" className="img2" /></li>
                        <li><img src="https://i.imgur.com/l8OAGyo.png" className="img3" /></li>
                        <li><img src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/rupay-logo-icon.svg" className="img4" /></li>
                    </ul>

                </div>

                <div className="paragraphFooter">
                    <p>Copyright ©{currentYear} All rights reserved | This template is made with ♡ by <a href='https://www.linkedin.com/in/nand-raj/' style={{ fontWeight: 500, color: 'blue' }}>NRJ</a></p>
                </div>



            </footer>

        </div>
    )
}

export default Footer;
