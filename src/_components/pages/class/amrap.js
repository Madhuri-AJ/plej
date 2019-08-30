import React, { Component } from "react";
import {NavLink} from "react-router-dom";
class AmrapPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    render() {
        return (
            <div>
                <div class="_1vdzHPH">
                    <div class="_3pBQZ7U _2rbE6TC _2v5bHvx">
                        <div class="_27wt8R7 _1G7RCdW _2v5bHvx VBD7Ow3 y5XwMis">
                            <h2>Yoga</h2>
                            <div class="_1-4gF4V">
                                <p>Yoga is the most athletic and physically demanding form. You will be taken through a set series of postures that are linked dynamically to your breathing, generating heat and burning energy.</p>
                            </div>
                            <div class="_1uYqZmj _2rbE6TC _2v5bHvx">
                                <table className="table table-bordered">
                                    <tr>
                                        <th colSpan={2}>Timings</th>
                                    </tr>
                                    <tr>
                                        <td>
                                        Mon to Fri
                                        </td>
                                        <td>
                                            <div> 8am - 9am </div>
                                            <div>
                                                 4pm - 5pm
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Sat to Sun
                                        </td>
                                        <td>
                                            <div>7am - 8am </div>
                                            <div>6pm - 7pm </div>
                                        </td>
                                    </tr>
                                </table>
                                {/* <select>
                                    <option value="" disabled="">Choose time</option>
                                    <option value="1222876" disabled="">12:15 Friday 16th (45 minutes) - Bookable 7am day before</option>
                                    <option value="1225728" disabled="">19:45 Monday 19th (45 minutes) - Bookable 7am day before</option>
                                </select> */}
                                <NavLink to="/contact-us" class=" Yd7bNNG _3Pq3GhV button _1x8JHAI"><span>Join Now</span>
                                </NavLink>
                            </div>
                            <div class="_3srnCE8">
                                <div class="_3GMtneJ _1G7RCdW _2v5bHvx">
                                    <div class="_2Tb-We1 sDHKtsB">
                                        <ul class="_2J71_L4 sDHKtsB">
                                            <li class="NPRZnJb _1kNfguI sDHKtsB">
                                                <div class="_2gpiPPm lC7b5Zk sDHKtsB">
                                                    <span class="_3h_jpHd" style={{ "backgroundImage": "url(\"/assets/images/yoga.jpg\")" }}></span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="_3BtndY2 _2rbE6TC _2v5bHvx">
                                <h2>Your <br />instructors</h2>
                                <div class="Sa1FFQw">
                                    <div class="_3fJiN_C">
                                        <div class="_2gpiPPm _3jJP_-6 _2rbE6TC _2v5bHvx">
                                            <img src="/assets/images/trainer1.jpg" class="_3h_jpHd _2jVkQgE" />
                                        </div>
                                        <h3 class="_2MUcDo2 _2rbE6TC _2v5bHvx">Jasmin</h3>
                                        <div>
                                            <p>Plej fitness is a pioneering initiative undertaken by three fitness experts with over 15 years of experience in fitness club management and scientific training  
                                            </p>
                                        </div>
                                    </div>
                                    <div class="_3fJiN_C">
                                        <div class="_2gpiPPm _3jJP_-6 _2rbE6TC _2v5bHvx">
                                            <img src="/assets/images/trainer2.jpg" class="_3h_jpHd _2jVkQgE" />
                                        </div>
                                        <h3 class="_2MUcDo2 _2rbE6TC _2v5bHvx">Rehana</h3>
                                        <div>
                                            <p>Plej fitness is a pioneering initiative undertaken by three fitness experts with over 15 years of experience in fitness club management and scientific training . </p>
                                        </div>
                                    </div>
                                    {/* <div class="_3fJiN_C">
                                        <div class="_2gpiPPm _3jJP_-6 _2rbE6TC _2v5bHvx">
                                            <img src="/assets/images/trainer3.jpg" class="_3h_jpHd _2jVkQgE" />
                                        </div>
                                        <h3 class="_2MUcDo2 _2rbE6TC _2v5bHvx">John</h3>
                                        <div>
                                            <p>Plej fitness is a pioneering initiative undertaken by three fitness experts with over 15 years of experience in fitness club management and scientific training </p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div class="wqBYWJi">
                            <div class="_3GMtneJ _1G7RCdW _2v5bHvx">
                                <div class="_2Tb-We1 sDHKtsB">
                                    <ul class="_2J71_L4 sDHKtsB">
                                        <li class="NPRZnJb _1kNfguI sDHKtsB">
                                            <div class="_2gpiPPm lC7b5Zk sDHKtsB">
                                                <span class="_3h_jpHd" style={{ "backgroundImage": "url(\"/assets/images/gym12.jpg\")" }}></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default AmrapPage;