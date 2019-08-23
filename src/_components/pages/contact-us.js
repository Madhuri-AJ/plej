import React, { Component } from "react";
import {NavLink} from "react-router-dom";
export default class ContactPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    render() {
        return (
            <div class="_1vdzHPH">
                <div className="_39EiYTl">
                    <form class="center-div">
                        <h2 class="_17Fvefa _2_HaYMw">Get in Touch</h2>
                        <div className="bottom_space">
                            <input type="text" class="first-half" placeholder="Full Name" />
                            <input type="email" class="second-half" placeholder="Email" />
                        </div>
                        <div className="bottom_space">
                            <input type="text" class="first-half" placeholder="Phone Number" />
                            <input type="email" class="second-half" placeholder="Location" />
                        </div>
                        <div className="bottom_space">
                            <textarea type="text" placeholder="Message" />
                        </div>
                        <div className="middle-btn">
                            {/* <button className="_1x8JHAI _3Pq3GhV _3xVoYzA button">Submit</button> */}
                            <NavLink class="Yd7bNNG _3Pq3GhV button _1x8JHAI" to="#"><span>Submit</span></NavLink>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}