import React , {Component} from "react";
import {NavLink} from "react-router-dom";
import Footer from "../common/footer";
import { api } from "../../env";
import {toast} from 'react-toastify';
import { formTypes } from "../../_constants/formTypes";
import axios from 'axios';
export default class FormPage extends Component{
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
        let {value} = event.target;
        this.setState({
            [event.target.name]: value
        }) ;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({isSubmitting: true});
        let url = `${api.apiCompany}general/send-email`;
        let payload = {
            fullName: this.state.fullName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            formType : formTypes.RESUME

        }

        axios.post(url, payload)
          .then(res => {
              if(res.status == 200){
                  toast.success(res.data.message);
              }
              this.setState({isSubmitting: false});
              this.clearForm();
            })
            .catch(err => {
                this.setState({isSubmitting: false});
              console.log('the error is ', err);
          })



    }

    clearForm = () => {
        this.setState({
            fullName: "",
            email: "",
            phone: "",
            location: "",
            message: "",
        })
    }
    render(){
        return(
            <div class="_1vdzHPH">
                <div className="_39EiYTl">
                    <form class="center-div">
                        <h2 class="_17Fvefa _2_HaYMw">Join Our Team</h2>
                        <div className="space">
                            <div class="attachment">
                                <input type="file" name="file" className="hide inputfile resume" />
                                    <label for="upload">
                                        <span className="text">APPLY WITH RESUME <span className="text-red">*</span></span>
                                        {/* <i class="required"> *</i> */}
                                    </label>
                            </div>
                        </div>
                        <br/><br/><br/>
                        <div className="bottom_space">
                            <input name="fullName" onChange={this.handleInputChange} type="text" class="first-half" placeholder="First Name" />
                            <input name="lastName" onChange={this.handleInputChange}  type="email" class="second-half" placeholder="Last Name" />
                        </div>
                        <div className="bottom_space">
                            <input type="text" class="" placeholder="Email" />
                        </div>
                        <div className="bottom_space">
                            <input type="text" class="" placeholder="Mobile" />
                        </div>
                        <div className="middle-btn bottom_space">
                            {/* <button className="_1x8JHAI _3Pq3GhV _3xVoYzA bottom_space button">Submit Application</button> */}
                            <button disabled={this.state.isSubmitting} onClick={this.handleSubmit} class="Yd7bNNG _3Pq3GhV button _1x8JHAI" to="#"><span>Submit Application</span></button>
                        </div>
                    </form>
                </div>
                <Footer/>
            </div>
        )
    }
}