import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../common/footer";
import axios from 'axios';
import { api } from "../../env";
import { toast } from 'react-toastify';
import { formTypes } from "../../_constants/formTypes";
import swal from 'sweetalert';

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
            success:""
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
        let url = `${api.apiCompany}general/send-email`;
        let payload = {
            fullName: this.state.fullName,
            email: this.state.email,
            phone: this.state.phone,
            location: this.state.location,
            message: this.state.message,
            formType: formTypes.CONTACT_US

        }

        axios.post(url, payload)
            .then(res => {
                if (res.status == 200) {
                    // toast.success(res.data.message);
                    swal({
                        title: "Done!",
                        text: res.data.message,
                        icon: "success"
                      })
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
                <div className="_39EiYTl">
                    <form class="center-div">
                        <h2 class="_17Fvefa _2_HaYMw">Get in Touch</h2>
                        <div className="bottom_space">
                            <input value={this.state.fullName} onChange={this.handleInputChange} name="fullName" type="text" class="first-half" placeholder="Full Name" />
                            <input value={this.state.email} onChange={this.handleInputChange} name="email" type="email" class="second-half" placeholder="Email" />
                        </div>
                        <div className="bottom_space">
                            <input value={this.state.phone} onChange={this.handleInputChange} name="phone" type="text" class="first-half" placeholder="Phone Number" />
                            <input value={this.state.location} onChange={this.handleInputChange} name="location" type="text" class="second-half" placeholder="Location" />
                        </div>
                        <div className="bottom_space">
                            <textarea value={this.state.message} onChange={this.handleInputChange} name="message" type="text" placeholder="Message" />
                        </div>
                        <div className="middle-btn">
                            {/* <button className="_1x8JHAI _3Pq3GhV _3xVoYzA button">Submit</button> */}
                            <button disabled={this.state.isSubmitting} onClick={this.handleSubmit} class="Yd7bNNG _3Pq3GhV button _1x8JHAI" to="#"><span>Submit</span></button>
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