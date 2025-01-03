import * as React from "react";
import Homepage from "../pages/Home/homepage";
import {Route, Routes} from "react-router-dom";
import SignIn from "../components/sign-in/signing-in";
function Main(){
    return(
        <>
            <Routes >
                <Route exact path="/" Component={Homepage}/>
                <Route exact path="/signing" Component={SignIn}/>
            </Routes >
        </>
    );
}

export default Main;