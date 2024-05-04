

import { Link } from 'react-router-dom';
import "./footer.css"

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="all_footer_media">
                                    <div className="text_sailor_footer">
                                        <h2>Sailor</h2>
                                        <p>
                                            A108 Adam Street <br />
                                            NY 535022, USA<br /><br />
                                            <strong>Phone:</strong> +1 5589 55488 55<br />
                                            <strong>Email:</strong> info@example.com<br />
                                        </p>
                                    </div>
                                    <div className="media_footer_links">
                                        <ul>
                                            <li><Link to="#"><i className="fa-brands fa-twitter"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-facebook"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-skype"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="center_footer_top">
                                    <h4>Useful Links</h4>
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-angle-right"></i>
                                            <Link to="/">home</Link>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-angle-right"></i>
                                            <Link to="/about">about us</Link>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-angle-right"></i>
                                            <Link to="/services">services</Link>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-angle-right"></i>
                                            <Link to="/">terms of services</Link>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-angle-right"></i>
                                            <Link to="/">privacy policy</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="center_footer_top">
                                    <h4>our services</h4>
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-angle-right"></i>
                                            <Link to="/">web design</Link>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-angle-right"></i>
                                            <Link to="/">web development</Link>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-angle-right"></i>
                                            <Link to="/">product management</Link>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-angle-right"></i>
                                            <Link to="/">marketing</Link>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-angle-right"></i>
                                            <Link to="#">graphic design</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="footer_right_top">
                                    <h4>our newsletter</h4>
                                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                    <form action="post" className="from_footer">
                                        <input type="email" name="email" className="input_form" />
                                        <input className="btn_main btn_footer_form" type="submit" name="email" value="subscribe" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer_bottom text-center">
                    <div className="container">
                        <div className="copyright">
                            © Copyright <strong><span>Sailor</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            Designed by <Link to="/">amr Abo Hassab</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

