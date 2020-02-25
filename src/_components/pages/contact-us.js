import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../common/footer";
import axios from 'axios';
import { api } from "../../env";
import { toast } from 'react-toastify';
import { formTypes } from "../../_constants/formTypes";
import swal from 'sweetalert';
import MetaTags from "react-meta-tags";

export default class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            email: "",
            phone: "",
            location: "",
            message: "",
            isSubmitting: false,
            showHideClassName: false,
            success: ""
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

        // payload.append("product_name", `from_email=raj@movezafitness.com&to_email=madhuri@bigappcompany.in&name=${name}&email=${email}&number=${number}&location=${text}&message=${lname}&subject=Contact Details`);

        axios.post(url, payload)
            .then(res => {
                if (res.status == 200) {
                    // toast.success(res.data.message);
                    window.location.href = "/thank-you";
                    // swal({
                    //     title: "Done!",
                    //     text: res.data.message,
                    //     icon: "success"
                    //   })
                    // this.setState({ showHideClassName : true, success: res.data.message})
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
        console.log('i am here.');
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
                    <title>Best Gym Near Me | Contact Us For Detalis - PlejFitness</title>
                    <meta name="description" content="Gyms Near Me in Bangalore for Weight Loss, Workout and Weight Training. ✓Fitness Centers ✓Crossfit Gyms ✓Best Gym" />
                    <meta name="keywords" content="Gym in Bangalore, Gym in Bellandur, Gym in forum Mall-Whitefield, Gym in Girinagar, Gym in Kumarapark, Gym in Panathur, Gym in Rajajinagar, Gym in VR Bengaluru, Gym in Jayanagar" />
                    <meta property="og:title" content="Best Gym Near Me | Contact Us For Detalis - PlejFitness" />
                    <meta property="og:description" content="Gyms Near Me in Bangalore for Weight Loss, Workout and Weight Training. ✓Fitness Centers ✓Crossfit Gyms ✓Best Gym" />
                </MetaTags>
                <div className="_39EiYTl">
                    <form class="center-div" onSubmit={this.handleSubmit.bind(this)}>
                        <h2 class="_17Fvefa _2_HaYMw">Get in Touch</h2>
                        <div className="bottom_space">
                            <input value={this.state.fullName} onChange={this.handleInputChange} name="fullName" type="text" class="first-half" placeholder="Full Name" required />
                            <input value={this.state.email} onChange={this.handleInputChange} name="email" type="email" class="second-half" placeholder="Email" required />
                        </div>
                        <div className="bottom_space">
                            <input value={this.state.phone} onChange={this.handleInputChange} name="phone" type="number" class="first-half" required placeholder="Phone Number" />
                            <input value={this.state.location} onChange={this.handleInputChange} name="location" type="text" class="second-half" placeholder="Location" required />
                        </div>
                        <div className="bottom_space">
                            <textarea value={this.state.message} onChange={this.handleInputChange} name="message" type="text" placeholder="Message" required />
                        </div>
                        <div className="middle-btn">
                            {/* <button className="_1x8JHAI _3Pq3GhV _3xVoYzA button">Submit</button> */}
                            <button disabled={this.state.isSubmitting} class="Yd7bNNG _3Pq3GhV button _1x8JHAI" ><span>Submit</span></button>
                        </div>
                    </form>
                </div>

                <div className={this.state.showHideClassName ? "success-modal" : "success-modal d-none"}>
                    <h5>{this.state.success}</h5>
                </div>

                <Footer />
            </div>
        )
    }
}