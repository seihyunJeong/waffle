import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';


const AboutFour = () => {
    return (
            <div className="section section-padding case-study-featured-area">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-7 col-lg-6">
                        <div className="case-study-featured-thumb text-start">
                        <img src={process.env.PUBLIC_URL + "/images/project/mobile-mockup1.png"} alt="travel" style={{maxHeight: '740px'}}/>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="case-study-featured">
                        <div className="section-heading heading-left">
                            <span className="subtitle"><strong>Probe는 한 번에 찾아주고, 계산해주고, 알려줘요</strong></span>
                            <h2 className="title">Project Probe</h2>
                            <p>Image 인식 기반 Deep Learning과 NLP를 활용해 숨어있는 할인 혜택을 찾아서 상품 가격에 반영하고, 개개인에 맞춰서 보여주는 One-stop solution</p>
                            <ul>
                                <li>
                                    <p>100만개 상품의 할인 혜택</p>
                                </li>
                                <li>
                                    <p>실시간 상품 혜택 Tracking과 Notification</p>
                                </li>
                                <li>
                                    <p>나의 지갑 속 프로파일에 맞춘 혜택가 검색 결과</p>
                                </li>
                            </ul>
                            {/* 
                            <Link to="#" className="axil-btn btn-fill-primary btn-large">Read More</Link>
                            */}
                        </div>
                        {/*
                        <div className="case-study-counterup">
                            <div className="single-counterup">
                            <h2 className="count-number">
                            <TrackVisibility once>
                                {({isVisible}) => (
                                    <span className="number count">
                                        {isVisible ? <CountUp end="10" duration={1} /> : null}
                                    </span>
                                )}  
                            </TrackVisibility>
                            <span className="symbol">+</span>
                            </h2>
                            <span className="counter-title">Years on the market</span>
                            </div>
                            <div className="single-counterup">
                            <h2 className="count-number">
                            <TrackVisibility once>
                                {({isVisible}) => (
                                    <span className="number count">
                                        {isVisible ? <CountUp end="1500" duration={1} /> : null}
                                    </span>
                                )}  
                            </TrackVisibility>
                            <span className="symbol">+</span>
                            </h2>
                            <span className="counter-title">Projects delivered so far</span>
                            </div>
                        </div>
                        */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutFour;