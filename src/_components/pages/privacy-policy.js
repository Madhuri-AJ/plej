import React, { Component } from "react";
import Footer from "../common/footer";
import MetaTags from "react-meta-tags"
export default class PrivacyPolicyPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    render() {
        return (
            <div>
                <div class="_1vdzHPH">
                    <MetaTags>
                        <title>Privacy and Policy | Gym In Bangalore - PlejFitness</title>
                        <meta name="description" content="PlejFitness is the Best Gym in Bangalore Karnataka, created with great enthusiasm and vision, having 10+ Fitness centers in Bangalore " />
                        <meta name="keywords" content="Gym in Bangalore, Gym in Bellandur, Gym in forum Mall-Whitefield, Gym in Girinagar, Gym in Kumarapark, Gym in Panathur, Gym in Rajajinagar, Gym in VR Bengaluru, Gym in Jayanagar" />
                        <meta property="og:title" content="Privacy and Policy | Gym In Bangalore - PlejFitness" />
                        <meta property="og:description" content="PlejFitness is the Best Gym in Bangalore Karnataka, created with great enthusiasm and vision, having 10+ Fitness centers in Bangalore " />
                    </MetaTags>
                    <div class="_1ZBL0R_ VBD7Ow3">
                        <div><h1>Privacy Policy</h1>
                            <p>I agree that PLEJ FITNESS can collect, hold, use and disclose my personal information as provided on this Form (and any updated or additional personal information PLEJ FITNESS obtains from me including any photo or other record of my image) for the purposes of :</p>

                            <ul>
                                <li>
                                    Processing my application for booking/membership, compiling a register of members, compiling a national database of members and participants, and for requesting me to approach for membership and event details.
                                </li>
                                <li>
                                    Putting my name and contact information on PLEJ FITNESS’s database list for use by other members of PLEJ FITNESS.
                                </li>
                                <li>
                                    Publishing any of my achievements in PLEJ FITNESS newsletters and on their websites.
                                </li>
                                <li>
                                    Selecting and publicly naming competitors and teams to represent PLEJ FITNESS at events.
                                </li>
                                <li>
                                    Providing me with information and activities relating to PLEJ FITNESS.
                                </li>
                                <li>
                                    Including my photograph or other imagery on PLEJ FITNESS website, in newsletters, annual reports, or similar official publications.
                                </li>
                                <li>
                                    Enabling PLEJ FITNESS to comply with any statute, regulation, by-law or other regulatory instrument that requires collection or disclosure of personal information
                                </li>
                                <li>
                                    Any other purpose I agree to in writing.
                                </li>
                            </ul>
                            <br />
                            <p>
                                PLEJ FITNESS PVT. LTD. is committed to protecting your privacy. We will only use the information collected about you lawfully or by your consent. The personal information which PLEJ FITNESS PVT. LTD. holds will be held securely in accordance with our internal security policy and the law.
                            </p>
                            <p>
                                PLEJ FITNESS PVT. LTD. does not disclose any personal information to advertisers and for other marketing and promotional purposes that could be used to personally identify you, such as your password, credit card number and bank account number.
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}