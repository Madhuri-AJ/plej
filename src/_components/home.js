import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./common/header";
import routes from '../routes';
import { history } from "./history";
import Loader from "./loader";


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount = async () => {
        await setTimeout(() => {
            this.setState({ isLoading: false });
        }, 2000)
    }


    render() {
        return (
            < div >

                {this.state.isLoading &&
                    < Loader />
                }
    
                <div className={this.state.isLoading ?"hiddenclass":""}>
                    < Router history={history}>
                        <div className="container-fluid p-0">
                            <Header
                                isLoading={this.state.isLoading}
                            />
                            <Switch>
                                {routes.map((route, key) => {
                                    return route.component ? (
                                        <Route
                                            key={key}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            children={route.children}
                                            render={props => <route.component {...props} />}
                                        />
                                    ) : null;
                                })}
                            </Switch>
                        </div>
                    </Router>
                </div>

            </div >
        )
    }
}

export default HomePage;