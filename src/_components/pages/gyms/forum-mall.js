import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MetaTags from "react-meta-tags";
class ForumPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    render() {
        let array = ["/assets/images/forum/forum_1.jpg", "/assets/images/gym2.jpg", "/assets/images/gym3.jpg", "/assets/images/gym4.jpg", "/assets/images/gym5.jpg"];
        return (
            <div>
                <div class="_1vdzHPH">
                <MetaTags>
                        <title>Best Gym In Forum Mall-Whitefield | Fitness Center Forum Mall - PlejFitness</title>
                        <meta name="description" content="Are you looking for a best gym in Kumarapark? We are the one who can give quality fitness services with a personal trainer. ✓Fitness Center ✓Crossfit Gym ✓Best Gym Forum Mall" />
                        <meta name="keywords" content="Gym in Bangalore, Gym in Bellandur, Gym in forum Mall-Whitefield, Gym in Girinagar, Gym in Kumarapark, Gym in Panathur, Gym in Rajajinagar, Gym in VR Bengaluru, Gym in Jayanagar" />
                        <meta property="og:title" content="Best Gym In Forum Mall-Whitefield | Fitness Center Forum Mall - PlejFitness" />
                        <meta property="og:description" content="Are you looking for a best gym in Kumarapark? We are the one who can give quality fitness services with a personal trainer. ✓Fitness Center ✓Crossfit Gym ✓Best Gym Forum Mall" />
                    </MetaTags>
                    <div class="o15HL62 _2v5bHvx">
                        <div class="_3juAkpr _1KSLoAe">
                            {/* <div class="_1JOjVV5 _2v5bHvx">
                                <div class="e_U31UT sDHKtsB"></div>
                            </div> */}
                            <div class="_2Ey81ib">
                                <ul class="_3_31gDn _2rbE6TC _2v5bHvx">
                                    <li class="_3O95Rh5 Cq_7NWt _2rbE6TC _2v5bHvx">
                                        <a class="_2HzoBao _2rbE6TC _2v5bHvx" href="bank.html">
                                            <h4 class="_2J9Yz6G _2rbE6TC _2v5bHvx VBD7Ow3">Forum Mall - Whitefield</h4>
                                        </a>
                                        {/* <div className="VBD7Ow3">
                                            <NavLink class="zF_pZj2 _3Pq3GhV"
                                                to="../contact-us"><span>Join Plej Fitness Today</span></NavLink>
                                        </div> */}
                                        <div class="_Wl12W- VBD7Ow3">
                                            <ul class="M6EUSUT _2rbE6TC _2v5bHvx">
                                                <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                    <div class="_2l5my07 _2HhTmXD _2v5bHvx">Timings</div>
                                                    <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                        <div>
                                                            <p>
                                                            </p>
                                                            <p>Mon to Fri: 6am – 10pm<br />Sat to Sun: 7am – 7pm</p>
                                                        </div>
                                                        <NavLink
                                                            to="../contact-us" class="Yd7bNNG _3Pq3GhV button _1x8JHAI"><span>Join Plej Fitness Today</span></NavLink>
                                                    </div>
                                                </li>
                                                <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                    <div class="_2l5my07 _2HhTmXD _2v5bHvx">Contact</div>
                                                    <div class="_1Fu6UbF _1dohwpN _2v5bHvx"><a href="tel:+91 9717533833">+91 9717533833 </a>
                                                    </div>
                                                </li>
                                                <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                    <div class="_2l5my07 _2HhTmXD _2v5bHvx">Email</div>
                                                    <div class="_1Fu6UbF _1dohwpN _2v5bHvx"><a
                                                        href="../cdn-cgi/l/email-protection.html#c1a3a0afaaa4afb0b4a8b3a8a4b281a6b8aca3aeb9efa2aeefb4aa"
                                                        class="_2h5s4t1"><span class="__cf_email__"
                                                            data-cfemail="1b797a75707e756a6e7269727e685b7c6276797463357874356e70"> info@plejfitness.com</span></a>
                                                    </div>
                                                </li>
                                                <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                    <div class="_2l5my07 _2HhTmXD _2v5bHvx">Address</div>
                                                    <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                        No.62, Whitefield Main Rd, Prestige Ozone, Bengaluru Forum Neighborhood Mall, 3 Floor, E Level, Parking, Prestige Ozone, Whitefield, Bengaluru, Karnataka 560066
                                                        <a
                                                            href="https://goo.gl/maps/785PzgBUczUQRFvN8"
                                                            target="_blank" class="Yd7bNNG _3Pq3GhV button _1x8JHAI"><span>View on Map</span></a>
                                                    </div>
                                                </li>
                                                <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                    <div class="_2l5my07 _2HhTmXD _2v5bHvx">Facilities</div>
                                                    <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                        <span>Strength &amp;
                                                            Conditioning<br />
                                                        </span>
                                                        <span>Functional
                                                        Training<br />
                                                        </span>
                                                        <span>Weight Section<br /></span>
                                                        <span>Cardio Section<br />
                                                        </span>
                                                        <span>Change Rooms<br /></span>
                                                        <span>Lockers<br /></span>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div class="_2S9gFR2 _2rbE6TC _2v5bHvx">
                                                {/* <NavLink class="zF_pZj2 _3Pq3GhV"
                                                    to="../contact-us"><span>Join Plej Fitness Today</span></NavLink> */}
                                                <NavLink className="_1DHXI17 _3Pq3GhV"
                                                    to="#" onClick="return false;"><span>Classes</span></NavLink>
                                                <NavLink class="zF_pZj2 _3Pq3GhV"
                                                    to="#" onClick="return false;"><span>Instructor</span></NavLink>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="_1Xw6tAa">
                                <div class="_3DJUv-O sDHKtsB">
                                    <div class="_2Tb-We1 sDHKtsB location-carousel">
                                        <Carousel showThumbs={false}
                                            showStatus={false}
                                            autoPlay interval={2000}
                                            infiniteLoop
                                            useKeyboardArrows
                                            className="presentation-mode">
                                            <div>
                                                <img src="/assets/images/forum/forum_1.jpg" />
                                            </div>
                                            <div>
                                                <img src="/assets/images/forum/forum_2.jpg" />
                                            </div>
                                            <div>
                                                <img src="/assets/images/forum/forum_4.jpg" />
                                            </div>
                                            <div>
                                                <img src="/assets/images/forum/forum_5.jpg" />
                                            </div>
                                            <div>
                                                <img src="/assets/images/forum/forum_6.jpg" />
                                            </div>
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ForumPage;
