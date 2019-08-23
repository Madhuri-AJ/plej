import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../common/footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transform1: '0',
            transform2: '0',
            transform3: '0'
        }
        window.scrollTo({ top: 0, behavior: "smooth" });

    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        let scrollTop = (((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100));
        console.log("scrollTop",scrollTop)
        console.log((150 + -(scrollTop + scrollTop * 2.5)))
        let changedTransform1 = (150 + -(scrollTop + scrollTop * 2.5));
        let changedTransform2 = (-120 + (scrollTop + scrollTop * 1.1));
        let changedTransform3 = (120 + -(scrollTop + scrollTop * 1));
        if (scrollTop > 65) {
            this.setState({
                transform1: '-75',
                transform2: '17',
                transform3: '-11'
            });
        }
        else {
            this.setState({
                transform1: changedTransform1,
                transform2: changedTransform2,
                transform3: changedTransform3
            });
        }

    }

    render() {
        return (
            <div class="_1vdzHPH">
                <section class="_3UoOzEJ _2rbE6TC _2v5bHvx _1CqZaJN">
                    <div class="_1JMynM5 _3-6A3ch _1CqZaJN">
                        <video class="_3h_jpHd _21UD1KG _3HiqiFI"
                            src="/assets/images/demo.mp4"
                            muted autoplay=""
                            playsinline loop>
                        </video>
                        {/* <video autoplay="" class="_3h_jpHd _21UD1KG _3HiqiFI" muted=""
                            playsinline="" loop=""
                            src="/assets/images/video1.mp4">
                        </video>                        */}
                        {/* <Carousel showThumbs={false}
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
                        </Carousel> */}
                    </div>
                    <div class="_3d137aW sDHKtsB">
                        <div class="_3NcCK2a _2rbE6TC _2v5bHvx pRZSkbx VBD7Ow3">
                            <h1 class="_1jnoPLs _3x6v3-y">Never Give Up</h1>
                            <div class="FBl2DCz _2rbE6TC _2v5bHvx _3x6v3-y">
                                <h4 class="_3KWTFTz _2DGciQP">Join Plej Today</h4>
                            </div>
                        </div>
                    </div>
                    <span class="_3nHfkWi sDHKtsB" style={{ "opacity": "0" }}></span>
                    <span class="FUTUrGJ"></span>
                    <div class="_3VqQwD6 sDHKtsB">
                        <div class="_2tbaljn pRZSkbx">
                            <div class="YvuJKdN"></div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="_2JsEYIx _2rbE6TC _2v5bHvx">
                        <div class="ItM3bgw">
                            <div class="_1cT7yb7">
                                <div class="_1JMynM5 _2UxZdJd sDHKtsB">
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
                                {/* <div class="_3-DAWjj _2QsqUxL">
                                    <h2 class="_17Fvefa _2_HaYMw">Working at Plej</h2>
                                    <div class="_3KZTfFO _2rbE6TC _2v5bHvx">
                                        <h4 class="_1qlk-1P _2DGciQP">Watch</h4>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
                <section class="_1UgSuTH _2rbE6TC _2v5bHvx">
                    <div class="awgZRb3 _2rbE6TC _2v5bHvx">
                        <div class="Yy4FTW7" style={{ "transform": `translateY(${this.state.transform1}px) ` }}>
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
                        <div class="Yy4FTW7" style={{ "transform": `translateY(${this.state.transform2}px) ` }}>
                            <div class="_2gpiPPm BFf-lTn"><span class="_3h_jpHd _3IixiR4 sDHKtsB"
                                style={{ "backgroundImage": "url(\"/assets/images/classes/matbeats.jpg\")" }}></span></div>
                            <div class="_2gpiPPm BFf-lTn"><span class="_3h_jpHd _3IixiR4 sDHKtsB"
                                style={{ "backgroundImage": " url(\"/assets/images/classes/snowmotion.jpg\")" }}></span></div>
                            <div class="_2gpiPPm BFf-lTn"><span class="_3h_jpHd _3IixiR4 sDHKtsB"
                                style={{ "backgroundImage": "url(\"/assets/images/classes/matbeats.jpg\")" }}></span></div>
                        </div>
                        <div class="Yy4FTW7" style={{ "transform": `translateY(${this.state.transform3}px) ` }}>
                            <div class="_2gpiPPm BFf-lTn"><span class="_3h_jpHd _3IixiR4 sDHKtsB"
                                style={{ "backgroundImage": " url(\"/assets/images/classes/escalate.jpg\")" }}></span></div>
                            <div class="_2gpiPPm BFf-lTn"><span class="_3h_jpHd _3IixiR4 sDHKtsB"
                                style={{ "backgroundImage": "url(\"/assets/images/classes/houseofj.jpg\")" }}></span></div>
                            <div class="_2gpiPPm BFf-lTn"><span class="_3h_jpHd _3IixiR4 sDHKtsB"
                                style={{ "backgroundImage": " url(\"/assets/images/classes/escalate.jpg\")" }}></span></div>
                        </div>
                        <div class="Yy4FTW7" style={{ "transform": `translateY(${this.state.transform2}px) ` }}>
                            <div class="_2gpiPPm BFf-lTn"><span class="_3h_jpHd _3IixiR4 sDHKtsB"
                                style={{ "backgroundImage": " url(\"/assets/images/classes/stealth.jpg\")" }}></span></div>
                            <div class="_2gpiPPm BFf-lTn"><span class="_3h_jpHd _3IixiR4 sDHKtsB"
                                style={{ "backgroundImage": " url(\"/assets/images/classes/euphoria.jpg\")" }}></span></div>
                            <div class="_2gpiPPm BFf-lTn"><span class="_3h_jpHd _3IixiR4 sDHKtsB"
                                style={{ "backgroundImage": " url(\"/assets/images/classes/stealth.jpg\")" }}></span></div>
                        </div>
                        <div class="Yy4FTW7" style={{ "transform": `translateY(${this.state.transform1}px) ` }}>
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
                    </a><NavLink class="Yd7bNNG _3Pq3GhV button" to="/location"><span>Explore Locations</span></NavLink>
                    </div>
                </section>

                <Footer />
            </div>
        )
    }
}

export default MainPage;