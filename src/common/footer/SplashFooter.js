import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaDribbble } from "react-icons/fa";


const SplashFooter = () => {
    return (
        <footer className="footer-area splash-footer">
            <div className="container">
                <div className="footer-bottom">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                        <div className="footer-copyright">
                            <span className="copyright-text">© {new Date().getFullYear()}. All rights reserved by <a href="https://www.postlabs.io/">POSTLAB</a>.</span>
                        </div>
                        <div className="footer-copyright">
                            <span className="copyright-text">주소 : 서울특별시 강남구 테헤란로8길 21 화인빌딩 10층</span>
                        </div>
                        <div className="footer-copyright">
                            <span className="copyright-text">연락처 : contact@postlabs.io</span>
                        </div>
                        </div>
                        <div className="col-lg-2">
                        {/* 
                        <ul className="footer-social list-unstyled">
                            <li><a href="https://www.facebook.com/axilthemes"><FaFacebookF /></a></li>
                            <li><a href="https://dribbble.com/axilweb/"><FaDribbble /></a></li>
                        </ul>
                        */}
                        </div>
                        {/* 
                        <div className="col-lg-5">
                        <div className="footer-bottom-link">
                            <ul className="list-unstyled">
                                <li><a href="https://themeforest.net/user/axilthemes/portfolio">More Themes</a></li>
                                <li><Link to={process.env.PUBLIC_URL + "/privacy-policy"}>Privacy Policy</Link></li>
                            </ul>
                        </div>
                        </div>
                        */}
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default SplashFooter;