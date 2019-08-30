import React , {Component} from "react";
import {NavLink} from "react-router-dom";
import Footer from "../common/footer";
export default class FormPage extends Component{
    constructor(props) {
        super(props);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    render(){
        return(
            <div class="_1vdzHPH">
                <div className="_39EiYTl">
                    <form class="center-div">
                        <h2 class="_17Fvefa _2_HaYMw">Join Our Team</h2>
                        <div className="space">
                            <div class="attachment">
                                <input type="file" name="file" className="hide inputfile resume" />
                                    <label for="upload">
                                        <span className="text">APPLY WITH RESUME <span className="text-red">*</span></span>
                                        {/* <i class="required"> *</i> */}
                                    </label>
                            </div>
                        </div>
                        <br/><br/><br/>
                        <div className="bottom_space">
                            <input type="text" class="first-half" placeholder="First Name" />
                            <input type="email" class="second-half" placeholder="Last Name" />
                        </div>
                        <div className="bottom_space">
                            <input type="text" class="" placeholder="Email" />
                        </div>
                        <div className="bottom_space">
                            <input type="text" class="" placeholder="Mobile" />
                        </div>
                        <div className="middle-btn bottom_space">
                            {/* <button className="_1x8JHAI _3Pq3GhV _3xVoYzA bottom_space button">Submit Application</button> */}
                            <NavLink class="Yd7bNNG _3Pq3GhV button _1x8JHAI" to="#"><span>Submit Application</span></NavLink>
                        </div>
                    </form>
                </div>
                <Footer/>
            </div>
        )
    }
}