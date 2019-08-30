import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class InstructorsPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    render() {
        return (
            <div>
                <div class="_1vdzHPH">
                    <div class="_3SYd3N0 _2rbE6TC _2v5bHvx">                                             
                        <div class="_39EiYTl _2rbE6TC _2v5bHvx VBD7Ow4">
                            <div style={{ "width": "100%" }}>
                                <div class="_3Fst1pU _3x6v3-y threeclass">
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx"><img
                                        src="/assets/images/staff1.jpg"
                                        class="_3h_jpHd" /></div>                                         <h3 class="rfn1m5O" style={{"width":"100%"}}>Jasmin</h3>
                                        <p>Plej fitness is a pioneering initiative undertaken by three fitness experts with over 15 years of experience in fitness club management and scientific training </p>
                                </div>
                                <div class="_3Fst1pU _3x6v3-y threeclass">
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx"><img
                                        src="/assets/images/staff2.jpg"
                                        class="_3h_jpHd" /></div>
                                    <h3 class="rfn1m5O" style={{"width":"100%"}}>Rehana</h3>
                                    <p>Plej fitness is a pioneering initiative undertaken by three fitness experts with over 15 years of experience in fitness club management and scientific training .</p>
                                </div>
                                <div class="_3Fst1pU _3x6v3-y threeclass mr-0">
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx"><img
                                        src="/assets/images/staff3.png"
                                        class="_3h_jpHd" /></div>
                                    <h3 class="rfn1m5O" style={{"width":"100%"}}>John</h3>
                                    <p>Plej fitness is a pioneering initiative undertaken by three fitness experts with over 15 years of experience in fitness club management and scientific training .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InstructorsPage;