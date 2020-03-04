import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../common/footer";
import MetaTags from 'react-meta-tags';
export default class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transform1: '0',
            transform2: '0',
            transform3: '0',
            transform4: '0'
        }
        window.scrollTo({ top: 0, behavior: "smooth" });

    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        let scrollTop = (((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100));
        console.log("scrollTop", scrollTop);
        let changedTransform1 = (10 - (scrollTop + scrollTop * 1.5));
        let changedTransform2 = (-10 + (scrollTop + scrollTop * 0.2));
        let changedTransform3 = (-60 + (scrollTop + scrollTop * 1));
        let changedTransform4 = (-60 + (scrollTop + scrollTop * 2.8));

        this.setState({
            transform1: changedTransform1,
            transform2: changedTransform2,
            transform3: changedTransform3,
            transform4: changedTransform4
        });

    }
    render() {
        return (
            <div class="_1vdzHPH">
                <MetaTags>
                    <title>Best Gym In Bangalore With Personal Trainer in Multiple Locations - PlejFitness</title>
                    <meta name="description" content="Here's is your greatest opportunity to deal with your fitness with a personal trainer. Do enroll yourself for this fitness course and don't pass up a great opportunity." />
                    <meta name="keywords" content="Gym in Bangalore, Gym in Bellandur, Gym in forum Mall-Whitefield, Gym in Girinagar, Gym in Kumarapark, Gym in Panathur, Gym in Rajajinagar, Gym in VR Bengaluru, Gym in Jayanagar"/>
                    <meta property="og:title" content="Best Gym In Bangalore With Personal Trainer in Multiple Locations - PlejFitness" />
                    <meta property="og:description" content="Here's is your greatest opportunity to deal with your fitness with a personal trainer. Do enroll yourself for this fitness course and don't pass up a great opportunity." />
                </MetaTags>
                <div class="_2k0LrXm _2rbE6TC _2v5bHvx">
                    <div class="_2z6ElmY _2rbE6TC _2v5bHvx _3HiqiFI">
                        <div class="_1oMY_Ys _3s-__sC _3x6v3-y">
                            <svg class="_3RdppjM" preserveAspectRatio="xMidYMid" viewBox="0 0 650 110">
                                <text vector-effect="non-scaling-stroke" shape-rendering="crispEdges" class="_1D8oKRW _31coI1f" x="0" y="90">Our story</text></svg>
                        </div>
                    </div>
                    <div class="bMWNK1B _2rbE6TC _2v5bHvx _3x6v3-y">
                        <div class="_2dd9I7F _2rbE6TC _2v5bHvx VBD7Ow3">
                            <div className="pt-200">
                                <div class="IeMLLTl _1G7RCdW _2v5bHvx VBD7Ow3">
                                    <div class="_1NA_h7i">
                                        <h3>The Plej Story</h3>
                                        <div>
                                            <p>
                                                Plej fitness is a pioneering initiative undertaken by three fitness experts with over 15 years of experience in fitness club management and scientific training . Initiatives are aimed at not only delivering world-class fitness Trainers to members, but also consolidating the currently unorganized Rs. Rs. 7000 crore health and fitness market. </p>
                                            <p>Plej seeks to monetize this immense potential by leveraging and aggregating the existing, vast network of individual players and franchisees and deliver to its fitness club members state of the art equipment, best-in-class training by certified trainers and value added services and reciprocity.</p>
                                            <p>
                                                <em>Join us, and see for yourself - the last thing we will ever be is boring.</em>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="_363tr7g _1G7RCdW _2v5bHvx">
                                    <div>
                                        <div class="_2gpiPPm _3gv6oAs _1G7RCdW _2v5bHvx"
                                            style={{ "transform": `translateY(${this.state.transform1}px) `, "transition": "1s transform" }}
                                        >
                                            <img src="/assets/images/creative-02.png" class="_3h_jpHd" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="_2gpiPPm _1Qxe_9c _1G7RCdW _2v5bHvx"
                                            style={{ "transform": `translateY(${this.state.transform2}px) `, "transition": "1s transform" }}>
                                            <img src="/assets/images/creative-06.png" class="_3h_jpHd" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="_-WrE9rl _2rbE6TC _2v5bHvx"> */}
                            {/* <svg class="_3RdppjM" preserveAspectRatio="xMidYMid" viewBox="0 0 760 110"><text vector-effect="non-scaling-stroke" shape-rendering="crispEdges" class="_1D8oKRW _31coI1f" x="0" y="90">Philosophy</text></svg> */}
                            {/* </div> */}
                            <div className="pt-200">
                                <div class="_18e7Ks9 _1G7RCdW _2v5bHvx VBD7Ow3">
                                    <div class="_2P81XQQ">
                                        <h3>MISSION</h3>
                                        <div className="mb-60">To lead by providing members and other stakeholders a world class fitness training experience.</div>

                                        <h3>VISION</h3>
                                        <div className="mb-60">To lead by being the preferred fitness club chain and build the largest reciprocal fitness network in India.</div>

                                        <h3>VALUE</h3>
                                        <div className="mb-60">Passion is the heart of our company. We are constantly moving forward, innovating and improving.</div>
                                    </div>
                                </div>
                                <div class="ErJhEG8 _1G7RCdW _2v5bHvx">
                                    <div>
                                        <div class="_2Mohl0x _1G7RCdW _2v5bHvx" style={{ "transform": `translateY(${this.state.transform3}px) `, "transition": "1s transform" }}>
                                            <div class="_2gpiPPm _1MzFp9n">
                                                <img src="/assets/images/image_1.jpg" class="_3h_jpHd" />
                                            </div>
                                            <div class="_2gpiPPm _1MzFp9n">
                                                <img src="/assets/images/image_2.jpg" class="_3h_jpHd" />
                                            </div>
                                            <div class="_2gpiPPm _1MzFp9n">
                                                <img src="/assets/images/image_3.jpg" class="_3h_jpHd" />
                                            </div>
                                            <div class="_2gpiPPm _1MzFp9n">
                                                <img src="/assets/images/image_44.jpg" class="_3h_jpHd" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="_1Aa09nZ _1G7RCdW _2v5bHvx" style={{ "transform": `translateY(${this.state.transform4}px) `, "transition": "1s transform" }}>
                                            <div class="_2gpiPPm _1MzFp9n">
                                                <img src="/assets/images/image_9.jpg" class="_3h_jpHd" />
                                            </div>
                                            <div class="_2gpiPPm _1MzFp9n">
                                                <img src="/assets/images/image_6.jpg" class="_3h_jpHd" />
                                            </div>
                                            <div class="_2gpiPPm _1MzFp9n">
                                                <img src="/assets/images/image_7.jpg" class="_3h_jpHd" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="pt-200">
                                <div class="IeMLLTl _1G7RCdW _2v5bHvx VBD7Ow3">
                                    <div class="_1NA_h7i">
                                        <h3 className="mb-0">RAJ GILL</h3>
                                        <h6>FOUNDER & DIRECTOR - SALES & OPERATIONS </h6>
                                        <div>
                                            <p>
                                                Raj Gill has an experience of 15 years in FITNESS INDUSTRY, Handling Sales and operations of the club allover india and ensuring the clubs do well to their optimum. He ensures the process and systems are in place so that every customer walking into the club feels special and delighted. He is also an internationally certified Fitness Professional and had also been the lecturer for a very well known Fitness Academy, since he understands the product so well having an aggressive attitude of sales, sets him apart from the other sales people in the fitness industry.  </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="_363tr7g _1G7RCdW _2v5bHvx">
                                    <div>
                                        <div class="_2gpiPPm _3gv6oAs _1G7RCdW _2v5bHvx mt-32"
                                            style={{ "transform": `translateY(${this.state.transform1}px) `, "transition": "1s transform" }}
                                        >
                                            <img src="/assets/images/raj_1.jpg" class="_3h_jpHd" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="_2gpiPPm _1Qxe_9c _1G7RCdW _2v5bHvx"
                                            style={{ "transform": `translateY(${this.state.transform2}px) `, "transition": "1s transform" }}>
                                            <img src="/assets/images/raj_2.jpg" class="_3h_jpHd" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-200">
                                <div class="float-left _18e7Ks9 _1G7RCdW _2v5bHvx VBD7Ow3">
                                    <div class="_1NA_h7i">
                                        <h3 className="mb-0">ROHAN SATISH</h3>
                                        <h6>FOUNDER & DIRECTOR - BUSINESS DEVELOPMENT</h6>
                                        <div>
                                            <p>
                                                Franchisee Expert with an experience of 17 years. He has worked in a senior managerial capacity with several startup brands in the area of expansion and new business acquisition. Experience of more than 17 Years in which over 12 years in the fitness industry. Expertise and technical know-how in fitness business and setting up fitness clubs taking overall responsibility from thought to finish Expertise in setting up gyms for corporate such as Infosys, Wipro, Oracle, Motorola etc Successfully rolled out 50+ fitness centers in Snap fitness in India. </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="_363tr7g _1G7RCdW  float-right">
                                    <div>
                                        <div class="_2gpiPPm _3gv6oAs _1G7RCdW _2v5bHvx mt-32"
                                            style={{ "transform": `translateY(${this.state.transform1}px) `, "transition": "1s transform" }}
                                        >
                                            <img src="/assets/images/rohan_1.jpg" class="_3h_jpHd" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="_2gpiPPm _1Qxe_9c _1G7RCdW _2v5bHvx"
                                            style={{ "transform": `translateY(${this.state.transform2}px) `, "transition": "1s transform" }}>
                                            <img src="/assets/images/rohan_2.jpg" class="_3h_jpHd" />
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="pt-200">
                                <div class="IeMLLTl _1G7RCdW _2v5bHvx VBD7Ow3">
                                    <div class="_1NA_h7i">
                                        <h3 className="mb-0">DR.ARUN KUMAR</h3>
                                        <h6>FOUNDER & DIRECTOR - TRAINING</h6>
                                        <div>
                                            <p>
                                                Dr Arunkumar is a Doctor with Masters degree in Physiotherapy(Cardiology) and also Internationally certified Health fitness specialist. Has experience in Health and fitness industry for more than 12 years. Training the fitness experts in scientific way to deal with the client’s fitness goal.And also trains the trainers to deal clients with health issues. He Trains the fitness professionals on First aid and CPR. Dr. Arun Was Heading the Fitness & Training vertical for multiple clubs pan India with Expertise in Recruitment & Training. </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="_363tr7g _1G7RCdW _2v5bHvx">
                                    <div>
                                        <div class="_2gpiPPm _3gv6oAs _1G7RCdW _2v5bHvx mt-32"
                                            style={{ "transform": `translateY(${this.state.transform1}px) `, "transition": "1s transform" }}
                                        >
                                            <img src="/assets/images/arun_1.jpg" class="_3h_jpHd" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="_2gpiPPm _1Qxe_9c _1G7RCdW _2v5bHvx"
                                            style={{ "transform": `translateY(${this.state.transform2}px) `, "transition": "1s transform" }}>
                                            <img src="/assets/images/arun_2.jpg" class="_3h_jpHd" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="pt-200"></div>


                            <div class="k3d6s8r _2rbE6TC _2v5bHvx">
                                {/* <h2>Never Give Up</h2> */}
                                <h1 style={{fontSize:"30px",textAlign:"center"}}>Best Gym In Bangalore With Personal Trainer</h1>
                                <h2><NavLink class="_2nUA0vX" to="/contact-us">Join Plej Fitness</NavLink></h2>
                            </div>
                        </div>
                    </div >
                </div >
                <Footer />
            </div >
        )
    }
}