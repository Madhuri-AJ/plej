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
                                <div class="_3Fst1pU _3x6v3-y" style={{ "width": "30%", "margin-right": "5%", "display": "inline-block","cursor":"auto" }}>
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx"><img
                                        src="/assets/images/rohan.jpg"
                                        class="_3h_jpHd" /></div>                                         <h3 class="rfn1m5O" style={{"width":"100%"}}>Rohan</h3>
                                        <p>Rohan has an experience of 15 years in FITNESS INDUSTRY, Handling Sales and operations of the club allover india and ensuring the clubs do well to their optimum.</p>
                                </div>
                                <div class="_3Fst1pU _3x6v3-y" style={{ "width": "30%", "margin-right": "5%", "display": "inline-block","cursor":"auto" }}>
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx"><img
                                        src="/assets/images/raj.jpg"
                                        class="_3h_jpHd" /></div>
                                    <h3 class="rfn1m5O" style={{"width":"100%"}}>Raj Gill</h3>
                                    <p>Raj Gill has an experience of 15 years in FITNESS INDUSTRY, Handling Sales and operations of the club allover india and ensuring the clubs do well to their optimum.</p>
                                </div>
                                <div class="_3Fst1pU _3x6v3-y" style={{ "width": "30%","display": "inline-block" ,"cursor":"auto"}}>
                                    <div class="_2gpiPPm _2WGnI5T _2rbE6TC _2v5bHvx"><img
                                        src="/assets/images/arun.jpg"
                                        class="_3h_jpHd" /></div>
                                    <h3 class="rfn1m5O" style={{"width":"100%"}}>Arun</h3>
                                    <p>Arun has an experience of 15 years in FITNESS INDUSTRY, Handling Sales and operations of the club allover india and ensuring the clubs do well to their optimum.</p>
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