import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import NavBar from '../components/NavBar';
import App from '../containers/App' 
  

const Router = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/" component={App} /> 
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
