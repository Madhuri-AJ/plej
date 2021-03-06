import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { api } from "../../env";
import { toast } from 'react-toastify';
import { formTypes } from "../../_constants/formTypes";
import axios from 'axios';
import swal from "sweetalert";
import Footer from "../common/footer";
import MetaTags from "react-meta-tags";
export default class OwnGymPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            email: "",
            phone: "",
            location: "",
            message: "",
            isSubmitting: false
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    handleInputChange = event => {
        let { value } = event.target;
        this.setState({
            [event.target.name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ isSubmitting: true });
        // let url = `${api.apiCompany}general/send-email`;
        // let payload = {
        //     fullName: this.state.fullName,
        //     email: this.state.email,
        //     phone: this.state.phone,
        //     location: this.state.location,
        //     message: this.state.message,
        //     formType: formTypes.CONTACT_US
        // }

        let url = `https://bigappcompany.co.in/demos/cms/contact`;
        let name = this.state.fullName;
        let email = this.state.email;
        let number = this.state.phone;
        let text = this.state.location;
        let lname = this.state.message;

        let payload = new FormData()
        payload.append("product_name", `from_email=raj@movezafitness.com&to_email=raj@movezafitness.com&to_cc=info@movezafitness.com,info@plejfitness.com&name=${name}&email=${email}&number=${number}&location=${text}&message=${lname}&subject=Contact Details`);

        // payload.append("product_name",`from_email=madhuri@bigappcompany.in&to_email=madhuri@bigappcompany.in&name=${name}&email=${email}&number=${number}&location=${text}&message=${lname}&subject=Contact Details`);

        axios.post(url, payload)
            .then(res => {
                if (res.status == 200) {
                    window.location.href = "/thank-you";
                }
                this.setState({ isSubmitting: false });
                this.clearForm();
            })
            .catch(err => {
                this.setState({ isSubmitting: false });
                console.log('the error is ', err)
            })

    }

    clearForm = () => {
        this.setState({
            fullName: "",
            email: "",
            phone: "",
            location: "",
            message: ""
        })
    }
    render() {
        return (

            <div class="_1vdzHPH">
                <MetaTags>
                    <title>Best Fitness Franchise For You | Fastest Growing Gym Chain‎ - PlejFitness</title>
                    <meta name="description" content="The best and fastest-growing gym in Banglore. Over the year we have consistently convey the best." />
                    <meta name="keywords" content="Gym in Bangalore, Gym in Bellandur, Gym in forum Mall-Whitefield, Gym in Girinagar, Gym in Kumarapark, Gym in Panathur, Gym in Rajajinagar, Gym in VR Bengaluru, Gym in Jayanagar" />
                    <meta property="og:title" content="Best Fitness Franchise For You | Fastest Growing Gym Chain‎ - PlejFitness" />
                    <meta property="og:description" content="The best and fastest-growing gym in Banglore. Over the year we have consistently convey the best." />
                </MetaTags>
                <div class="_3CTAk5g _2rbE6TC _2v5bHvx">
                    <div class="_2w47Ada _2rbE6TC _2v5bHvx">
                        <div class="NuYYeO4 _2rbE6TC _2v5bHvx">
                            <h1 class="DqXpLQh">OwnGym - PlejFitness</h1>
                        </div>
                    </div>
                    <div class="_17ytWhG _2rbE6TC _2v5bHvx _3x6v3-y">
                        <div class="zb0xP4p _2rbE6TC _2v5bHvx VBD7Ow3">
                            <div class="mb-0 pt-100 _2rbE6TC _2v5bHvx">
                                <h2 class="FsabyOT _2rbE6TC _2v5bHvx">Our Models</h2>
                                <ul class="_2WTwQD9 _2rbE6TC _2v5bHvx">
                                    <li class="_37M7UHC GXyzp1w _2v5bHvx">
                                        Premium Fitness Club
                                    </li>
                                    <li class="_37M7UHC GXyzp1w _2v5bHvx">
                                        Active Fitness Club
                                    </li>
                                    <li class="_37M7UHC GXyzp1w _2v5bHvx">
                                        Fitness Studio
                                    </li>
                                    <li class="_37M7UHC GXyzp1w _2v5bHvx">
                                        Women’s Fitness Club
                                    </li>
                                    <li class="_37M7UHC GXyzp1w _2v5bHvx">
                                        Kids Fitness Club

                                    </li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <div class="_1nsQEkX _2rbE6TC _2v5bHvx">
                        <div class="_3VBlCoA _2rbE6TC _2v5bHvx">
                            <a name="why"></a>
                            <div class="_1AqDBWN VBD7Ow3">
                                <div class="Chl_-0Q GXyzp1w _2v5bHvx">
                                    <h3>Faster ROI</h3><br />
                                    <p>
                                        Among others, Plej Fitness is founded with the prime objective of consolidating the currently splintered fitness market. In doing so, Plej invites existing fitness owners and others who wish to set up new fitness clubs to become a Plej Franchisee. By being a Plej franchise, you automatically upgrade to well established, scientifically-run fitness club. With our vast experience in fitness club management backing you, you will no doubt enjoy greater profitability than running your fitness independently.
                                    </p>
                                </div>
                                <div class="_2DFH3kw _1Dbvw6B _2v5bHvx">
                                    <img src="/assets/images/Faster-ROI.png" alt="" />
                                </div>
                            </div>
                        </div>

                        <div class="vZBlQpZ _2rbE6TC _2v5bHvx">
                            <a name="what"></a>
                            <div class="_3YNv-TL VBD7Ow3">
                                <div class="_3Lc7Cvz GXyzp1w _2v5bHvx">
                                    <h3>Plej Expertise</h3><br />
                                    <p>
                                        Plej enables and empowers franchisees by being a one-stop-shop for all the needs of new fitness clubs and non-performing existing ones. Our solutions are end-to-end. Beginning with identifying a suitable location, negotiating lease agreements, procuring the right equipment & installation, getting the interiors done; hiring and training personal trainers, Plej offers a plethora of services for franchisees.
                                    </p>
                                </div>
                                <div class="_2kegIUU _1Dbvw6B _2v5bHvx">
                                    <img src="/assets/images/expert-advise.png" alt="" />
                                </div>
                            </div>
                        </div>

                        <div class="_3VBlCoA _2rbE6TC _2v5bHvx">
                            <a name="why"></a>
                            <div class="_1AqDBWN VBD7Ow3">
                                <div class="Chl_-0Q GXyzp1w _2v5bHvx">
                                    <h3>Improved Profitability</h3><br />
                                    <p>
                                        A Plej fitness franchisee during the Pre-launch phase immensely benefit from the wide publicity and promotional activities conducted by Plej to guarantee greater brand awareness and increase footfalls to your fitness club. Within this period, the branding build-up that Plej’s professionals manage, will assure you that the launch and the post-launch period will be successful beyond your expectations.
                                    </p>
                                </div>
                                <div class="_2DFH3kw _1Dbvw6B _2v5bHvx">
                                    <img src="/assets/images/Improved-Profitability.png" alt="" />
                                </div>
                            </div>
                        </div>


                        <div class="vZBlQpZ _2rbE6TC _2v5bHvx">
                            <a name="what"></a>
                            <div class="_3YNv-TL VBD7Ow3">
                                <div class="_3Lc7Cvz GXyzp1w _2v5bHvx">
                                    <h3>Maximized Returns</h3><br />
                                    <p>
                                        A Plej fitness franchisee during the Pre-launch phase immensely benefit from the wide publicity and promotional activities conducted by Plej to guarantee greater brand awareness and increase footfalls to your fitness club. Within this period, the branding build-up that Plej’s professionals manage, will assure you that the launch and the post-launch period will be successful beyond your expectations.
                                    </p>
                                </div>
                                <div class="_2kegIUU _1Dbvw6B _2v5bHvx">
                                    <img src="/assets/images/maximized-return.png" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="o15HL62 _2v5bHvx" id="standard">
                    <div class="_3juAkpr _1KSLoAe">
                        <div class="_2Ey81ib _paddingtop">
                            <ul class="_3_31gDn _2rbE6TC _2v5bHvx">
                                <li class="_3O95Rh5 Cq_7NWt _2rbE6TC _2v5bHvx"><a class="_2HzoBao _2rbE6TC _2v5bHvx" href="bank.html">
                                    <h4 class="_2J9Yz6G _2rbE6TC _2v5bHvx VBD7Ow3">Standard Investment</h4>
                                </a>
                                    <div class="_Wl12W- VBD7Ow3">
                                        <ul class="M6EUSUT _2rbE6TC _2v5bHvx">
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">Investment Summary</div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            PLEJ Premium Club
                                                        </p>
                                                        <p className="first">
                                                            PLEJ Active Club
                                                        </p>
                                                        <p className="first">
                                                            PLEJ Studio
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">&nbsp;</div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            Rupees in lakhs
                                                        </p>
                                                        <p className="first">
                                                            Rupees in lakhs
                                                        </p>
                                                        <p className="first">
                                                            Rupees in lakhs
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">Type of Equipment</div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            PLEJ Approved
                                                        </p>
                                                        <p className="first">
                                                            PLEJ Approved
                                                        </p>
                                                        <p className="first">
                                                            PLEJ Approved
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">Owned / Rental Premises (Carpet Sq.Ft)</div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            5000 - 10000
                                                        </p>
                                                        <p className="first">
                                                            4000 - 5000
                                                        </p>
                                                        <p className="first">
                                                            2400 - 3000
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">Franchisee Fee</div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            1,000,000
                                                        </p>
                                                        <p className="first">
                                                            1,000,000
                                                        </p>
                                                        <p className="first">
                                                            500,000
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">Investment in Equipment</div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            11,400,000
                                                        </p>
                                                        <p className="first">
                                                            9,900,000
                                                        </p>
                                                        <p className="first">
                                                            8,500,000
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">Investment in Interiors (1250/- per sq.ft)</div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            6,250,000
                                                        </p>
                                                        <p className="first">
                                                            5,000,000
                                                        </p>
                                                        <p className="first">
                                                            3,000,000
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">Training</div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            200,000
                                                        </p>
                                                        <p className="first">
                                                            200,000
                                                        </p>
                                                        <p className="first">
                                                            200,000
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">Initial Marketing</div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            500,000
                                                        </p>
                                                        <p className="first">
                                                            400,000
                                                        </p>
                                                        <p className="first">
                                                            300,000
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">
                                                    Signage/branding/computers/printers/cctv/accessories
                                                </div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            200,000
                                                        </p>
                                                        <p className="first">
                                                            200,000
                                                        </p>
                                                        <p className="first">
                                                            100,000
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">
                                                    Misclenious
                                                </div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            100,000
                                                        </p>
                                                        <p className="first">
                                                            100,000
                                                        </p>
                                                        <p className="first">
                                                            100,000
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">Investment Range</div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            19,650,000
                                                        </p>
                                                        <p className="first">
                                                            16,800,000
                                                        </p>
                                                        <p className="first">
                                                            12,700,000
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">Per Sales</div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            3,000,000
                                                        </p>
                                                        <p className="first">
                                                            3,000,000
                                                        </p>
                                                        <p className="first">
                                                            3,000,000
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx"> Total</div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            16,650,000
                                                        </p>
                                                        <p className="first">
                                                            13,800,000
                                                        </p>
                                                        <p className="first">
                                                            9,700,000
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">
                                                    *Rates subject to fluctuation in Dollar prices
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">
                                                    *Local Taxes Extra
                                                </div>
                                            </li>
                                        </ul>
                                        {/* <div class="_2S9gFR2 _2rbE6TC _2v5bHvx">
                                        <a className="_1DHXI17 _3Pq3GhV"
                                                href="#express"><span>View Express Investment</span></a>
                                        </div> */}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="o15HL62 _2v5bHvx" id="standard">
                    <div class="_3juAkpr _1KSLoAe">
                        <div class="_2Ey81ib _paddingtop">
                            <ul class="_3_31gDn _2rbE6TC _2v5bHvx">
                                <li class="_3O95Rh5 Cq_7NWt _2rbE6TC _2v5bHvx"><a class="_2HzoBao _2rbE6TC _2v5bHvx" href="bank.html">
                                    <h4 class="_2J9Yz6G _2rbE6TC _2v5bHvx VBD7Ow3">Standard Investment</h4>
                                </a>
                                    <div class="_Wl12W- VBD7Ow3">
                                        <ul class="M6EUSUT _2rbE6TC _2v5bHvx">
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">Investment Summary</div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            PLEJ Women's Club
                                                        </p>
                                                        <p className="first">
                                                            PLEJ Kids Fitness Club
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">&nbsp;</div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            Rupees in lakhs
                                                        </p>
                                                        <p className="first">
                                                            Rupees in lakhs
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">Type of Equipment</div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            PLEJ Approved
                                                        </p>
                                                        <p className="first">
                                                            PLEJ Approved
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">Owned / Rental Premises (Carpet Sq.Ft)</div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            2000 - 2500
                                                        </p>
                                                        <p className="first">
                                                            1200 - 2400
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">Franchisee Fee</div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            500,000
                                                        </p>
                                                        <p className="first">
                                                            500,000
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">Investment in Equipment</div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            5,000,000
                                                        </p>
                                                        <p className="first">
                                                            5,000,000
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">Investment in Interiors (1250/- per sq.ft)</div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            2,500,000
                                                        </p>
                                                        <p className="first">
                                                            1,500,000
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">Training</div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            200,000
                                                        </p>
                                                        <p className="first">
                                                            200,000
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">Initial Marketing</div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            200,000
                                                        </p>
                                                        <p className="first">
                                                            200,000
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">
                                                    Signage/branding/computers/printers/cctv/accessories
                                                </div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            100,000
                                                        </p>
                                                        <p className="first">
                                                            100,000
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">
                                                    Misclenious
                                                </div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            100,000
                                                        </p>
                                                        <p className="first">
                                                            100,000
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">Investment Range</div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            8,600,000
                                                        </p>
                                                        <p className="first">
                                                            7,600,000
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">Per Sales</div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            2,000,000
                                                        </p>
                                                        <p className="first">
                                                            1,500,000
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx"> Total</div>
                                                <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                    <div className="w-100">
                                                        <p className="first">
                                                            6,600,000
                                                        </p>
                                                        <p className="first">
                                                            6,100,000
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">
                                                    *Rates subject to fluctuation in Dollar prices
                                                </div>
                                            </li>
                                            <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                <div class="_2l5my07 _2HhTmXD _2v5bHvx">
                                                    *Local Taxes Extra
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="o15HL62 _2v5bHvx" id="express">
                    <div class="_3juAkpr _1KSLoAe">
                        <div class="_2Ey81ib _paddingtop">
                            <ul class="_3_31gDn _2rbE6TC _2v5bHvx">
                                <li class="_3O95Rh5 Cq_7NWt _2rbE6TC _2v5bHvx">
                                    <a class="_2HzoBao _2rbE6TC _2v5bHvx" href="#" >
                                        <h4 class="_2J9Yz6G _2rbE6TC _2v5bHvx VBD7Ow3">Choose A Location</h4>
                                    </a>
                                    <div className="VBD7Ow3">
                                        <form class="center-div left-div" onSubmit={this.handleSubmit.bind(this)}>
                                            <div className="bottom_space mt-40">
                                                <input value={this.state.fullName} name="fullName" onChange={this.handleInputChange} type="text" class="first-half" placeholder="Full Name" required />

                                                <input onChange={this.handleInputChange} value={this.state.email} name="email" type="email" class="second-half" placeholder="Email" required />
                                            </div>
                                            <div className="bottom_space">
                                                <input onChange={this.handleInputChange} value={this.state.phone} name="phone" type="number" class="first-half" placeholder="Phone Number" required />

                                                <input value={this.state.location} onChange={this.handleInputChange} name="location" type="text" class="second-half" placeholder="Location" required />
                                            </div>
                                            <div className="bottom_space">
                                                <textarea value={this.state.message} onChange={this.handleInputChange} name="message" type="text" placeholder="Message" required />
                                            </div>
                                            <div className="middle-btn">
                                                <button class="Yd7bNNG _3Pq3GhV button _1x8JHAI"><span>Submit</span></button>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}