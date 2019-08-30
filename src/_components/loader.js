import React, { Component } from "react";
export default class Loader extends Component {
    render() {
        return (
            <div className="loder-main">
                <div className="loader-sub">
                    <div className="loader-cell">
                        <img src="/assets/images/logo.png" />
                    </div>
                </div>
            </div>
        )
    }
}