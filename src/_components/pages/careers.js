import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../common/footer";
export default class CareersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transform1: '0',
            transform2: '0',
            open:false
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
        // console.log("scrollTop", scrollTop)
        let changedTransform1 = (10 - (scrollTop + scrollTop * 2.5));
        let changedTransform2 = (-10 + (scrollTop + scrollTop * 2));

        this.setState({
            transform1: changedTransform1,
            transform2: changedTransform2
        });

    }

    handlewidth = () =>{
        let open = this.state.open;
        this.setState({
            open:!open
        })
    }
    render() {
        return (
            <div>
                <div class="_1vdzHPH">
                    <div>
                        <div class="_1V8Vwl1 _3IPJrBv _2rbE6TC _2v5bHvx _3HiqiFI"><svg class="_33ij8ie pRZSkbx _3x6v3-y"
                            preserveAspectRatio="xMidYMid" viewBox="0 0 560 110"><text vector-effect="non-scaling-stroke"
                                shape-rendering="crispEdges" class="_25Sdx7V _31coI1f" x="0" y="90">Careers</text></svg></div>
                        <div class="_17ytWhG _2rbE6TC _2v5bHvx _3x6v3-y">
                            <div class="zb0xP4p _2rbE6TC _2v5bHvx VBD7Ow3">
                                <div class="_1a7xbxt _1G7RCdW _2v5bHvx VBD7Ow3">
                                    <div class="_2aDA4on">
                                        <h3>CAREERS AT Plej</h3>
                                        <div>
                                            <p>We’ve carefully handpicked individuals who believe in the vision of Plej Fitness - to make this world a healthier, fitter place. Breaking boundaries and doing more than what is expected is what people at Plej Fitness are known for. Join our team of highly motivated individuals, as we reach out to each other to build a stress free and unique experience.</p>
                                            {/* <p>Plej fitness is a pioneering initiative undertaken by three fitness experts with over 15 years of experience in fitness club management and scientific training . Initiatives are aimed at not only delivering world-class fitness Trainers to members, but also consolidating the currently unorganized Rs. 7000 crore health and fitness market. </p>
                                            <p>Plej seeks to monetize this immense potential by leveraging and aggregating the existing, vast network of individual players and franchisees and deliver to its fitness club members state of the art equipment, best-in-class training by certified trainers and value added services and reciprocity.</p> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="_3rZ3KIB _1G7RCdW _2v5bHvx">
                                    <div style={{ "transform": `translateY(${this.state.transform1}px) `, "transition": "1s transform" }}>
                                        <div class="_2gpiPPm _2G4hZNU _1G7RCdW _2v5bHvx">
                                            <img src="/assets/images/1.jpg" class="_3h_jpHd" />
                                        </div>
                                    </div>
                                    <div style={{ "transform": `translateY(${this.state.transform2}px) `, "transition": "1s transform" }}>
                                        <div class="_2gpiPPm _1pIlQDJ _1G7RCdW _2v5bHvx">
                                            <img src="/assets/images/2.jpg" class="_3h_jpHd" />
                                        </div>
                                    </div>
                                </div>
                                {/* <div class="_2JsEYIx _2rbE6TC _2v5bHvx p38">
                                    <div class="ItM3bgw">
                                        <div class="_1cT7yb7">
                                            <div class="_1JMynM5 _2UxZdJd sDHKtsB">
                                                 <div class="_1JMynM5 _3-6A3ch _1CqZaJN">
                                                    <video class="_3h_jpHd _21UD1KG _3HiqiFI"
                                                        src="/assets/images/demo.mp4"
                                                        muted autoplay=""
                                                        playsinline loop>
                                                    </video>
                                                </div>
                                            </div>
                                            <div class="_3-DAWjj _2QsqUxL">
                                                <h2 class="_17Fvefa _2_HaYMw">Working at Plej</h2>
                                                <div class="_3KZTfFO _2rbE6TC _2v5bHvx">
                                                    <h4 class="_1qlk-1P _2DGciQP">Watch</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div class="_1rBG0S_ _2rbE6TC _2v5bHvx pt-100">
                                    <h2 class="FsabyOT _2rbE6TC _2v5bHvx">WE ARE LOOKING FOR</h2>
                                    <ul class="_2WTwQD9 _2rbE6TC _2v5bHvx">
                                        <li class="_37M7UHC GXyzp1w _2v5bHvx">
                                            <h3 class="new-h2">Change Agent</h3>
                                            <p> We are as close as one can get to a fitness revolution. Whether you believe in change or want to be the change, this is the right place to maximize impact</p>
                                        </li>
                                        <li class="_37M7UHC GXyzp1w _2v5bHvx">
                                            <h3 class="new-h2">Idea Builder</h3>
                                            <p>If your brain works on an overdrive and ideas are a part of your daily task list, then Plej Fitness is the place to ideate, execute, get your hands dirty, make mistakes, and learn everyday!
                                        </p>
                                        </li>
                                        <li class="_37M7UHC GXyzp1w _2v5bHvx">
                                            <h3 class="new-h2"> Go Getter</h3>
                                            <p>
                                                You wish to be around dynamic, passionate, go-getters to work, workout, chill and party with? Then you would love your time at Plej Fitness.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="_2gpiPPm _2-PF0o6 _2rbE6TC _2v5bHvx">
                                    <img src="/assets/images/creative-05.png" />
                                </div>
                                <div class="_2umm8jj _2rbE6TC _2v5bHvx">
                                    <h2 class="FsabyOT _2rbE6TC _2v5bHvx">Available roles</h2>
                                    <div class="_3OroREi GXyzp1w _2v5bHvx">
                                        <div class="_215RRp8 VBD7Ow3">
                                            <div class="iBr7foy">
                                                <h3>FITNESS MANAGERS </h3>
                                                <div>
                                                    <p className={this.state.open? "limit-width height-full" : "limit-width"}>
                                                        Supervises and executes all activities of the fitness center like walk-in handling, setting customer service standards, maintaining the facility according to Plej Fitness standards and guidelines, working on member renewals and feedback handling, developing or maintaining a group fitness program and other duties as assigned.
                                                    </p>
                                                    <a class="view-more" onClick={this.handlewidth}>View More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <NavLink to="/careers-form"
                                            class="_17m_Ulp _3Pq3GhV VBD7Ow3"><span>Apply Now</span>
                                        </NavLink>
                                    </div>
                                    <div class="_3OroREi GXyzp1w _2v5bHvx">
                                        <div class="_215RRp8 VBD7Ow3">
                                            <div class="iBr7foy">
                                                <h3>FITNESS MARSHALLS </h3>
                                                <div>
                                                    <p class="limit-width">
                                                        A fitness Marshall is someone who leads, instructs, and motivates individuals or groups in exercise activities, including cardiovascular exercise (exercises for the heart and blood system), strength training, and stretching. They work with people of all ages and skill levels.
                                                    </p>
                                                    <a href="#" class="view-more">View More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <NavLink to="/careers-form"
                                            class="_17m_Ulp _3Pq3GhV VBD7Ow3"><span>Apply Now</span>
                                        </NavLink>
                                    </div>
                                    <div class="_3OroREi GXyzp1w _2v5bHvx">
                                        <div class="_215RRp8 VBD7Ow3">
                                            <div class="iBr7foy">
                                                <h3>PERSONAL TRAINERS</h3>
                                                <div>
                                                    <p class="limit-width">
                                                        Provides Personal Training services for Health & Fitness Center members. Assesses physical fitness and abilities of clients. Works with clients to identify short-term and long-term goals. Develops individualized health and fitness programming to meet client needs. Teaches safe fitness and exercise techniques and skills, including weight lifting, cardio, body mechanics, cross-training, nutrition, etc. Provides structure, encouragement, and motivation to clients. Monitors client progress; provides positive and constructive feedback as needed.
                                                    </p>
                                                    <a href="#" class="view-more">View More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <NavLink to="/careers-form"
                                            class="_17m_Ulp _3Pq3GhV VBD7Ow3"><span>Apply Now</span>
                                        </NavLink>
                                    </div>
                                    <div class="_3OroREi GXyzp1w _2v5bHvx">
                                        <div class="_215RRp8 VBD7Ow3">
                                            <div class="iBr7foy">
                                                <h3>TELE CALLERS</h3>
                                                <div>
                                                    <p class="limit-width">
                                                        To contribute in generating sales for the company. You will be responsible for closing sales deals over the phone and maintaining good customer relationships. An effective telesales representative must be an excellent communicator and have superior people handling skills. They must be comfortable presenting the services over the phone as well as dealing with complaints and feedbacks. The goal is to help the company grow by bringing in customers and developing business.
                                                    </p>
                                                    <a href="#" class="view-more">View More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <NavLink to="/careers-form"
                                            class="_17m_Ulp _3Pq3GhV VBD7Ow3"><span>Apply Now</span></NavLink>
                                    </div>
                                    <div class="_3OroREi GXyzp1w _2v5bHvx">
                                        <div class="_215RRp8 VBD7Ow3">
                                            <div class="iBr7foy">
                                                <h3>TEAM LEADER</h3>
                                                <div >
                                                    <p class="limit-width">A "team leader" is someone who has the capability to drive performance within a group of people. We expect a Team leader to utilize the team’s expertise, their peers, influence, and/or creativeness to formulate an effective team. He/She will be the sole responsible person for the sales at the clubs.</p>
                                                    <a href="#" class="view-more">View More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <NavLink to="/careers-form"
                                            class="_17m_Ulp _3Pq3GhV VBD7Ow3"><span>Apply Now</span></NavLink>
                                    </div>
                                    <div class="_3OroREi GXyzp1w _2v5bHvx">
                                        <div class="_215RRp8 VBD7Ow3">
                                            <div class="iBr7foy">
                                                <h3>OPERATIONS MANAGER</h3>
                                                <div>
                                                    <p class="limit-width">
                                                        An Operations manager should be knowing in an out of the guidelines, rules and regulations of the company, handling CRMs and Company emails are his/her’s main job, Will have to visit the clubs periodically and make sure that all the clubs are following the guidelines properly on the services and hygiene.
                                                    </p>
                                                    <a href="#" class="view-more">View More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <NavLink to="/careers-form"
                                            class="_17m_Ulp _3Pq3GhV VBD7Ow3"><span>Apply Now</span></NavLink>
                                    </div>
                                    <div class="_3OroREi GXyzp1w _2v5bHvx">
                                        <div class="_215RRp8 VBD7Ow3">
                                            <div class="iBr7foy">
                                                <h3>MARKETING MANAGER</h3>
                                                <div>
                                                    <p class="limit-width">
                                                        A Marketing manager controls all of the communication between the company and customers. Should manage internal teams in order to craft promotional messages, and should work to publish media across multiple channels. Marketing managers work with many different forms of media, from more traditional newspapers and billboards, Events etc to digital advertising and social platforms.
                                                    </p>
                                                    <a href="#" class="view-more">View More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <NavLink to="/careers-form"
                                            class="_17m_Ulp _3Pq3GhV VBD7Ow3"><span>Apply Now</span></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}