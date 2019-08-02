import React from 'react';

// pages
import Page from '../templates/Page'
import Home from './Home'

// components
import { BrowserRouter as Router, Route } from "react-router-dom";

const Routers = () => {
    return (
        <Router>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={(props) => <Page content={Home} {...props} />} />
        </Router>
    )
}

export default Routers