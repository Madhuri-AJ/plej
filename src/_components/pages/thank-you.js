import React, { Component } from "react";
import Footer from "../common/footer";
import { Redirect} from "react-router-dom";
export default class ThankyouPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo({ top: 0, behavior: "smooth" });
        this.state = {
            redirect: false
        }
    }

    componentDidMount() {
        this.id = setTimeout(() => this.setState({ redirect: true }), 4000)
    }

    componentWillUnmount() {
        clearTimeout(this.id)
    }

    render() {
        return this.state.redirect
            ? <Redirect to="/" />
            : <div>
                <div class="_1vdzHPH">
                    <div class="thank">
                        <h1>Thank You</h1>
                        <p>Our team will contact you soon.</p>
                    </div>
                </div>
                <Footer />
            </div>
    }
}