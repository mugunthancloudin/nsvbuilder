import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        count: 1,
        title: `Amenities `,
        icon: require('./../../images/icon/crane-1.png'),
        description: 'Amenities include a swimming pool, gym, playground, clubhouse, landscaped gardens, 24-hour security, and parking facilities.',
    },
    {
        count: 2,
        title: 'Location advantage',
        icon: require('./../../images/icon/renovation.png'),
        description: 'Conveniently located near schools, shopping centers, hospitals, parks, public transportation, major highways, and restaurants.',
    },
    {
        count: 3,
        title: 'About project',
        icon: require('./../../images/icon/toolbox.png'),
        description: 'The residential project offers luxury apartments, green spaces, top-notch amenities, prime location, and sustainable design',
    },
    {
        count: 4,
        title: 'About builder',
        icon: require('./../../images/icon/compass.png'),
        description: 'NSV constructs dream homes with precision, melding design and functionality for lasting comfort and beauty.',
    }
]

var img1 = require('./../../images/background/ptn-1.png');

class Specialization4 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-tb80 bg-white bg-repeat square_shape2 inner-page-padding" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-left">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our</span> Specialties</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */} 
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row">
                                    {services.map((item, index) => (
                                        <div className="col-md-3 col-sm-6" key={index}>
                                            <div className="mt-icon-box-wraper m-b30">
                                                <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                                                    <span className="icon-count-number">{item.count}</span>
                                                    <div className="icon-md inline-icon m-b15 text-primary scale-in-center">
                                                        <span className="icon-cell"><img src={item.icon} alt=""/></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h4 className="mt-tilte m-b25">{item.title}</h4>
                                                        <p>{item.description}</p>
                                                        <NavLink to={"/services"} className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Specialization4;