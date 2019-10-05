import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
class GirinagarPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    render() {
        let array = ["/assets/images/rajajinagar/rajajinagar_5.jpg", "/assets/images/gym2.jpg", "/assets/images/gym3.jpg", "/assets/images/gym4.jpg", "/assets/images/gym5.jpg"];
        return (
            <div>
                <div class="_1vdzHPH">
                    <div class="o15HL62 _2v5bHvx">
                        <div class="_3juAkpr _1KSLoAe">
                            <div class="_2Ey81ib">
                                <ul class="_3_31gDn _2rbE6TC _2v5bHvx">
                                    <li class="_3O95Rh5 Cq_7NWt _2rbE6TC _2v5bHvx">
                                        <a class="_2HzoBao _2rbE6TC _2v5bHvx" href="bank.html">
                                            <h4 class="_2J9Yz6G _2rbE6TC _2v5bHvx VBD7Ow3">Girinagar</h4>
                                        </a>
                                        <div class="_Wl12W- VBD7Ow3">
                                            <ul class="M6EUSUT _2rbE6TC _2v5bHvx">
                                                <li class="_31cCPJV _2rbE6TC _2v5bHvx">
                                                    <div class="_2l5my07 _2HhTmXD _2v5bHvx">Timings</div>
                                                    <div class="_1Fu6UbF _1dohwpN _2v5bHvx">
                                                        <div>
                                                            <p>Mon to Sat : 5am – 11pm<br />  Sun : 7am – 7pm</p>
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
                                                        Nagendra Block, Banashankari Stage I, Banashankari, Bengaluru, Karnataka 560085
                                                        <a
                                                            href="https://g.page/plej-fitness---girinagar?share"
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
                                                        <span>Group Class Studio<br />
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
                                                <img src="/assets/images/rajajinagar/rajajinagar_1.jpg" />
                                            </div>
                                            <div>
                                                <img src="/assets/images/rajajinagar/rajajinagar_2.jpg" />
                                            </div>
                                            <div>
                                                <img src="/assets/images/rajajinagar/rajajinagar_4.jpg" />
                                            </div>
                                            <div>
                                                <img src="/assets/images/rajajinagar/rajajinagar_5.jpg" />
                                            </div>
                                            <div>
                                                <img src="/assets/images/rajajinagar/rajajinagar_6.jpg" />
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

export default GirinagarPage;
