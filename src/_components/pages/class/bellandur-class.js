import React, { Component } from "react";
import {NavLink} from "react-router-dom";
class BellandurClass extends Component {
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
                                <div class="_3Fst1pU _3x6v3-y fourclass">
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx"><img
                                        src="/assets/images/gym11.jpg"
                                        class="_3h_jpHd" /></div>
                                    <h3 class="rfn1m5O">Gym</h3><span class="_GcKgjb"></span><NavLink className="_1nR3q81 sDHKtsB"
                                        to="/class/amrap"></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        )
    }
}

export default BellandurClass;