import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Slider from './../Elements/Slider';
import Specialization from './../Elements/Specialization';
import About2 from '../Elements/About2';
import OurValue2 from './../Elements/OurValue2';
import OurMission from './../Elements/OurMission';
import OurServices from './../Elements/OurServices';
import Callus from './../Elements/Callus';
import OurProject from './../Elements/OurProject';
import Blogs from './../Elements/Blogs';
import Testimonials from './../Elements/Testimonials';

class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Slider />
                    <Specialization />
                    <About2 />
                    <OurValue2 />
                    <OurMission />
                    <OurServices />
                    <Callus />
                    <OurProject />
                    {/* <Blogs /> */}
                    <Testimonials />
                </div>
                <Footer />
            </>
        );
    };
};

export default Home;