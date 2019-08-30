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
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx"><img
                                        src="/assets/images/gym1.jpg"
                                        class="_3h_jpHd" /></div>
                                    <h3 class="rfn1m5O">Veerannapalya</h3><span class="_GcKgjb"></span><NavLink className="_1nR3q81 sDHKtsB"
                                        to="/gyms/place"></NavLink>
                                </div>
                                <div class="_3Fst1pU _3x6v3-y fourclass" >
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx"><img
                                        src="/assets/images/gym2.jpg"
                                        class="_3h_jpHd" /></div>
                                    <h3 class="rfn1m5O">Rajajinagar</h3><span class="_GcKgjb"></span><NavLink className="_1nR3q81 sDHKtsB"
                                        to="/gyms/place"></NavLink>
                                </div>
                                <div class="_3Fst1pU _3x6v3-y fourclass" >
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx"><img
                                        src="/assets/images/gym3.jpg"
                                        class="_3h_jpHd" /></div>
                                    <h3 class="rfn1m5O">Bagalur <br/>  Cross</h3><span class="_GcKgjb"></span><NavLink className="_1nR3q81 sDHKtsB"
                                        to="/gyms/place"></NavLink>
                                </div>
                                <div class="_3Fst1pU _3x6v3-y fourclass mr-0" >
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx"><img
                                        src="/assets/images/gym4.jpg"
                                        class="_3h_jpHd" /></div>
                                    <h3 class="rfn1m5O">Bellandur</h3><span class="_GcKgjb"></span><NavLink className="_1nR3q81 sDHKtsB"
                                        to="/gyms/place"></NavLink>
                                </div>
                            </div>
                            <div style={{ "width": "100%" }}>
                                <div class="_3Fst1pU _3x6v3-y fourclass" >
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx"><img
                                        src="/assets/images/gym5.jpg"
                                        class="_3h_jpHd" /></div>
                                    <h3 class="rfn1m5O">Panathur</h3><span class="_GcKgjb"></span><NavLink className="_1nR3q81 sDHKtsB"
                                        to="/gyms/place"></NavLink>
                                </div>
                                <div class="_3Fst1pU _3x6v3-y fourclass" >
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx"><img
                                        src="/assets/images/gym6.jpg"
                                        class="_3h_jpHd" /></div>
                                    <h3 class="rfn1m5O">Kumara <br/> Park</h3><span class="_GcKgjb"></span><NavLink className="_1nR3q81 sDHKtsB"
                                        to="/gyms/place"></NavLink>
                                </div>
                                <div class="_3Fst1pU _3x6v3-y fourclass">
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx"><img
                                        src="/assets/images/gym7.jpg"
                                        class="_3h_jpHd" /></div>
                                    <h3 class="rfn1m5O">Gurugram</h3><span class="_GcKgjb"></span><NavLink className="_1nR3q81 sDHKtsB"
                                        to="/gyms/place"></NavLink>
                                </div>
                                {/* <div class="_3Fst1pU _3x6v3-y" style={{ "width": "22%", "display": "inline-block" }}>
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx"><img
                                        src="/assets/images/gym8.jpg"
                                        class="_3h_jpHd" /></div>
                                    <h3 class="rfn1m5O">Ashtanga <br/>  Yoga</h3><span class="_GcKgjb"></span><NavLink className="_1nR3q81 sDHKtsB"
                                        to="/gyms/place"></NavLink>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default LocationPage;