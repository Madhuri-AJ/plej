import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../history";
import SimpleReactValidator from "simple-react-validator";
import $ from "jquery";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            condition: false,
            open: false,
            name: '',
            email: '',
            phone: '',
            location: "",
            isChecked: false,
        }
        this.validator = new SimpleReactValidator();
    }
    handleToggle = () => {
        this.setState({
            condition: !this.state.condition
        });
    }
    handleDisplay = () => {
        this.setState({
            condition: !this.state.condition
        });
    }
    handlePopup = () => {
        this.setState({
            open: !this.state.open
        })
    }
    close = () => {
        this.setState({
            open: !this.state.open
        });
    }

    handleCheckBox = e => {
        this.setState({
            isChecked: e.target.checked
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.isChecked) {
            alert("Please accept the terms and conditions")
        }
        if (this.validator.allValid()) {

        }
        else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }



    render() {
        return (
            <div className={this.state.isLoading ? "hideheader " : "header _14BrxaV"}>
                <header
                    className={this.state.condition ? "_3KR0JuQ VBD7Ow3 _1XkRVei" : "_3KR0JuQ VBD7Ow3"}>
                    <NavLink to="/" class="_1ff-7Sh" title="Go to the Plej homepage"></NavLink>
                    <div class="ijfRzqG"
                        onClick={this.handleToggle}>
                        <span class="_2CJPpcw pRZSkbx"></span>
                    </div>
                    <ul class="_3XOFvvi">
                        {/* <li className="_2GaQ8vJ">
                            <a class="m7LKENr _25LPQhk _2DGciQP"
                                href="#" onClick={history.goBack}> Back</a>
                        </li> */}
                        <li class="_2GaQ8vJ">
                            <a class="m7LKENr _25LPQhk _2DGciQP" onClick={this.handlePopup}>Book a Free Trial</a>
                        </li>
                        {/* <li class="_2GaQ8vJ">
                            <a class="m7LKENr _25LPQhk _2DGciQP"
                                href="#">Login</a>
                        </li> */}
                    </ul>
                    <div className={this.state.condition ? '_2Tfn_VZ sDHKtsB ' : '_2Tfn_VZ sDHKtsB'}>
                        <ul class="_1xWsKFr _2rbE6TC _2v5bHvx pRZSkbx">
                            <li class="_1GxILA2">
                                <NavLink to="/" className="_2Vj-OOq _2_HaYMw _1w_OEYg" onClick={this.handleDisplay}>
                                    Home
                                </NavLink>
                            </li>
                            <li class="_1GxILA2">
                                <NavLink to="/about" onClick={this.handleDisplay} className="_2Vj-OOq _2_HaYMw _1w_OEYg">
                                    About Us
                                </NavLink>
                            </li>
                            <li class="_1GxILA2">
                                <NavLink to="/contact-us" onClick={this.handleDisplay} className="_2Vj-OOq _2_HaYMw _1w_OEYg">
                                    Join PLEJ Fitness
                                </NavLink>
                            </li>
                            <li class="_1GxILA2">
                                <NavLink to="/location" onClick={this.handleDisplay} className="_2Vj-OOq _2_HaYMw _1w_OEYg">
                                    Locations
                                </NavLink>
                            </li>
                            <li class="_1GxILA2">
                                <NavLink to="/careers" onClick={this.handleDisplay} className="_2Vj-OOq _2_HaYMw _1w_OEYg">
                                    Careers
                                </NavLink>
                            </li>
                            <li class="_1GxILA2">
                                <NavLink to="/owngym" onClick={this.handleDisplay} className="_2Vj-OOq _2_HaYMw _1w_OEYg">
                                    Own A Gym
                                </NavLink>
                            </li>
                            <li class="_1GxILA2">
                                <NavLink to="/gallery" onClick={this.handleDisplay} className="_2Vj-OOq _2_HaYMw _1w_OEYg">
                                    Gallery
                                </NavLink>
                            </li>
                            <li class="_1GxILA2">
                                <NavLink to="/contact-us" onClick={this.handleDisplay} className="_2Vj-OOq _2_HaYMw _1w_OEYg">
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                        <ul class="_3pZGZI5 _2rbE6TC _2v5bHvx">
                            <li class="XuAUiwa">
                                <a href="https://www.instagram.com/plej_fitness/" class="_2BYuTc8 _2DGciQP _25LPQhk"
                                    target="_blank">Instagram
                                </a>
                            </li>
                            <li class="XuAUiwa">
                                <a href="https://www.facebook.com/plejfitness/" class="_3rmm2J7 _2BYuTc8 _2DGciQP _25LPQhk"
                                    target="_blank">
                                    Facebook
                                </a>
                            </li>
                            <li class="XuAUiwa">
                                <a href="https://twitter.com/plejfitness" class="_2BYuTc8 _2DGciQP _25LPQhk"
                                    target="_blank">
                                    Twitter
                                </a>
                            </li>
                            <li class="XuAUiwa">
                                <a href="https://www.linkedin.com/company/plej-fitness"
                                    class="_3rmm2J7 _2BYuTc8 _2DGciQP _25LPQhk" target="_blank">
                                    Linked In
                                </a>
                            </li>
                            <li class="XuAUiwa">
                                <a href="https://in.pinterest.com/plejfitness/?autologin=true" class="_2BYuTc8 _2DGciQP _25LPQhk"
                                    target="_blank">
                                    pinterest
                                </a>
                            </li>
                        </ul>
                    </div>
                </header>
                <div class={this.state.open ? "_1jPZE-A _12c1-Jf sDHKtsB" : "_12c1-Jf sDHKtsB"}>
                    <div class="LN-nIKU I7PwxVS">
                        <div class="_1L5csiF">
                            <div class="_1US2FDM _2rbE6TC _2v5bHvx VBD7Ow3">
                                <h3 class="LsKezX_">Book a Free Trial</h3>
                                <span class="_2va2FpG" onClick={this.close}></span>
                            </div>
                            <div class="_3ITUOra _2rbE6TC _2v5bHvx VBD7Ow3" style={{ "width": "3524.19px", "transform": "translateX(0px)" }}>
                                <form class="center-div _2v5bHvx" action="https://formsubmit.co/madhuri@bigappcompany.in" method="POST">
                                    <div className="bottom_space">
                                        <input type="text" name="name" class="first-half" placeholder="Full Name" required />

                                        <input type="email" class="second-half" placeholder="Email" name="email" required />

                                    </div>
                                    <div className="bottom_space">
                                        <input type="number" maxLength="10" required class="first-half" placeholder="Phone Number" name="phone" />
                                        <input type="text" name="location" class="second-half" placeholder="Location" required />
                                    </div>
                                    <div className="bottom_space">
                                        <label class="checkbox-container small d-inline-block">
                                            <input type="checkbox" name="checkbox" required />
                                            <span class="checkmark"></span>
                                        </label>
                                        <div class="d-inline-block white_color">I agree to the <NavLink className="underline" to="/terms-conditions" onClick={this.close}>
                                            Terms and Conditions
                                        </NavLink> </div>
                                    </div>
                                    <div className="middle-btn">
                                        <button type="submit" class="Yd7bNNG _3Pq3GhV button _1x8JHAI" ><span>Submit</span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;