import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./components/Utility.css"
import "./App.css"
import Menu from "./components/Menu"

const App = () => {
    return (
        <>
            {/* <h1>App</h1> */}
            <BrowserRouter>
                <Menu/>
                <Navigation/>
                {/* <Test/> */}
            </BrowserRouter>
        </>
    )
}

export default App;