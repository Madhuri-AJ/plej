import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            condition: false,
            open:false
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
    handlePopup=() =>{
        this.setState({
            open: !this.state.open
        })
    }
    close= ()=>{
        this.setState({
            open: !this.state.open
        });
    }
    render() {
        return (
            <div className="header _14BrxaV">
                <header
                    className={this.state.condition ? "_3KR0JuQ VBD7Ow3 _1XkRVei" : "_3KR0JuQ VBD7Ow3"}>
                    <NavLink to="/" class="_1ff-7Sh" title="Go to the Plej homepage"></NavLink>
                    <div class="ijfRzqG"
                        onClick={this.handleToggle}>
                        <span class="_2CJPpcw pRZSkbx"></span>
                    </div>
                    <ul class="_3XOFvvi">
                        <li class="_2GaQ8vJ">
                            <a class="m7LKENr _25LPQhk _2DGciQP" onClick={this.handlePopup}>Book a tour</a>
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
                <div class={this.state.open ? "_1jPZE-A _12c1-Jf sDHKtsB" : "_12c1-Jf sDHKtsB"}>
                    <div class="LN-nIKU I7PwxVS">
                        <div class="_1L5csiF">
                            <div class="_1US2FDM _2rbE6TC _2v5bHvx VBD7Ow3">
                                <h3 class="LsKezX_">Book a tour</h3>
                                <span class="_2va2FpG" onClick={this.close}></span>
                            </div>
                            <div class="_3ITUOra _2rbE6TC _2v5bHvx VBD7Ow3" style={{ "width": "3524.19px", "transform": "translateX(0px);" }}>
                                <form>
                                    <div class="_2cjZ1PT _1G7RCdW _2v5bHvx">
                                        <div class="Zd4QDDO">
                                            <h4 class="Zd4QDDO">1/4</h4>
                                        </div>
                                        <h2 class="_1_KNBvC">What's your name?</h2>
                                        <div class="_2nxeEK_ _14NUrhZ">
                                            <label for="fromName"></label>
                                            <input type="text" name="fromName" value="" placeholder="Name" />
                                            <small class="_22qkbgJ">This field is required.</small>
                                        </div>
                                    </div>
                                   
                                    <div class="_26Hb2eR _2cjZ1PT _1G7RCdW _2v5bHvx">
                                        <div class="Zd4QDDO">
                                            <h4 class="Zd4QDDO">2/4</h4>
                                        </div>
                                        <h2 class="_1_KNBvC">What's your phone?</h2>
                                        <div class="_2nxeEK_ _14NUrhZ">
                                            <label for="message[mobile]"></label>
                                            <input type="text" name="message[mobile]" value="" placeholder="Phone" />
                                            <small class="_22qkbgJ">This field is required.</small>
                                        </div>
                                    </div>

                                    <div class="_26Hb2eR  _2cjZ1PT _1G7RCdW _2v5bHvx">
                                        <div class="Zd4QDDO"><h4 class="Zd4QDDO">3/4</h4></div><h2 class="_1_KNBvC">Select club</h2><div class="_2nxeEK_ _14NUrhZ"><label for="message[gym]"></label><select name="message[gym]"><option value="select">Select</option><option value="Bank">Bank</option><option value="Cannon Street">Cannon Street</option><option value="Covent Garden">Covent Garden</option><option value="Ealing">Ealing</option><option value="Elephant and Castle">Elephant and Castle</option><option value="Farringdon">Farringdon</option><option value="Holborn">Holborn</option><option value="Old Street">Old Street</option><option value="Victoria">Victoria</option><option value="Westfield London">Westfield London</option><option value="Westfield Stratford">Westfield Stratford</option></select><small class="_3uKmWJ7 _22qkbgJ">This field is required</small></div></div>



                                    <div class="_26Hb2eR _2cjZ1PT _1G7RCdW _2v5bHvx"><div class="Zd4QDDO"><h4 class="Zd4QDDO">4/6</h4></div><h2 class="_1_KNBvC">Time to submit!</h2><p>I understand that by submitting my details I will be contacted by PLEJ with information about their services and membership options (not with spam, we promise)</p><input type="submit" value="Book your free tour!" /></div>

                                    <div class="_3ipyBdB">
                                        <h2>Thanks - chat soon</h2>
                                    </div>
                                </form>
                            </div>
                            <div class="_2bIo9Yp _2rbE6TC _2v5bHvx VBD7Ow3">
                                <button class="_3pXyaiA _2S_CT_r button"><span>&nbsp;</span></button>
                                <button className="button"><span>Next</span></button></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;