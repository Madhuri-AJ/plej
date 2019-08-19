import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./common/header";
import routes from '../routes';

class HomePage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Router>
                    <div className="container-fluid p-0">
                        <Header/>
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
        )
    }
}

export default HomePage;