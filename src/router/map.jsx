
import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from "dva/router";


class RouterMap extends Component {
    render() {
        const { routes, history } = this.props;
        const defaultRoute = <Redirect from='/' to='/index/home' key={'default'}
            exact ></Redirect>
        return <Router history={history}>
            <Switch>
                {
                    routes && routes.map((item) => {
                        const children = item.children === undefined ? [] : item.children
                        const Comp = item.component;
                        if (item.token) {
                            if (!localStorage.getItem('token')) {
                                return <Redirect key={item.name + 'red'} to='/login' from={item.path} />
                            }
                        }
                        return <Route key={item.name + 'route'} path={item.path}
                            component={() => {
                                return <Comp routes={children} history={history}></Comp>
                            }} />
                    }).concat([defaultRoute])
                }
            </Switch>
        </Router>
    }
}
export default RouterMap;