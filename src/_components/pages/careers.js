import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../common/footer";
export default class CareersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transform1: '0',
            transform2: '0'
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
                                            <p>Plej fitness is a pioneering initiative undertaken by three fitness experts with over 15 years of experience in fitness club management and scientific training . Initiatives are aimed at not only delivering world-class fitness Trainers to members, but also consolidating the currently unorganized Rs. 7000 crore health and fitness market. </p>
                                            <p>Plej seeks to monetize this immense potential by leveraging and aggregating the existing, vast network of individual players and franchisees and deliver to its fitness club members state of the art equipment, best-in-class training by certified trainers and value added services and reciprocity.</p>
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
                                    <h2 class="FsabyOT _2rbE6TC _2v5bHvx">Plej benefits</h2>
                                    <ul class="_2WTwQD9 _2rbE6TC _2v5bHvx">
                                        <li class="_37M7UHC GXyzp1w _2v5bHvx">Learning &amp; development opportunities</li>
                                        <li class="_37M7UHC GXyzp1w _2v5bHvx">Beneficial platform </li>
                                        <li class="_37M7UHC GXyzp1w _2v5bHvx">Lorem Ipsum is simply dummy</li>
                                        <li class="_37M7UHC GXyzp1w _2v5bHvx">Lorem Ipsum is simply dummy</li>
                                        <li class="_37M7UHC GXyzp1w _2v5bHvx">Lorem Ipsum is simply dummy</li>
                                        <li class="_37M7UHC GXyzp1w _2v5bHvx">Staff &amp; member parties</li>
                                    </ul>
                                </div>
                                <div class="_2gpiPPm _2-PF0o6 _2rbE6TC _2v5bHvx">
                                    <img src="/assets/images/about.jpg" />
                                </div>
                                <div class="_2umm8jj _2rbE6TC _2v5bHvx">
                                    <h2 class="FsabyOT _2rbE6TC _2v5bHvx">Available roles</h2>
                                    <div class="_3OroREi GXyzp1w _2v5bHvx">
                                        <div class="_215RRp8 VBD7Ow3">
                                            <div class="iBr7foy">
                                                <h3>RECEPTION</h3>
                                                <div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                    </p>
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
                                                <h3>SALES GURU</h3>
                                                <div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                    </p>
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
                                                <h3>CENTRAL POSITIONS</h3>
                                                <div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
                                                <h3>STUDIO INSTRUCTORS</h3>
                                                <div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <NavLink to="/careers-form"
                                            class="_17m_Ulp _3Pq3GhV VBD7Ow3"><span>Apply Now</span></NavLink>
                                    </div>
                                    <div class="_3OroREi GXyzp1w _2v5bHvx">
                                        <div class="_215RRp8 VBD7Ow3">
                                            <div class="iBr7foy">
                                                <h3>VERY PERSONAL TRAINERS</h3>
                                                <div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <NavLink to="/careers-form"
                                            class="_17m_Ulp _3Pq3GhV VBD7Ow3"><span>Apply Now</span></NavLink>
                                    </div>
                                    <div class="_3OroREi GXyzp1w _2v5bHvx">
                                        <div class="_215RRp8 VBD7Ow3">
                                            <div class="iBr7foy">
                                                <h3>GENERAL MANAGER</h3>
                                                <div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                    </p>
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