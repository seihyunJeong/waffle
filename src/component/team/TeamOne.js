import React from 'react';
import { Link } from 'react-router-dom';
import TeamData from "../../data/team/TeamData.json";
import { slugify } from '../../utils';

const allData = TeamData;

const TeamOne = () => {
    return (
        <div className="section section-padding bg-color-dark pb--70 pb_lg--20 pb_md--0">
        <div className="container">
            <div className="section-heading heading-light">
            <span className="subtitle">Our valus</span>
            <h2 className="title mb--50">Meet The Team</h2>
            <p>POSTLAB은 커머스를 시작으로 다양한 분야에서 디지털 시대에 발생하는 <br/>
                불필요한 단순 노동과 시간의 소요를 없애고, 혁신적인 서비스와 기술을 통해 <br/>
                유저들이 당연히 누려야 하는 가치를 전달하고자 합니다.</p>
            </div>
            <div className="row">
                {allData.map((data) => (
                    <div className="col-xl-3 col-sm-6" key={data.id}>
                        <div className="team-grid">
                            <div className="thumbnail">
                                <Link to={process.env.PUBLIC_URL + `/team-details/${slugify(data.title)}`}>
                                    <img src={process.env.PUBLIC_URL + data.thumb} alt={data.title} />
                                </Link>
                            </div>
                            <div className="content">
                                <h4 className="title">
                                    <Link to={process.env.PUBLIC_URL + `/team-details/${slugify(data.title)}`}>
                                        {data.title}
                                    </Link>
                                </h4>
                                <span className="designation" dangerouslySetInnerHTML={{__html: data.designation}}></span>
                                <span className="designation">{data.description}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <ul className="list-unstyled shape-group-10">
            <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} alt="Circle" /></li>
            <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} alt="Circle" /></li>
            <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} alt="Circle" /></li>
        </ul>
    </div>

    )
}

export default TeamOne;