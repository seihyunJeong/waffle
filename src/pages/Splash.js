import React from 'react';
import { Link } from 'react-router-dom';
import SplashFooter from '../common/footer/SplashFooter';
import SplashHeader from '../common/header/SplashHeader';
import SEO from '../common/SEO';
import SplashBanner from '../component/banner/SplashBanner';
import SplashCta from '../component/cta/SplashCta';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SplashData from '../data/splash/SplashData.json';
import { slugify } from '../utils';
import { FaAngleRight } from "react-icons/fa";
import ProcessOne from '../component/process/ProcessOne';
import AboutFour from '../component/about/AboutFour';
import TeamOne from '../component/team/TeamOne';

const DemoData = SplashData[0];
const FeatureData = SplashData[1];

const Splash = () => {

    return (
        <>
        <SEO title="postlab, postlabs, 포스트랩, 쿠폰, 카드, 멤버십, 할인, benefit, treasure hunter, 가격 비교 서비스, price comparison service" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <SplashHeader />
                <SplashBanner />
                
                <div id="problems">
                    <ProcessOne/>
                </div>
                <div id="probe">
                    <AboutFour />
                </div>
                <div id="team">
                    <TeamOne />
                </div>
                
                {/*<SplashCta />*/}
                <SplashFooter />
            </main>
        </>
    )
}

export default Splash;