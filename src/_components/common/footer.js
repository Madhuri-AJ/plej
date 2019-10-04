import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { formTypes } from "../../_constants/formTypes";
import { api } from "../../env";
import {toast} from 'react-toastify';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            email: "",
            isSubmitting: false
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
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
        let url = `${api.apiCompany}general/send-email`;
        let payload = {
            fullName: this.state.fullName,
            email: this.state.email,
            formType : formTypes.NEWS_LETTER

        }

        axios.post(url, payload)
          .then(res => {
              if(res.status == 200){
                  toast.success(res.data.message);
              }
          })
          .catch(err => {
              console.log('the error is ', err)
          })

    }
    render() {
        return (
            <div>
                <footer class="_24zAESA _2rbE6TC _2v5bHvx">
                    <div class="_2revefY _2rbE6TC _2v5bHvx _25LPQhk">
                        <NavLink class="p-HDv6u" to="/contact-us" >
                            <span class="DGKlJgu">Join Plej Fitness</span>
                            <span class="DGKlJgu">Join Plej Fitness</span>
                            <span class="DGKlJgu">Join Plej Fitness</span>
                            <span class="DGKlJgu">Join Plej Fitness</span>
                            <span class="DGKlJgu">Join Plej Fitness</span>
                            <span class="DGKlJgu">Join Plej Fitness</span>
                            <span class="DGKlJgu">Join Plej Fitness</span>
                            <span class="DGKlJgu">Join Plej Fitness</span>
                            <span class="DGKlJgu">Join Plej Fitness</span>
                            <span class="DGKlJgu">Join Plej Fitness</span>
                            <span class="DGKlJgu">Join Plej Fitness</span>
                            <span class="DGKlJgu">Join Plej Fitness</span>
                            <span class="DGKlJgu">Join Plej Fitness</span>
                            <span class="DGKlJgu">Join Plej Fitness</span>
                            <span class="DGKlJgu">Join Plej Fitness</span>
                            <span class="DGKlJgu">Join Plej Fitness</span>
                            <span class="DGKlJgu">Join Plej Fitness</span>
                            <span class="DGKlJgu">Join Plej Fitness</span>
                        </NavLink>
                    </div>
                    <div class="_1B_-c0t VBD7Ow3">
                        <div class="_3sadWOc _2HhTmXD _2v5bHvx">
                            <h3>Pages</h3>
                            <ul class="_1aeQHSW">
                                <li>
                                    <NavLink class="_3FnoLbj _25LPQhk _2DGciQP" to="/about">
                                        About Us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink class="_3FnoLbj _25LPQhk _2DGciQP" to="/location">
                                        Locations
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink class="_3FnoLbj _25LPQhk _2DGciQP" to="/careers">
                                        Careers
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink class="_3FnoLbj _25LPQhk _2DGciQP" to="/owngym">
                                        Own A Gym
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink class="_3FnoLbj _25LPQhk _2DGciQP" to="/gallery">
                                        Gallery
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink class="_3FnoLbj _25LPQhk _2DGciQP" to="/privacy-policy">
                                        Privacy Policy
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink class="_3FnoLbj _25LPQhk _2DGciQP" to="/terms-conditions">
                                        Terms and Conditions
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink class="_3FnoLbj _25LPQhk _2DGciQP" to="/contact-us">
                                        Contact Us
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div class="_3sadWOc _2HhTmXD _2v5bHvx">
                            <h3>Gyms</h3>
                            <ul class="_1aeQHSW">
                                <li>
                                    <NavLink class="_3FnoLbj _25LPQhk _2DGciQP" to="/gyms/bellandur">
                                        Bellandur
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink class="_3FnoLbj _25LPQhk _2DGciQP" to="/gyms/forum">
                                        FORUM Mall - Whitefield
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink class="_3FnoLbj _25LPQhk _2DGciQP" to="/gyms/girinagar">
                                        Girinagar
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink class="_3FnoLbj _25LPQhk _2DGciQP" to="/gyms/kumarapark">
                                        Kumarapark
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink class="_3FnoLbj _25LPQhk _2DGciQP" to="/gyms/panathur">
                                        Panathur
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink class="_3FnoLbj _25LPQhk _2DGciQP" to="/gyms/rajajinagar">
                                        Rajajinagar
                                    </NavLink>
                                </li>
                                {/* <li>
                                    <NavLink class="_3FnoLbj _25LPQhk _2DGciQP" to="/gyms/sarjapur">
                                        Sarjapur Road
                                    </NavLink>
                                </li> */}
                                <li>
                                    <NavLink class="_3FnoLbj _25LPQhk _2DGciQP" to="/gyms/vr">
                                        VR Bengaluru - Whitefield
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div class="_3sadWOc _2HhTmXD _2v5bHvx">
                            <h3>Social</h3>
                            <ul class="_1aeQHSW">
                                <li>
                                    <a href="https://www.instagram.com/plej_fitness/" class="_3FnoLbj _25LPQhk _2DGciQP">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/plejfitness/" class="_3FnoLbj _25LPQhk _2DGciQP">Facebook</a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/plejfitness" class="_3FnoLbj _25LPQhk _2DGciQP">Twitter</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/plej-fitness" class="_3FnoLbj _25LPQhk _2DGciQP">Linked In</a>
                                </li>
                                <li>
                                    <a href="https://in.pinterest.com/plejfitness/?autologin=true" class="_3FnoLbj _25LPQhk _2DGciQP">Pinterest</a>
                                </li>
                            </ul>
                        </div>
                        <div class="_3sadWOc _2HhTmXD _2v5bHvx">
                            <h3>Newsletter</h3>
                            <form class="_3CID_bm">
                                <div class="_2nxeEK_ _14NUrhZ">
                                    {/* <label for="name"></label> */}
                                    <input onChange={this.handleInputChange} type="text" name="fullName" placeholder="Your Name" vlaue="" />
                                    {/* <input type="text" name="name" value=""
                                        placeholder="Your name" />
                                    <small class="_22qkbgJ"></small> */}
                                </div>
                                <div class="_2nxeEK_ _14NUrhZ">
                                    <input onChange={this.handleInputChange} type="text" name="email" placeholder="Your Email" vlaue="" />
                                    {/* <label for="email"></label>
                                    <input type="email" name="email" value=""
                                        placeholder="Your email" />
                                    <small class="_22qkbgJ"></small> */}
                                </div>
                                <div className="pt-16">
                                    <button onClick={this.handleSubmit} class="Yd7bNNG _3Pq3GhV button _1x8JHAI">
                                        <span>Submit</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="_3QyZoZ_ _2rbE6TC _2v5bHvx">
                            <h4 class="HLzP6ji">©2019 Plej</h4>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;