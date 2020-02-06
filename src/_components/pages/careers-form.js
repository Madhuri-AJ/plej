import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../common/footer";
import { api } from "../../env";
import { toast } from 'react-toastify';
import { formTypes } from "../../_constants/formTypes";
import axios from 'axios';
import swal from "sweetalert";
export default class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            lastName: "",
            email: "",
            phone: "",
            message1: "",
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
        //     lastName: this.state.lastName,
        //     email: this.state.email,
        //     phone: this.state.phone,
        //     formType: formTypes.RESUME
        // }

        
        let url = `https://bigappcompany.co.in/demos/cms/contact`;
        let name = this.state.fullName;
        let text = this.state.lastName;
        let email = this.state.email;
        let number = this.state.phone;

        let payload = new FormData()
        payload.append("product_name",`from_email=raj@movezafitness.com&to_email=raj@movezafitness.com&firstname=${name}&lastname=${text}&email=${email}&number=${number}&subject=Careers form`);

        axios.post(url, payload)
            .then(res => {
                if (res.status == 200) {
                    //   toast.success(res.data.message);
                    // swal({
                    //     title: "Done!",
                    //     text: res.data.message,
                    //     icon: "success"
                    // })
                    window.location.href="/thank-you";
                }
                this.setState({ isSubmitting: false });
                this.clearForm();
            })
            .catch(err => {
                this.setState({ isSubmitting: false });
                console.log('the error is ', err);
            })



    }

    clearForm = () => {
        this.setState({
            fullName: "",
            lastName: "",
            email: "",
            phone: "",
        })
    }

    getUploadedFileName = (e) => {
        let files = e.target.files,
            value = e.target.value,
            message1;
        if (files && files.length > 1) message1 = `${files.length} files selected`;
        else message1 = value.split('\\').pop();

        if (message1) this.setState({ ...this.state, message1 });
    }
    render() {
        return (
            <div class="_1vdzHPH">


                <div className="_39EiYTl">
                    <form class="center-div">
                        <h2 class="_17Fvefa _2_HaYMw">Join Our Team</h2>
                        {/* <div className="space">
                            <div class="attachment">
                                <input type="file" name="file" className="hide inputfile resume"  />
                                <label for="upload">
                                    <span className="text">APPLY WITH RESUME <span className="text-red">*</span></span>
                                </label>
                            </div>
                        </div> */}
                        {/* <input type="file" className="km-btn-file"
                        data-multiple-caption={this.state.message1}
                        onChange={this.getUploadedFileName}>
                    </input> */}
                        {/* <br /><br /><br /> */}

                        <div className="bottom_space">
                            <input value={this.state.fullName} name="fullName" onChange={this.handleInputChange} type="text" class="first-half" placeholder="First Name" />
                            <input value={this.state.lastName} name="lastName" onChange={this.handleInputChange} type="email" class="second-half" placeholder="Last Name" />
                        </div>
                        <div className="bottom_space">
                            <input onChange={this.handleInputChange} value={this.state.email} name="email" type="text" class="" placeholder="Email" />
                        </div>
                        <div className="bottom_space">
                            <input onChange={this.handleInputChange} value={this.state.phone} name="phone" type="text" class="" placeholder="Mobile" />
                        </div>
                        <div className="middle-btn bottom_space">
                            {/* <button className="_1x8JHAI _3Pq3GhV _3xVoYzA bottom_space button">Submit Application</button> */}
                            <button disabled={this.state.isSubmitting} onClick={this.handleSubmit} class="Yd7bNNG _3Pq3GhV button _1x8JHAI" to="#"><span>Submit Application</span></button>
                        </div>
                    </form>

                </div>
                <Footer />
            </div>
        )
    }
}