import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            condition: false
        }
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
    render() {
        return (
            <div className="header _14BrxaV">
                <header
                    className={this.state.condition ? "_3KR0JuQ VBD7Ow3 _1XkRVei" : "_3KR0JuQ VBD7Ow3"}>
                    <NavLink to="/" class="_1ff-7Sh" title="Go to the Gymbox homepage"></NavLink>
                    <div class="ijfRzqG"
                        onClick={this.handleToggle}>
                        <span class="_2CJPpcw pRZSkbx"></span>
                    </div>
                    {/* <ul class="_3XOFvvi">
                        <li class="_2GaQ8vJ">
                            <a class="m7LKENr _25LPQhk _2DGciQP">Book a tour</a>
                        </li>
                        <li class="_2GaQ8vJ">
                            <a class="m7LKENr _25LPQhk _2DGciQP"
                                href="#">Login</a>
                        </li>
                    </ul> */}
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
                                    Join PLEJ
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
            </div>
        )
    }
}

export default Header;