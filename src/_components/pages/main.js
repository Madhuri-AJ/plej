import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../common/footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class MainPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    render() {
        return (
            <div class="_1vdzHPH">
                <section class="_3UoOzEJ _2rbE6TC _2v5bHvx _1CqZaJN">
                    <div class="_1JMynM5 _3-6A3ch _1CqZaJN">
                        {/* <video autoplay="" class="_3h_jpHd _21UD1KG _3HiqiFI" muted=""
                            playsinline="" loop=""
                            src="https://gymbox-assets.enecdn.io/videos/global/gymbox-hero-v2-short.mp4">
                        </video>  */}                      
                        <Carousel showThumbs={false}
                            showStatus={false}
                            autoPlay interval={2000} 
                            infiniteLoop
                            useKeyboardArrows
                            className="presentation-mode">
                            <div>
                                <img src="https://wallpapershome.com/images/wallpapers/girl-2560x1440-fitness-exercise-gym-dumbbells-workout-sportswear-11081.jpg" />
                            </div>
                            <div>
                                <img src="https://images.wallpaperscraft.com/image/gym_disks_weight_bodybuilding_118105_2560x1600.jpg" />
                            </div>
                            <div>
                                <img src="https://wallpapercave.com/wp/wp2639561.jpg" />
                            </div>
                        </Carousel>
                    </div>
                    {/* <div class="_3d137aW sDHKtsB">
                        <div class="_3NcCK2a _2rbE6TC _2v5bHvx pRZSkbx VBD7Ow3">
                            <h1 class="_1jnoPLs _3x6v3-y">Anything Goes</h1>
                            <div class="FBl2DCz _2rbE6TC _2v5bHvx _3x6v3-y">
                                <h4 class="_3KWTFTz _2DGciQP">Watch</h4>
                            </div>
                        </div>
                    </div> */}
                    <span class="_3nHfkWi sDHKtsB" style={{ "opacity": "0" }}></span>
                    <span class="FUTUrGJ"></span>
                    <div class="_3VqQwD6 sDHKtsB">
                        <div class="_2tbaljn pRZSkbx">
                            <div class="YvuJKdN"></div>
                        </div>
                    </div>
                </section>
                <section class="_1UgSuTH _2rbE6TC _2v5bHvx">
                    <div class="awgZRb3 _2rbE6TC _2v5bHvx">
                        <div class="Yy4FTW7" style={{ "transform": "translateY(-80px);" }}>
                            <div class="_2gpiPPm BFf-lTn">
                                <span class="_3h_jpHd _3IixiR4 sDHKtsB"
                                    style={{ "backgroundImage": "url(\"/assets/images/classes/chalkrise.jpg\")" }}></span></div>
                            <div class="_2gpiPPm BFf-lTn"><span class="_3h_jpHd _3IixiR4 sDHKtsB"
                                style={{ "backgroundImage": "url(\"/assets/images/classes/barrebells.jpg\")" }}></span></div>
                            <div class="_2gpiPPm BFf-lTn"><span class="_3h_jpHd _3IixiR4 sDHKtsB"
                                style={{ "backgroundImage": "url(\"/assets/images/classes/hoop.jpg\")" }}></span></div>
                            <div class="_2gpiPPm BFf-lTn"><span class="_3h_jpHd _3IixiR4 sDHKtsB"
                                style={{ "backgroundImage": "url(\"/assets/images/classes/chalkrise.jpg\")" }}></span></div>
                        </div>
                        <div class="Yy4FTW7" style={{ "transform": "translateY(0px);" }}>
                            <div class="_2gpiPPm BFf-lTn"><span class="_3h_jpHd _3IixiR4 sDHKtsB"
                                style={{ "backgroundImage": "url(\"/assets/images/classes/matbeats.jpg\")" }}></span></div>
                            <div class="_2gpiPPm BFf-lTn"><span class="_3h_jpHd _3IixiR4 sDHKtsB"
                                style={{ "backgroundImage": " url(\"/assets/images/classes/snowmotion.jpg\")" }}></span></div>
                            <div class="_2gpiPPm BFf-lTn"><span class="_3h_jpHd _3IixiR4 sDHKtsB"
                                style={{ "backgroundImage": "url(\"/assets/images/classes/matbeats.jpg\")" }}></span></div>
                        </div>
                        <div class="Yy4FTW7" style={{ "transform": "translateY(-30px);" }}>
                            <div class="_2gpiPPm BFf-lTn"><span class="_3h_jpHd _3IixiR4 sDHKtsB"
                                style={{ "backgroundImage": " url(\"/assets/images/classes/escalate.jpg\")" }}></span></div>
                            <div class="_2gpiPPm BFf-lTn"><span class="_3h_jpHd _3IixiR4 sDHKtsB"
                                style={{ "backgroundImage": "url(\"/assets/images/classes/houseofj.jpg\")" }}></span></div>
                            <div class="_2gpiPPm BFf-lTn"><span class="_3h_jpHd _3IixiR4 sDHKtsB"
                                style={{ "backgroundImage": " url(\"/assets/images/classes/escalate.jpg\")" }}></span></div>
                        </div>
                        <div class="Yy4FTW7" style={{ "transform": "translateY(0px);" }}>
                            <div class="_2gpiPPm BFf-lTn"><span class="_3h_jpHd _3IixiR4 sDHKtsB"
                                style={{ "backgroundImage": " url(\"/assets/images/classes/stealth.jpg\")" }}></span></div>
                            <div class="_2gpiPPm BFf-lTn"><span class="_3h_jpHd _3IixiR4 sDHKtsB"
                                style={{ "backgroundImage": " url(\"/assets/images/classes/euphoria.jpg\")" }}></span></div>
                            <div class="_2gpiPPm BFf-lTn"><span class="_3h_jpHd _3IixiR4 sDHKtsB"
                                style={{ "backgroundImage": " url(\"/assets/images/classes/stealth.jpg\")" }}></span></div>
                        </div>
                        <div class="Yy4FTW7" style={{ "transform": "translateY(-70px);" }}>
                            <div class="_2gpiPPm BFf-lTn"><span class="_3h_jpHd _3IixiR4 sDHKtsB"
                                style={{ "backgroundImage": " url(\"/assets/images/classes/strongman.jpg\")" }}></span></div>
                            <div class="_2gpiPPm BFf-lTn"><span class="_3h_jpHd _3IixiR4 sDHKtsB"
                                style={{ "backgroundImage": "url(\"/assets/images/classes/paddleboardyoga.jpg\")" }}></span></div>
                            <div class="_2gpiPPm BFf-lTn"><span class="_3h_jpHd _3IixiR4 sDHKtsB"
                                style={{ "backgroundImage": " url(\"/assets/images/classes/strongman.jpg\")" }}></span></div>
                        </div>
                        <div class="A6gnRSw"></div>
                        <div class="lmco2Sv"></div>
                    </div>
                    <div class="_27RGXUG I7PwxVS"><a href="/classes">
                        <h2 class="_3fhPOEA _2_HaYMw">Bangalore’s unique classes</h2>
                    </a><NavLink class="Yd7bNNG _3Pq3GhV button" to="/location"><span>Explore Locations</span></NavLink></div>
                </section>

                <Footer />
            </div>
        )
    }
}

export default MainPage;