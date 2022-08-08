import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { slugify } from '../../utils';
import SplashData from '../../data/splash/SplashData.json';

const DemoData = SplashData[0];

const CountData = [
    {
        id: 1,
        title: "Platform Coverage",
        count_num: "7"
    },
    {
        id: 2,
        title: "Category Coverage",
        count_num: "20"
    },
    {
        id: 3,
        title: "Product Coverage",
        count_num: "100000"
    }
]

var slideSettings = {
    infinite: true,
    speed: 500,
    autoplaySpeed: 1500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    arrows: false,
    dots: true,
    swipeToSlide: false,
    draggable: false,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            variableWidth: false
          }
        }
    ]
}

const SplashBanner = () => {
    return (
        <div className="section splash-main-banner">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="banner-content">
                            <h1 className="title">더 이상 나에게 맞는</h1> 
                            <h1 className="title"><span>할인 혜택</span>을 찾기 위해 고민하지 말아요</h1>
                            <div className="site-element-count">
                                {
                                    CountData.map((data) => (
                                        <div className="count-box" key={data.id}>
                                            <span className="count-title">{data.title}</span>
                                            <div className="count-number h2">
                                                <TrackVisibility once>
                                                        {({isVisible}) => (
                                                            <span className="number count">
                                                                {isVisible ? <CountUp end={data.count_num} duration={1} /> : null}
                                                            </span>
                                                        )}  
                                                </TrackVisibility>
                                                <span className="symbol">+</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  
            <div className="demo-slider">
                <Slider {...slideSettings} className="slick-dot-nav">
                    {DemoData.slice(0, 5).map((data) => (
                        <div className="single-slide" key={data.id}>
                            <Link to={`${process.env.PUBLIC_URL}/${slugify(data.title)}`}>
                                <img src={`${process.env.PUBLIC_URL}${data.width_img}`} alt="Demo" />
                            </Link>
                        </div>
                    ))}
                </Slider> 
            </div>
            */}
            <ul className="list-unstyled shape-group-20">
                <li className="shape shape-1">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-36.png"} alt="Bubble" />
                </li>
                <li className="shape shape-4">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Bubble" />
                </li>
                <li className="shape shape-5">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-37.png"} alt="Bubble" />
                </li>
                <li className="shape shape-7">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-31.png"} alt="Bubble" />
                </li>
            </ul>
        </div>
    )
}

export default SplashBanner;