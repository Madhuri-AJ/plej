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
                        <div class="_1V2XMPJ">
                            <div class="_2heWrbT sDHKtsB">
                                <h4 class="_35ms454 _2rbE6TC _2v5bHvx">Search</h4>
                            </div>
                            <div class="_2pwByUC _2rbE6TC _2v5bHvx">
                                <div class="_3Wse5wf _2rbE6TC _2v5bHvx">
                                    <div class="_3aa_vTA"><input type="text" class="_37fECWZ"
                                        value="" placeholder="Search" />
                                        <button class="_3fk1T1C button"><span>Search</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                        <div class="_39EiYTl _2rbE6TC _2v5bHvx VBD7Ow4">
                            <div style={{ "width": "100%" }}>
                                <div class="_3Fst1pU _3x6v3-y threeclass">
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx"><img
                                        src="/assets/images/staff1.jpg"
                                        class="_3h_jpHd" /></div>                                         <h3 class="rfn1m5O" style={{"width":"100%"}}>Jasmin</h3>
                                        <p>Jasmin has an experience of 15 years in FITNESS INDUSTRY, Handling Sales and operations of the club allover india and ensuring the clubs do well to their optimum.</p>
                                </div>
                                <div class="_3Fst1pU _3x6v3-y threeclass">
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx"><img
                                        src="/assets/images/staff2.jpg"
                                        class="_3h_jpHd" /></div>
                                    <h3 class="rfn1m5O" style={{"width":"100%"}}>Rehana</h3>
                                    <p>Rehana Gill has an experience of 15 years in FITNESS INDUSTRY, Handling Sales and operations of the club allover india and ensuring the clubs do well to their optimum.</p>
                                </div>
                                <div class="_3Fst1pU _3x6v3-y threeclass mr-0">
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx"><img
                                        src="/assets/images/staff3.png"
                                        class="_3h_jpHd" /></div>
                                    <h3 class="rfn1m5O" style={{"width":"100%"}}>John</h3>
                                    <p>John has an experience of 15 years in FITNESS INDUSTRY, Handling Sales and operations of the club allover india and ensuring the clubs do well to their optimum.</p>
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