import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../common/footer";

class LocationPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    render() {
        return (
            <div>
                <div class="_1vdzHPH">
                    <div class="_3SYd3N0 _2rbE6TC _2v5bHvx">

                        <div class="_39EiYTl _2rbE6TC _2v5bHvx VBD7Ow3">
                            <div style={{ "width": "100%" }}>
                                <div class="_3Fst1pU _3x6v3-y fourclass" >
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx location"><img
                                        src="/assets/images/rajajinagar/rajajinagar_2.jpg"
                                        class="_3h_jpHd" /></div>
                                    <h3 class="rfn1m5O">Bellandur</h3><span class="_GcKgjb"></span><NavLink className="_1nR3q81 sDHKtsB"
                                        to="/gyms/bellandur"></NavLink>
                                </div>
                                <div class="_3Fst1pU _3x6v3-y fourclass" >
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx location"><img
                                        src="/assets/images/forum/forum_1.jpg"
                                        class="_3h_jpHd" /></div>
                                    <h3 class="rfn1m5O">FORUM Mall -<br /> Whitefield</h3><span class="_GcKgjb"></span><NavLink className="_1nR3q81 sDHKtsB"
                                        to="/gyms/forum"></NavLink>
                                </div>
                                <div class="_3Fst1pU _3x6v3-y fourclass" >
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx location"><img
                                        src="/assets/images/forum/forum_3.jpg"
                                        class="_3h_jpHd" /></div>
                                    <h3 class="rfn1m5O">Girinagar</h3><span class="_GcKgjb"></span><NavLink className="_1nR3q81 sDHKtsB"
                                        to="/gyms/girinagar"></NavLink>
                                </div>
                                <div class="_3Fst1pU _3x6v3-y fourclass mr-0" >
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx location"><img
                                        src="/assets/images/kumarpark/kumarpark_2.jpg"
                                        class="_3h_jpHd" /></div>
                                    <h3 class="rfn1m5O">Kumarapark </h3><span class="_GcKgjb"></span><NavLink className="_1nR3q81 sDHKtsB"
                                        to="/gyms/kumarapark"></NavLink>
                                </div>
                            </div>
                            <div style={{ "width": "100%" }}>
                                <div class="_3Fst1pU _3x6v3-y fourclass" >
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx location"><img
                                        src="/assets/images/panatur/panatur_1.jpg"
                                        class="_3h_jpHd" /></div>
                                    <h3 class="rfn1m5O">Panathur</h3><span class="_GcKgjb"></span><NavLink className="_1nR3q81 sDHKtsB"
                                        to="/gyms/panathur"></NavLink>
                                </div>
                                <div class="_3Fst1pU _3x6v3-y fourclass" >
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx location"><img
                                        src="/assets/images/rajajinagar/rajajinagar_1.jpg"
                                        class="_3h_jpHd" /></div>
                                    <h3 class="rfn1m5O">Rajajinagar </h3><span class="_GcKgjb"></span><NavLink className="_1nR3q81 sDHKtsB"
                                        to="/gyms/rajajinagar"></NavLink>
                                </div>
                                <div class="_3Fst1pU _3x6v3-y fourclass">
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx location"><img
                                        src="/assets/images/forum/forum_4.jpg"
                                        class="_3h_jpHd" /></div>
                                    <h3 class="rfn1m5O">Sarjapur Road </h3>
                                    <span class="_GcKgjb"></span>
                                    <NavLink className="_1nR3q81 sDHKtsB"
                                        to="/gyms/sarjapur"></NavLink>
                                </div>
                                <div class="_3Fst1pU _3x6v3-y fourclass mr-0">
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx location"><img
                                        src="/assets/images/vr-mall/vr_2.jpg"
                                        class="_3h_jpHd" /></div>
                                    <h3 class="rfn1m5O">VR Bengaluru - <br /> Whitefield </h3>
                                    <span class="_GcKgjb"></span>
                                    <NavLink className="_1nR3q81 sDHKtsB"
                                        to="/gyms/vr"></NavLink>
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

export default LocationPage;