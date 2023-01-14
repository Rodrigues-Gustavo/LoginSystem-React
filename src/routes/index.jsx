import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const Private = ({ Item }) => {
    const signed = false;

    return signed > 0 ? <Item /> : <signin />
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                   <Route exact path="/home" element={<Private Item={Home}/> } />
                   <Route path="/" element={<signin />}/>
                   <Route exact path="/signup" element={<signup />} />
                   <Route path="*" element={<signin />} /> 
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp