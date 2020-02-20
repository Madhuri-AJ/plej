import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../history";
import { api } from "../../env";
import { formTypes } from "../../_constants/formTypes";
import axios from "axios";
import {toast} from 'react-toastify'
import swal from "sweetalert";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            condition: false,
            open: false,
            fullName: "",
            email: "",
            phone: "",
            location: "",
            isSubmitting: false,
            conditionsCheck: false


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
    handleCheckboxChange = (event) => {
            this.setState({
                conditionsCheck: event.target.checked
            })
    }
    handleInputChange = event => {
        let {value} = event.target;
        this.setState({
            [event.target.name]: value
        }) ;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({isSubmitting: true});
        // let url = `${api.apiCompany}general/send-email`;
        // let payload = {
        //     fullName: this.state.fullName,
        //     location: this.state.location,
        //     email: this.state.email,
        //     phone: this.state.phone,
        //     formType : formTypes.BOOKING

        // }

        let url = `https://bigappcompany.co.in/demos/cms/contact`;
        let name = this.state.fullName;
        let email = this.state.email;
        let number = this.state.phone;
        let text = this.state.location;

        let payload = new FormData()
        payload.append("product_name",`from_email=raj@movezafitness.com&to_email=raj@movezafitness.com&to_cc=info@movezafitness.com,info@plejfitness.com&name=${name}&email=${email}&number=${number}&location=${text}&subject=Book a free trial`);

        axios.post(url, payload)
          .then(res => {
              if(res.status == 200){
                //   toast.success(res.data.message);
                window.location.href="/thank-you";
                // swal({
                //     title: "Done!",
                //     text: res.data.message,
                //     icon: "success"
                //   })
              }
              this.setState({isSubmitting: false});
              this.clearForm();
            })
            .catch(err => {
                this.setState({isSubmitting: false});
              console.log('the error is ', err);
          })



    }

    clearForm = () => {
        console.log('i am here.');
        this.setState({
            fullName: "",
            email: "",
            phone: "",
            location: "",
            conditionsCheck: false
        })
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
                                <form class="center-div _2v5bHvx">
                                    <div className="bottom_space">
                                        <input value={this.state.fullName} onChange={this.handleInputChange} name="fullName" type="text" class="first-half" placeholder="Full Name" />
                                        <input value={this.state.email} onChange={this.handleInputChange} name="email" type="email" class="second-half" placeholder="Email" />
                                    </div>
                                    <div className="bottom_space">
                                        <input value={this.state.phone} onChange={this.handleInputChange} name="phone" type="text" class="first-half" placeholder="Phone Number" />
                                        <input value={this.state.location} name="location" onChange={this.handleInputChange} name="location" type="text" class="second-half" placeholder="Location" />
                                    </div>
                                    <div className="bottom_space">
                                        <label class="checkbox-container small d-inline-block"><input onChange={this.handleCheckboxChange} checked={this.state.conditionsCheck} name="conditionsCheck" type="checkbox" /><span class="checkmark"></span></label>
                                        <div class="d-inline-block white_color">I agree to the <NavLink className="underline" to="/terms-conditions" onClick={this.close}>
                                            Terms and Conditions
                                        </NavLink> </div>
                                    </div>
                                    <div className="middle-btn">
                                        <button disabled={this.state.isSubmitting || !this.state.conditionsCheck} onClick={this.handleSubmit} class="Yd7bNNG _3Pq3GhV button _1x8JHAI" to="#"><span>Submit</span></button>
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